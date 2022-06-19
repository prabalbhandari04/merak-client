
import React, {useState} from 'react';

import { Link as RouterLink } from 'react-router-dom';

import styledComponents from 'styled-components';

// Material Ui Components
import { Link, Card as Cards, Typography, Stack } from '@mui/material';

// Material Ui
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OrderDetails from './OrderDetails';
import DeleteIcon from '@mui/icons-material/Delete';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';


//Redux
import {useSelector, useDispatch} from 'react-redux';
import {deleteOrders} from '../../Redux/Actions/ordersActions';

// -----------Styling Product Image---------

// const ProductImgStyle = styled('img')({
//   top: 0,
//   width: '100%',
//   height: '100%',
//   objectFit: 'cover',
//   position: 'absolute',
// });

// ------------------------

const Container = styledComponents.div`
  display: flex;
  justify-content: space-between;
  background: #181818;
  align-item: center;
`

// <<<<<<< prabal
const OrderCard = ({ order }) => {
  const [open, setOpen] = useState(false);

  const [open2, setOpen2] = useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const dispatch = useDispatch(); //Redux Dispatch

  const handleClickOpen = () => {
// =======
// const Card = ( {order} ) => {
//   const [open, setOpen] = useState(false);

//   const [open2, setOpen2] = useState(false);

//   const handleClickOpen2 = () => {
//     setOpen2(true);
//   };

//   const handleClose2 = () => {
//     setOpen2(false);
//   };

//   const dispatch = useDispatch(); //Redux Dispatch

//   const handleClickOpen = (e) => {
//     e.preventDefault()
// >>>>>>> order
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (uuid) =>{
    handleClose2()
    dispatch(deleteOrders(uuid))

  }

  const url = "http://localhost:3000"
  const handleBill = (uuid) =>{
    var win = window.open(url+"/bill/"+order.invoice , '_blank');
    console.log(uuid)
    win.focus();
  }

//   const { name, quantity} = product;
//   const image = product.variant[0].image;

  return (
    <>
    <Cards variant="outlined" sx={{border: "outlined", boxShadow: "none", outline: '2px', width:"25rem"}} style={{cursor: 'pointer', backgroundColor: '#181818'}} onClick={handleClickOpen} >
      <Stack spacing={2} sx={{ p: 1}} style={{background: '#181818'}}>
        <Link to="#" color="inherit" underline="none" component={RouterLink}>
          <Typography variant="subtitle1" style={{color:'#00A7E3'}} noWrap>
            {order.invoice}
          </Typography>
          <br></br>
          <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
           <span style={{color: 'gray'}}> Ordered by: </span>
            {
              order.ordered_by === null ?
              <p></p>
              :
              <p>
                {order.ordered_by.full_name}
              </p>
            }
          </Typography>
         
          <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">

           <span style={{color: 'gray'}}> Assigned to: </span> 
          {
            order.assigned_to === null ?
             <p></p>
            :
            <p>
              {order.assigned_to.full_name}
            </p>
          }

          </Typography>
          
          <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
           <span style={{color: 'gray'}}> Status: </span> {order.status}
          </Typography>
          
          <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
           <span style={{color: 'gray'}}> Delivery Location: </span>
          </Typography>
        </Link>
      </Stack>
      
    </Cards>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth="lg"
        sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 600 } }}
      >
        <Container>
          <DialogTitle id="alert-dialog-title" style={{background: '#181818', color: 'gray'}}>
            {"Order Details"}
          </DialogTitle>

          <Button>
            <DescriptionIcon style={{color: 'blue', margin:'10px' }} onClick={handleBill}/>
          </Button>

          <Button disabled={order.status === "CANCELLED"? 'boolean': false}>

            <DeleteIcon style={{color: 'red', margin:'10px' }} onClick={handleClickOpen2}/>
          </Button>
        </Container>
        <DialogContent style={{background: '#181818', color: 'gray'}}>

          <OrderDetails order={order} />

          {/* <DialogContentText id="alert-dialog-description">
            
          </DialogContentText> */}
        </DialogContent>
      </Dialog>

          <Dialog
            open={open2}
            onClose={handleClose2}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" style={{color: 'white', background: '#181818'}}>
              {"Delete this product?"}
            </DialogTitle>
            <DialogContent style={{color: 'white', background: '#181818'}}>
              <DialogContentText id="alert-dialog-description" style={{color: 'white'}}>
                Are you sure you want to delete the Order
              </DialogContentText>
            </DialogContent>
            <DialogActions style={{color: 'white', background: '#181818'}}>
              <Button onClick={handleClose2} style={{color: 'white'}}>Cancel</Button>
              <Button autoFocus style={{ color: 'red' }} onClick={() => handleDelete(order.invoice)}>
                Delete
              </Button>
            </DialogActions>
          </Dialog>
    
    </>
  );
}



export default OrderCard;
