import PropTypes from 'prop-types';

// @mui
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  Grid,
  Table,
  Divider,
  TableRow,
  TableBody,
  TableHead,
  TableCell,
  Typography,
  TableContainer,
} from '@mui/material';
// utils
import { fDate } from '../../../utils/formatTime';
// components
import Label from '../../../components/Label';
import Image from '../../../components/Image';
import Scrollbar from '../../../components/Scrollbar';
//
import InvoiceToolbar from './InvoiceToolbar';
import EmptyContent from '../../../components/EmptyContent';

// ----------------------------------------------------------------------

const RowResultStyle = styled(TableRow)(({ theme }) => ({
  '& td': {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

// ----------------------------------------------------------------------

InvoiceDetails.propTypes = {
  invoice: PropTypes.object.isRequired,
};

export default function InvoiceDetails({ invoice }) {
  const theme = useTheme();

  if (!invoice) {
    return <EmptyContent
    title="No Invoice Found"
    description={`You don't have any invoice for the given id.`}
    sx={{
      '& span.MuiBox-root': { height: 160 },
    }}
  />
  }

  

  return (
    <>
      <InvoiceToolbar invoice={invoice} />

      <Card sx={{ pt: 5, px: 5 }}>
        <Grid container>
          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Image disabledEffect visibleByDefault alt="logo" src="/logo/logo_full.png" sx={{ maxWidth: 120 }} />
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Box sx={{ textAlign: { sm: 'right' } }}>
              <Label
                variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
                color={
                  (invoice.status === 'COMPLETED' && 'success') ||
                  (invoice.status === 'PENDING' && 'warning') ||
                  (invoice.status === 'CANCELLED' && 'error') ||
                  'default'
                }
                sx={{ textTransform: 'uppercase', mb: 1 }}
              >
                {invoice.status}
              </Label>

              <Typography variant="h6">{invoice.invoice}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Invoice from
            </Typography>
            <Typography variant="body2">{invoice.assigned_to !== null ? invoice.assigned_to.full_name : null}</Typography>
            <Typography variant="body2">{invoice.assigned_to !== null ? invoice.assigned_to.email : null}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Invoice to
            </Typography>
            <Typography variant="body2">{invoice.ordered_by !== null ? invoice.ordered_by.name : null}</Typography>
            <Typography variant="body2">{invoice.ordered_by !== null ? invoice.ordered_by.address : null}</Typography>
            <Typography variant="body2">Phone: {invoice.ordered_by !== null ? invoice.ordered_by.phone : null}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              date create
            </Typography>
            <Typography variant="body2">{fDate(invoice.ordered_date)}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Due date
            </Typography>
            <Typography variant="body2">{fDate(invoice.completed_date !== null ? invoice.completed_date : invoice.ordered_date)}</Typography>
          </Grid>
        </Grid>

        <Scrollbar>
          <TableContainer sx={{ minWidth: 960 }}>
            <Table>
              <TableHead
                sx={{
                  borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
                  '& th': { backgroundColor: 'transparent' },
                }}
              >
                <TableRow>
                  <TableCell width={40}>#</TableCell>
                  <TableCell align="left">Description</TableCell>
                  <TableCell align="left">Qty</TableCell>
                  <TableCell align="right">Unit price</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {invoice.items.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
                    }}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell align="left">
                      <Box sx={{ maxWidth: 560 }}>
                        <Typography variant="subtitle2">{row.product.sku}</Typography>
                        
                      </Box>
                    </TableCell>
                    <TableCell align="left">{row.quantity}</TableCell>
                    <TableCell align="right">Rs {row.product.price}</TableCell>
                    <TableCell align="right">Rs {row.product.price * row.quantity}</TableCell>
                  </TableRow>
                ))}

                <RowResultStyle>
                  <TableCell colSpan={3} />
                  <TableCell align="right">
                    <Box sx={{ mt: 2 }} />
                    <Typography>Subtotal</Typography>
                  </TableCell>
                  <TableCell align="right" width={120}>
                    <Box sx={{ mt: 2 }} />
                    <Typography>Rs {invoice.sub_total}</Typography>
                  </TableCell>
                </RowResultStyle>

                <RowResultStyle>
                  <TableCell colSpan={3} />
                  <TableCell align="right">
                    <Typography>Taxes</Typography>
                  </TableCell>
                  <TableCell align="right" width={120}>
                    <Typography>2%</Typography>
                  </TableCell>
                </RowResultStyle>

                <RowResultStyle>
                  <TableCell colSpan={3} />
                  <TableCell align="right">
                    <Typography variant="h6">Total</Typography>
                  </TableCell>
                  <TableCell align="right" width={140}>
                    <Typography variant="h6">Rs {invoice.total}</Typography>
                  </TableCell>
                </RowResultStyle>
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Divider sx={{ mt: 5 }} />

        <Grid container>
          <Grid item xs={12} md={9} sx={{ py: 3 }}>
            <Typography variant="subtitle2">NOTES</Typography>
            <Typography variant="body2">
                Payment of invoices is completed by the completion date specified!
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} sx={{ py: 3, textAlign: 'right' }}>
            <Typography variant="subtitle2">Have A Question?</Typography>
            <Typography variant="body2">https://merak.ga</Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
