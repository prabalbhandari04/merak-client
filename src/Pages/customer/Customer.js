import { useState, useEffect } from 'react';
//Redux
import {useSelector, useDispatch} from 'react-redux';
import {loadCustomers} from '../../redux/actions/usersActions';


import {
  Box,
  Card,
  Table,
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
import Scrollbar from '../../components/Scrollbar';
import { TableEmptyRows } from '../../components/table';
import AddCustomer from '../../molecules/AddCustomer';


// ----------------------------------------------------------------------



export default function Customer() {
 

  const dispatch = useDispatch();

  const { themeStretch } = useSettings();


  const {customers} = useSelector(state => state.data2); //Redux State


                


  //Fetching All Products - loadProducts le redux ko -> Action ma (dispatch gareko) Api call gareko cha (GET)
  useEffect(() => {
    dispatch(loadCustomers());
  }, [dispatch]);
  

  const {
    dense,
    page,
    rowsPerPage,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable({ defaultOrderBy: 'createDate' });

  const [tableData, ] = useState([]);


    const totalCustomer = customers.length




  return (
    <Page title="Customer: List">
      <Container maxWidth={themeStretch ? false : 'lg'}>

      <Typography variant="h3" component="h1" paragraph>
          Customer List
        </Typography>
       

       

        <Card>
         

          <Divider />

         

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800, position: 'relative', mt: '13px'}}>
             

              <Table size={dense ? 'small' : 'medium'}>
               
              <TableHead>
              
                    <TableRow>
                        <TableCell>
                          Name
                        </TableCell>

                        <TableCell>
                          Phone
                        </TableCell>

                        <TableCell>
                         Address
                        </TableCell>

                  
     
                    </TableRow>

                   

                  </TableHead>

                      <TableBody>

                      {customers && customers.map((customer) => {

                        
                        return (
                            <TableRow hover style={{textDecoration: 'none'}} key={customer.id}>
                              

                        


                              <TableCell align="left">{customer.name === null ? null : customer.name}</TableCell>
                              <TableCell align="left">{customer.phone === null ? null : customer.phone}</TableCell>
                              <TableCell align="left">{customer.address === null ? null : customer.address}</TableCell>
                           

                              
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
              count={totalCustomer}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={onChangePage}
              onRowsPerPageChange={onChangeRowsPerPage}
            />


          </Box>
        </Card>
      </Container>

        
        <AddCustomer/>

    </Page>
  );
}

