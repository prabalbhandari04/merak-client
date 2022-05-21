import React, {useState} from 'react';
import axios from 'axios';

import Fab from "@mui/material/Fab";
import EditIcon from '@mui/icons-material/Edit';

//---------------Mui Dialog -----------------
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {Grid,Typography} from "@material-ui/core";
import TextField from '@mui/material/TextField';
//-------------------------------------------

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY0Nzg3MjE2LCJpYXQiOjE2NTI3ODcyMTYsImp0aSI6IjcwOTkyNWY0OWViZjQ1ZDY5MmQxMzA0NjI1YjcyZGY0IiwidXNlcl9pZCI6MX0.E0X_MC9hUbRa_Sn0ji1gjAXZvrPBw1h_2TWhxUK5HEc"

let headers = {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": 'Bearer ' + token
};

//Proxy bypass Cors

const prox = "https://kissasian1988.herokuapp.com/"

const UpdateVariant = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const product = 2
  const suk = "Baraf-L"

  const updatevarient = ()=>{
    const newvariant = {
      'field': [{name, value}],
      price,
      product,
      quantity,
    }

    const updatevarient = async () => {
      const response = await axios.put(`https://merak-test.herokuapp.com/inventory/variant/${suk}/`, newvariant,
      {
        headers: headers
      }).catch((err) => {
        console.log('Error', err)
      })

    }

    updatevarient()
    

    handleClose()
      
  }

  

  

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{color: 'white', background: '#181818'}}>
          {"Update Variant"}
        </DialogTitle>
        <DialogContent style={{background: '#181818'}}>
        <Grid style={{ maxWidth: 450, padding: "5px 5px", margin: "0 auto" }}>

        <form id="metadata-form-id">
          <Grid container spacing={1} style={{color: 'white'}}>

                <div className="border-addproduct"></div>

                <Typography variant="body1" style={{color: 'white'}} component="p" gutterBottom>
                    &nbsp; Variants
                </Typography>

                <div className="border-invisible"></div>

                <Grid item xs={12} sm={6}>
                    <TextField sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }}  placeholder="Field" label="Field" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e)=>{setName(e.target.value)}}/>
                </Grid>

                <Grid xs={12} sm={6} item>
                    <TextField sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }} placeholder="Value" label="Value" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e)=>{setValue(e.target.value)}}/>
                </Grid> 
            

                <Grid xs={12} sm={6} item>
                    <TextField sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }}  type="number" placeholder="Price" label="Price" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e)=>{setPrice(e.target.value)}}/>
                </Grid> 

                <Grid xs={12} sm={6} item>
                    <TextField sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }}  type="number" placeholder="Quantity" label="Quantity" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e)=>{setQuantity(e.target.value)}}/>
                </Grid> 
                
                <Grid item sx={{justifyContent: 'center', alignItems: 'center'}}>
                    <Button component="label" style={{color: 'white', background: 'gray'}}>
                    <EditIcon /> &nbsp;Image
                        <input accept="image/*" hidden type="file" />
                    </Button>
                </Grid> 
            
            
          </Grid>
        </form>
     
    </Grid>
        </DialogContent>
        <DialogActions style={{background: '#181818'}}>
          <Button onClick={handleClose} style={{color: 'white'}}>Cancel</Button>
          <Button onClick={updatevarient} style={{color: 'white'}} autoFocus>
           Add
          </Button>
        </DialogActions>
      </Dialog>

      <Fab
        onClick={handleClickOpen}
        sx={{ position: "fixed", bottom: 16, right: 512 }}
      >
        <EditIcon />
      </Fab>
    </>
  );
};

export default UpdateVariant;
