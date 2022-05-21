import React from 'react';


// Material Ui
import { Grid } from '@mui/material';
import Card from '../Molecules/Card'



const CardList = ({filteredProduct}) => {


  return (
    <>
    
    <Grid container spacing={3} style={{marginBottom: '30px'}}>

      {filteredProduct && filteredProduct.map((product, index) => (
        <Grid  key={index} item xs={12} sm={6} md={3}>
          <Card product={product}/>
        </Grid>
      ))}

    </Grid>

   
    </>
  );
}

  

export default CardList 
