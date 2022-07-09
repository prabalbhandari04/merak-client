import React, {useEffect, useState} from 'react';


// @mui
import { Box, Card, Typography, Stack, Container } from '@mui/material';

// Material Ui
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ProductDetails from './ProductDetails';


// redux
import {useSelector, useDispatch} from 'react-redux';
import { loadVariants } from '../redux/actions/productsActions';

// components
import Label from '../components/Label';
import Image from '../components/Image';
import MenuButton from './MenuButton';

// ----------------------------------------------------------------------


const ProductCard = ({ product }) => {

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

    <Card  style={{cursor: 'pointer'}} onClick={handleClickOpen}>
      <Box sx={{ position: 'relative' }}>
       
          {/* <Label
            variant="filled"
            color={('apple' === 'sale' && 'error') || 'info'}
            sx={{
              top: 16,
              right: 16,
              zIndex: 9,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            Test
          </Label> */}
       
          {variants.map((obj, index) => {

            if (product.id === obj.product && obj.is_default === true) { 
              return (<span key={index}><Image alt={product.name} src={obj.image} ratio="1/1" /></span>)
            }  else {
              return null
            }

            })}
        
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
       
          <Typography variant="subtitle2" noWrap>
            {product.name}
          </Typography>
       

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {/* <ColorPreview colors={colors} /> */}

          <Stack direction="row" spacing={0.5}>
    
            <Typography variant="subtitle1">0 Orders</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>



      <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      >
      <Container>

        <DialogTitle id="alert-dialog-title">
          {"Product Details"}

          <MenuButton product={product}/>
        </DialogTitle>
        
        

      </Container>


      <DialogContent>
        <DialogContentText id="alert-dialog-description" component="div">
          <ProductDetails product={product}/>
        </DialogContentText>
      </DialogContent>
      </Dialog>

</>
  );
}

export default ProductCard;