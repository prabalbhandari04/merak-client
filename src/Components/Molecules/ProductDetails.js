import React from 'react'
import {Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
//-----------------------------------------
import PropTypes from 'prop-types';

  
  
  const ProductImgStyle = styled('img')({
      top: 50,
      left:430,
      width: '40%',
      height: '70%',
      objectFit: 'cover',
      position: 'absolute',
  
    });


const ProductDetails = ({ product }) => {


return (
        <div>
            <ProductImgStyle alt={product.title} src={product.img} />
            <Stack spacing={2} sx={{ p: 1}} style={{background: 'black',position:'absolute',top:50,left:10}} >
                <Typography variant="subtitle1" style={{color:'gray'}} noWrap component="span">
                  <h1>{product.title}</h1>
                  <span style={{color: '#00A7E3'}}>Description: {product.description}</span>
                  <br></br>
                  <span style={{color: '#00A7E3'}}>Price: {product.price} Nrs</span>
                  <br></br>
                  <span style={{color: '#00A7E3'}}>Stock: {product.quantity} Pcs</span>
                </Typography>
            </Stack>
      
            </div>
)
};



ProductDetails.propTypes = {
    product: PropTypes.object,
  };



export default ProductDetails