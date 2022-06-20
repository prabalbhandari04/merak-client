import React, {useRef, useState} from 'react';

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

import { Typography, Grid } from '@mui/material';

import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';


//Redux
import { useDispatch } from 'react-redux';
import { deleteProducts, updateProducts } from '../redux/actions/productsActions';





const MenuButton = ({ product }) => {
    
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const ref = useRef(null);

  const [name, setName] = useState(product.name)
  const [description, setDescription] = useState(product.description)
 
  

  const handleClickOpen2 = () => {
    setIsOpen(false)
    setOpen2(true);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };


  const updateProduct = () => {

    handleClickOpen3()
    setIsOpen(false)
  }


  //Api ma updated data pathako
  const handleUpdate = (uuid) => {

    const updated = {name, description}
    dispatch(updateProducts({uuid, updated}))
    handleClose3()

  }
  
  //Api ma delete garne data ko uuid pathako
  const handleDelete = (uuid) => {
    dispatch(deleteProducts(uuid));
    setOpen2(false);
  }



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
              sx: { width: 200, maxWidth: '100%'},
            }}
            style={{ color: '#181818'}}
          >

            <MenuItem sx={{ color: 'white' }} onClick={() => updateProduct()}>
              <ListItemIcon style={{color: 'white'}}>
                <EditIcon />
              </ListItemIcon>
              <ListItemText primary="Edit" primaryTypographyProps={{ variant: 'body2' }} />
            </MenuItem>

            <Divider sx={{ my: 0.5, background: 'gray'}} />

            <MenuItem sx={{ color: 'text.secondary' }} onClick={() => handleClickOpen2()}>
              <ListItemIcon  style={{color: 'white'}}>
                <DeleteIcon style={{ color: 'red' }}/>
              </ListItemIcon>
              <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }} style={{ color: 'red' }}/>
            </MenuItem>

          </Menu>
          


          <Dialog
            open={open2}
            onClose={handleClose2}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" >
              {"Delete this product?"}
            </DialogTitle>
            <DialogContent >
              <DialogContentText id="alert-dialog-description" style={{color: 'white'}}>
                Are you sure you want to delete the product <span style={{color: 'gray'}}>{product.name}</span>
              </DialogContentText>
            </DialogContent>
            <DialogActions >
              <Button onClick={handleClose2} style={{color: 'white'}}>Cancel</Button>
              <Button autoFocus style={{ color: 'red' }} onClick={() => handleDelete(product.uuid)}>
                Delete
              </Button>
            </DialogActions>
          </Dialog>



      <Dialog
        open={open3}
        onClose={handleClose3}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Edit Product"}
        </DialogTitle>
        <DialogContent>
        <Grid style={{ maxWidth: 450, padding: "5px 5px", margin: "0 auto" }}>
        
        <Typography variant="body2" style={{color: 'white'}} component="p" gutterBottom>
          *Indicates a required field
      </Typography> 

        <form id="product-form">
          <Grid container spacing={1} style={{color: 'white'}}>
            <Grid item xs={12}>
              <TextField sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }}  placeholder="Product Name" label="Product Name" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </Grid>   
           
            <Grid item xs={12}>
              <TextField InputProps={{ style: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }}  label="Description" multiline rows={4} placeholder="Description" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            </Grid>  
            </Grid>
        </form>

        <DialogActions>
          <Button onClick={handleClose3} style={{color: 'white'}}>Cancel</Button>
          <Button style={{color: '#00A7E3'}} form="product-form" autoFocus onClick={() => handleUpdate(product.uuid)}>
           Update
          </Button>
        </DialogActions>         
            
          
       
     
    </Grid>
        </DialogContent>

    </Dialog>
    
    </>
  );
}



export default MenuButton;