
import React, {useRef, useState} from 'react';

import { Link as RouterLink } from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux';
import {setProducts} from '../../Redux/Actions/productActions';

// Material Ui Components
import { Box, Link, Card as Cards, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

// Material Ui
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import ProductDetails from './ProductDetails';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import styledComponents from 'styled-components';
import Button from '@mui/material/Button';


// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';


// -----------Styling Product Image---------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ------------------------

const Cont = styledComponents.div`
  display: flex;
  justify-content: space-between;
  background: #181818;
`

const Card = ({ product }) => {
 
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [oopen, setOOpen] = useState(false);

  const handleClickOOpen = () => {
    setIsOpen(false)
    console.log('=======================================================================================================================')
    setOOpen(true);
  };

  const handleCloose = () => {
    setOOpen(false);
  };


  const { name, quantity} = product;
  const image = product.variant[0].image;

  console.log(product)

  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <Cards sx={{border: "none", boxShadow: "none", outline: 'none' }} style={{cursor: 'pointer'}} onClick={handleClickOpen}>
      
      <Box sx={{ pt: '100%', position: 'relative'}}>
        <ProductImgStyle alt={name} src="https://imgs.search.brave.com/Q2wHDR47Vj0_4in38kn4u88hUhs4I9NGKrUR-psgFXQ/rs:fit:750:1000:1/g:ce/aHR0cDovL3d3dy5k/dW1wYWRheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MDQvdGhlLXJhbmRv/bS1waWNzLTQ5NS5q/cGc" />
        {/* <ProductImgStyle alt={name} src={image} /> */}
      </Box>

      <Stack spacing={2} sx={{ p: 1}} style={{background: '#181818'}}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle1" style={{color:'gray'}} noWrap>
            {name}
            <br></br>
            <span style={{color: '#00A7E3'}}>{quantity} orders</span>
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
        <Cont>
          <DialogTitle id="alert-dialog-title" style={{background: '#181818', color: 'gray'}}>
            {"Product Details"}
          </DialogTitle>

          <IconButton ref={ref} onClick={() => setIsOpen(true)}>
              <MoreVertIcon style={{ color: 'white' }}/>
          </IconButton>

          <Menu
            open={isOpen}
            anchorEl={ref.current}
            onClose={() => setIsOpen(false)}
            PaperProps={{
              sx: { width: 200, maxWidth: '100%' },
            }}
            style={{ color: '#181818'}}
            // anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            // transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >

            <MenuItem component={RouterLink} to="#" sx={{ color: 'text.secondary' }} onClick={() => setIsOpen(false)}>
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
              <ListItemText primary="Edit" primaryTypographyProps={{ variant: 'body2' }} />
            </MenuItem>

            <Divider sx={{ my: 0.5 }} />

            <MenuItem sx={{ color: 'text.secondary' }} onClick={() => handleClickOOpen()}>
              <ListItemIcon >
                <DeleteIcon style={{ color: 'red' }}/>
              </ListItemIcon>
              <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }} style={{ color: 'red' }}/>
            </MenuItem>

          </Menu>
          
          <Dialog
            open={oopen}
            onClose={handleCloose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Delete this product?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure you want to delete the product {product.name}?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloose}>Cancel</Button>
              <Button onClick={handleCloose} autoFocus style={{ color: 'red' }}>
                Delete
              </Button>
            </DialogActions>
          </Dialog>

        </Cont>
        
        <DialogContent style={{background: '#181818', color: 'gray'}}>
          <DialogContentText id="alert-dialog-description">
            <ProductDetails product={product}/>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    
    </>
  );
}



export default Card;