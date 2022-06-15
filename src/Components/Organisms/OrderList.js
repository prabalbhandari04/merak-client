import React from 'react';


// Material Ui
import { Grid } from '@mui/material';
import OrderCard from '../Molecules/OrderCard';


const OrderList = ({filteredOrder}) => {


  return (
    <>
    
    <Grid container spacing={3} style={{marginBottom: '30px',marginTop : '30px'}}>

      {filteredOrder && filteredOrder.map((order, index) => (
        <Grid  key={index} item xs={12} sm={6} md={3}>
          <OrderCard order={order}/>
        </Grid>
      ))}

    </Grid>

   
    </>
  );
}

  

export default OrderList 