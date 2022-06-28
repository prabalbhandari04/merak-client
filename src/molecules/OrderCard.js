
import React, {useRef, useState} from 'react';


import { styled } from '@mui/material/styles';

// Material Ui Components
import { Container, Card as Cards, Typography} from '@mui/material';

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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';

import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';


//Redux
import {useDispatch} from 'react-redux';
import {deleteOrders} from '../redux/actions/ordersActions';



const RootStyle = styled(Cards)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2, 2, 2, 3),
}));



const OrderCard = ({ order }) => {

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

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



  return (
    <>


<RootStyle style={{cursor: 'pointer'}} onClick={handleClickOpen} >
          <div>
          
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            <span style={{color: 'gray', textAlign: 'left'}}> Ordered by: </span>
              {
              order.ordered_by === null ?
              <p></p>
              :
              <span style={{color: 'gray', textAlign: 'right'}}>
                {order.ordered_by.full_name}
              </span>
            }
            </Typography>


            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }} >

                <span style={{color: 'gray'}}> Assigned to: </span> 
              {
                order.assigned_to === null ?
                <p></p>
                :
                <span >
                  {order.assigned_to.full_name}
                </span>
              }

            </Typography>


            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}  >
                <span style={{color: 'gray'}}> Status: </span> {order.status}
            </Typography>

            

          </div>
          
        </RootStyle>



      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

      <Container>
       
          <DialogTitle id="alert-dialog-title">
            {"Order Details"}

            <IconButton ref={ref} onClick={() => setIsOpen(true)}>
              <MoreVertIcon style={{ color: 'white' }}/>
        </IconButton>

          <Menu
            open={isOpen}
            anchorEl={ref.current}
            onClose={() => setIsOpen(false)}
            PaperProps={{
              sx: { width: 200, maxWidth: '100%'},
            }}
            style={{ color: '#181818'}}
          >

            <MenuItem sx={{ color: 'white' }} onClick={() => handleBill()}>
              <ListItemIcon style={{color: 'white'}}>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary="Bill" primaryTypographyProps={{ variant: 'body2' }} />
            </MenuItem>

            <Divider sx={{ my: 0.5, background: 'gray'}} />

            <MenuItem sx={{ color: 'text.secondary' }} onClick={() => handleClickOpen2()} disabled={order.status === "CANCELLED"? 'boolean': false}>
              <ListItemIcon  style={{color: 'white'}}>
                <DeleteIcon style={{ color: 'red' }}/>
              </ListItemIcon>
              <ListItemText primary="Cancel" primaryTypographyProps={{ variant: 'body2' }} style={{ color: 'red' }}/>
            </MenuItem>

          </Menu>
          </DialogTitle>
          

      

        
        </Container>
        <DialogContent>

          <DialogContentText id="alert-dialog-description" component="div">
            <OrderDetails order={order} />
          </DialogContentText>
          
        </DialogContent>
      </Dialog>



          <Dialog
            open={open2}
            onClose={handleClose2}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" >
              {"Cancel this order?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" style={{color: 'white'}}>
                Are you sure you want to cancel the Order
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose2} style={{color: 'white'}}>No</Button>
              <Button autoFocus style={{ color: 'red' }} onClick={() => handleDelete(order.invoice)}>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
    
    </>
  );
}



export default OrderCard;
