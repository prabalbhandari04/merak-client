import React, {useRef, useState} from 'react';
import axios from 'axios';

import { Link as RouterLink } from 'react-router-dom';

// Material Ui Components
import { Typography, Grid } from '@mui/material';

// Material Ui
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';

//Authentication for Merak

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY0Nzg3MjE2LCJpYXQiOjE2NTI3ODcyMTYsImp0aSI6IjcwOTkyNWY0OWViZjQ1ZDY5MmQxMzA0NjI1YjcyZGY0IiwidXNlcl9pZCI6MX0.E0X_MC9hUbRa_Sn0ji1gjAXZvrPBw1h_2TWhxUK5HEc"

let headers = {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": 'Bearer ' + token
};

//Proxy bypass Cors

const prox = "https://kissasian1988.herokuapp.com/"


const MenuButton = ({ product }) => {
  console.log('=======================================================================================================================================')
  console.log(product)
  console.log('=======================================================================================================================================')
  const uuid = product.uuid

  const [name, setName] = useState(product.name)
  const [description, setDescription] = useState(product.description)
 
  const [oopen, setOOpen] = useState(false);

  const handleClickOOpen = () => {
    setIsOpen(false)
    setOOpen(true);
  };

  const delete_button = () =>{
    const deleteProduct = async () => {
      const response = await axios.delete(`https://merak-test.herokuapp.com/inventory/product/${uuid}`,
      {
        headers: headers
      }).catch((err) => {
        console.log('Error', err)
      })

    }

    deleteProduct()
    
    setOOpen(false);
  }

  const handleCloose = () => {
    setOOpen(false);
  };

  const editProduct = ()=>{

    handleClickOOOpen()
    setIsOpen(false)
  }

  const [ooopen, setOOOpen] = React.useState(false);

  const handleClickOOOpen = () => {
    setOOOpen(true);
  };

  const handleClooose = () => {
    setOOOpen(false);
  };

  const editaxios = ()=>{
    const updated = {
      name,
      description
    }

    const updateproduct = async () => {
      const response = await axios.put(`https://merak-test.herokuapp.com/inventory/product/${uuid}/`, updated,
      {
        headers: headers
      }).catch((err) => {
        console.log('Error', err)
      })

    }

    updateproduct()

    handleClooose()
  }
  

  console.log(product)

  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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

            <MenuItem component={RouterLink} to="#" sx={{ color: 'text.secondary' }} onClick={() => editProduct()}>
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
              <Button onClick={delete_button} autoFocus style={{ color: 'red' }}>
                Delete
              </Button>
            </DialogActions>
          </Dialog>



      <Dialog
        open={ooopen}
        onClose={handleClooose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{color: 'white', background: '#181818'}}>
          {"Edit Product"}
        </DialogTitle>
        <DialogContent style={{background: '#181818'}}>
        <Grid style={{ maxWidth: 450, padding: "5px 5px", margin: "0 auto" }}>
        
        <Typography variant="body2" style={{color: 'white'}} component="p" gutterBottom>
          *Indicates a required field
      </Typography> 

        <form id="metadata-form-id">
          <Grid container spacing={1} style={{color: 'white'}}>
            <Grid item xs={12}>
              <TextField sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }}  placeholder="Product Name" label="Product Name" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </Grid>   
           
            <Grid item xs={12}>
              <TextField InputProps={{ style: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }}  label="Description" multiline rows={4} placeholder="Description" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            </Grid>  

            <DialogActions style={{background: '#181818'}}>
          <Button onClick={handleClooose} style={{color: 'white'}}>Cancel</Button>
          <Button onClick={editaxios} style={{color: 'white'}} autoFocus>
           Update
          </Button>
        </DialogActions>         
            
          </Grid>
        </form>
     
    </Grid>
        </DialogContent>

    </Dialog>
    
    </>
  );
}



export default MenuButton;