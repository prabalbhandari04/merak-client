import { useState, useEffect } from 'react';
//Redux
import {useSelector, useDispatch} from 'react-redux';
import {loadOrders} from '../../redux/actions/ordersActions';


import { Link as RouterLink} from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  Table,
  Stack,
  Divider,
  TableBody,
  Container,
  TableContainer,
  TablePagination,
  Typography,
  TableRow, TableCell, TableHead,  
} from '@mui/material';


import useSettings from '../../hooks/useSettings';
import useTable, {  emptyRows } from '../../hooks/useTable';

// components
import Page from '../../components/Page';
import Label from '../../components/Label';
import Scrollbar from '../../components/Scrollbar';
import { TableEmptyRows } from '../../components/table';
// sections
import InvoiceAnalytic from './InvoiceAnalytic';

// ----------------------------------------------------------------------



export default function Invoice() {
  const theme = useTheme();

  const dispatch = useDispatch();

  const { themeStretch } = useSettings();


  const {orders} = useSelector(state => state.data1); //Redux State


  //Fetching All Products - loadProducts le redux ko -> Action ma (dispatch gareko) Api call gareko cha (GET)
  useEffect(() => {
    dispatch(loadOrders());
  }, [dispatch]);
  

  const {
    dense,
    page,
    rowsPerPage,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable({ defaultOrderBy: 'createDate' });

  const [tableData, ] = useState([]);



   //Reducing the order array to group by status

   let orderStatus = orders.reduce((acc, curr) => {
    const status = curr.status.toLowerCase();
    (acc[status] = acc[status] || []).push({
      invoice: curr.invoice,
    });
    return acc;
  }, {});
  

  let completed = orderStatus.completed !== undefined ? orderStatus.completed.length : 0;
  let pending = orderStatus.pending !== undefined ? orderStatus.pending.length : 0;
  let cancelled = orderStatus.cancelled !== undefined ? orderStatus.cancelled.length : 0;
  let total = completed + pending + cancelled;






  return (
    <Page title="Invoice: List">
      <Container maxWidth={themeStretch ? false : 'lg'}>

      <Typography variant="h3" component="h1" paragraph>
          Invoice List
        </Typography>
       

        <Card sx={{ mb: 5, mt: 5, }}>
          <Scrollbar>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
              sx={{ py: 2 }}
            >
              <InvoiceAnalytic
                title="Total"
                total={total}
                percent={100*total/total}
                label="invoice"
                icon="ic:round-receipt"
                color={theme.palette.info.main}
              />

              <InvoiceAnalytic
                title="Completed"
                total={completed}
                percent={100*completed/total}
                label="invoice"
                icon="eva:checkmark-circle-2-fill"
                color={theme.palette.success.main}
              />
              <InvoiceAnalytic
                title="Pending"
                total={pending}
                percent={100*pending/total}
                label="invoice"
                icon="eva:clock-fill"
                color={theme.palette.warning.main}
              />
              <InvoiceAnalytic
                title="Cancelled"
                total={cancelled}
                percent={100*cancelled/total}
                label="invoice"
                icon="eva:bell-fill"
                color={theme.palette.error.main}
              />
              
            </Stack>
          </Scrollbar>
        </Card>

        <Card>
         

          <Divider />

         

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800, position: 'relative', mt: '13px'}}>
             

              <Table size={dense ? 'small' : 'medium'}>
               
              <TableHead>
              
                    <TableRow>
                        <TableCell>
                          Invoice
                        </TableCell>

                        <TableCell>
                          Ordered by
                        </TableCell>

                        <TableCell>
                         Assigned to
                        </TableCell>

                        <TableCell>
                         Ordered date
                        </TableCell>

                        <TableCell>
                          Status
                        </TableCell>
     
                    </TableRow>

                   

                  </TableHead>

                      <TableBody>

                      {orders && orders.map((orders) => {
                
                        return (
                            <TableRow hover style={{textDecoration: 'none'}} to={`/dashboard/invoice/${orders.invoice}`} component={RouterLink}>
                              

                              <TableCell sx={{ display: 'flex', alignItems: 'center' }}>

                                <Stack>
                                  <Typography variant="subtitle2" noWrap>
                                    {orders.invoice}
                                  </Typography>
                                </Stack>
                              </TableCell>

                              <TableCell align="left">{orders.ordered_by === null ? null : orders.ordered_by.name}</TableCell>

                              <TableCell align="left">{orders.assigned_to === null ? null : orders.assigned_to.full_name}</TableCell>

                              <TableCell align="left">{orders.ordered_date === null ? null : orders.ordered_date}</TableCell>

                              

                              <TableCell align="left">
                                <Label
                                  variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
                                  color={
                                    (orders.status === 'COMPLETED' && 'success') ||
                                    (orders.status === 'PENDING' && 'warning') ||
                                    (orders.status === 'CANCELLED' && 'error') ||
                                    'default'
                                  }
                                  sx={{ textTransform: 'capitalize' }}
                                >
                                  {orders.status}
                                </Label>
                              </TableCell>

                              
                            </TableRow>
                              )
                             })}

                  <TableEmptyRows emptyRows={emptyRows(page, rowsPerPage, tableData.length)} />

               
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <Box sx={{ position: 'relative' }}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={total}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={onChangePage}
              onRowsPerPageChange={onChangeRowsPerPage}
            />


          </Box>
        </Card>
      </Container>
    </Page>
  );
}

