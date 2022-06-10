
import React from 'react';
import {Grid} from "@material-ui/core";


//Product Details Info
import Info from '../Atoms/Info';


const ProductDetails = ({ product }) => { 


  return (


    <Grid container spacing={1} style={{maxWidth: 1100, display: 'flex', justifyContent: 'center'}}>
        <Info product={product}/>
    </Grid>
)
};




export default ProductDetails