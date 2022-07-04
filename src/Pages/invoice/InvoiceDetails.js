import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {loadOrders} from '../../redux/actions/ordersActions';

// @mui
import { Container, Typography } from '@mui/material';

// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';

import Invoice from './details/index';

// ----------------------------------------------------------------------

export default function InvoiceDetails() {

  const dispatch = useDispatch();
  const {orders} = useSelector(state => state.data1); //Redux State

  const { themeStretch } = useSettings();

  const { id } = useParams();

  
  //Fetching All Products - loadProducts le redux ko -> Action ma (dispatch gareko) Api call gareko cha (GET)
  useEffect(() => {
    dispatch(loadOrders());
  }, [dispatch]);

  

  const invoice = orders.find((order) => order.invoice === id);


  return (
    <Page title="Invoice: View">
      <Container maxWidth={themeStretch ? false : 'lg'}>

      <Typography variant="h3" component="h1" paragraph>
          Invoice Details
        </Typography>

      <Invoice invoice={invoice} />
      
      </Container>
    </Page>
  );
}
