import React from 'react';


// Material Ui
import { Grid } from '@mui/material';
import OrderCard from '../Molecules/OrderCard'



const Filter = ({orderFilteredList}) => {


  return (
    <>
    
    <Grid container spacing={3} style={{marginBottom: '30px',marginTop : '30px'}}>

      {orderFilteredList && orderFilteredList.map((order, index) => (
        <Grid  key={index} item xs={12} sm={6} md={3}>
          <OrderCard order={order}/>
        </Grid>
      ))}

    </Grid>

   
    </>
  );
}

  

export default Filter 