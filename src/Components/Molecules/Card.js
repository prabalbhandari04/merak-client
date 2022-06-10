
import React, {useState, useEffect} from 'react';

import { Link as RouterLink } from 'react-router-dom';
import MenuButton from './MenuButton';
import styledComponents from 'styled-components';

// Material Ui Components
import { Box, Link, Card as Cards, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

// Material Ui
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ProductDetails from './ProductDetails';


//Redux
import {useSelector, useDispatch} from 'react-redux';
import { loadVariants } from '../../Redux/Actions/productsActions';


// -----------Styling Product Image---------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ------------------------


const Container = styledComponents.div`
  display: flex;
  justify-content: space-between;
  background: #181818;
`



const Card = ({ product }) => {


  const dispatch = useDispatch(); //Redux Dispatch
  const {variants} = useSelector(state => state.data); //Redux State
 

  //Fetching All Products - loadProducts le redux ko -> Action ma (dispatch gareko) Api call gareko cha (GET)
  useEffect(() => {
    dispatch(loadVariants());
  }, [dispatch]);



  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <>
    <Cards sx={{border: "none", boxShadow: "none", outline: 'none' }} style={{cursor: 'pointer'}} onClick={handleClickOpen}>
      
      <Box sx={{ pt: '100%', position: 'relative'}}>
          {variants.map((obj, index) => {

          if (product.id === obj.product && obj.is_default === true) { 
            return (<span key={index}><ProductImgStyle alt={product.name} src={obj.image}/></span>)
          }  else {
            return null
          }

          })}
      </Box>

      <Stack spacing={2} sx={{ p: 1}} style={{background: '#181818'}}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle1" style={{color:'gray'}} noWrap>
            {product.name}
            <br></br>
            <span style={{color: '#00A7E3'}}>0 orders</span>
          </Typography>
        </Link>
      </Stack>
      
    </Cards>


    
    
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Container>

          <DialogTitle id="alert-dialog-title" style={{background: '#181818', color: 'gray'}}>
            {"Product Details"}
          </DialogTitle>
          
          <MenuButton product={product}/>

        </Container>


        <DialogContent style={{background: '#181818', color: 'gray'}}>
          <DialogContentText id="alert-dialog-description" component="div">
            <ProductDetails product={product}/>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    
    </>
  );
}



export default Card;