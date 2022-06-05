import React from 'react';


// Material Ui
import { Grid } from '@mui/material';
import Card from '../Molecules/Card'



const Filter = ({filteredList}) => {


  return (
    <>
    
    <Grid container spacing={3} style={{marginBottom: '30px',marginTop : '30px'}}>

      {filteredList && filteredList.map((product, index) => (
        <Grid  key={index} item xs={12} sm={6} md={3}>
          <Card product={product}/>
        </Grid>
      ))}

    </Grid>

   
    </>
  );
}

  

export default Filter 