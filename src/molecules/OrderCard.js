
import React, {useRef, useState} from 'react';

import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';

// Material Ui Components
import { Container, Card as Cards, Typography} from '@mui/material';

// Material Ui
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OrderDetails from './OrderDetails';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import DescriptionIcon from '@mui/icons-material/Description';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';

import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';


//Redux
import {useDispatch} from 'react-redux';
import {putOrders, deleteOrders} from '../redux/actions/ordersActions';



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

  const handleCancel = (uuid) =>{

    

    // const orders = {
    //   assigned_to: order.assigned_to,
    //   items: order.items,
    //   ordered_by: order.ordered_by,
    //   completed_date: order.completed_date,
    //   invoice: order.invoice,
    //   ordered_date: order.ordered_date,
    //   status: 'CANCELLED',
    //   sub_total: order.sub_total,
    //   total: order.total,
    // }

    dispatch(deleteOrders(uuid));
    handleClose2()

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
                {order.ordered_by.name}
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

            <IconButton ref={ref} onClick={() => setIsOpen(true)} style={{display: 'flex', float: 'right'}}>
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

            <MenuItem sx={{ color: 'white' }}  to={`/dashboard/invoice/${order.invoice}`} component={Link}>
              <ListItemIcon style={{color: 'white'}}>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary="Invoice" primaryTypographyProps={{ variant: 'body2' }} />
            </MenuItem>

           

            <Divider sx={{ my: 0.5, background: 'gray'}} />

            <MenuItem sx={{ color: 'text.secondary' }} onClick={() => handleClickOpen2()} disabled={order.status === "PENDING"? 'boolean': false}>
              <ListItemIcon  style={{color: 'white'}}>
                <WatchLaterIcon style={{ color: '#eed202' }}/>
              </ListItemIcon>
              <ListItemText primary="Pending" primaryTypographyProps={{ variant: 'body2' }} style={{ color: '#eed202' }}/>
            </MenuItem>

            <Divider sx={{ my: 0.5, background: 'gray'}} />

            <MenuItem sx={{ color: 'text.secondary' }} onClick={() => handleClickOpen2()} disabled={order.status === "COMPLETED"? 'boolean': false}>
              <ListItemIcon  style={{color: 'white'}}>
                <CheckCircleIcon style={{ color: '#4BB543' }}/>
              </ListItemIcon>
              <ListItemText primary="Completed" primaryTypographyProps={{ variant: 'body2' }} style={{ color: '#4BB543' }}/>
            </MenuItem>

            <Divider sx={{ my: 0.5, background: 'gray'}} />

              <MenuItem sx={{ color: 'text.secondary' }} onClick={() => handleCancel(order.invoice)} disabled={order.status === "CANCELLED"? 'boolean': false}>
                <ListItemIcon  style={{color: 'white'}}>
                  <NotificationsIcon style={{ color: '#ff3333' }}/>
                </ListItemIcon>
                <ListItemText primary="Cancel" primaryTypographyProps={{ variant: 'body2' }} style={{ color: '#ff3333' }}/>
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



    
    </>
  );
}



export default OrderCard;
