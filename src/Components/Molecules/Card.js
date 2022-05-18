//Data match garna use gareko not necessary to use
import PropTypes from 'prop-types';
import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

// Material Ui Components
import { Box, Link, Card as Cards, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

// -----------Styling Product Image---------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ------------------------



const Card = ({ product }) => {

  const { title, img, quantity} = product;

  return (
    <Cards sx={{border: "none", boxShadow: "none", outline: 'none' }} style={{cursor: 'pointer'}} >
      
      <Box sx={{ pt: '100%', position: 'relative'}}>
        <ProductImgStyle alt={title} src={img} />
      </Box>

      <Stack spacing={2} sx={{ p: 1}} style={{background: '#181818'}}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle1" style={{color:'gray'}} noWrap>
            <div>
              {title}
            </div>
            <span style={{color: '#00A7E3'}}>{quantity} orders</span>
          </Typography>
        </Link>
      </Stack>
    </Cards>
  );
}

//Not necessary - ignore
Card.propTypes = {
  product: PropTypes.object,
};


export default Card;