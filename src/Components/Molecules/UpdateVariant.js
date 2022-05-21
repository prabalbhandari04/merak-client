import React, {useState} from 'react';


import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

//---------------Mui Dialog -----------------
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {Grid,Typography} from "@material-ui/core";
import TextField from '@mui/material/TextField';
//-------------------------------------------

const AddItem = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  

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
                    <TextField sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }}  placeholder="Field" label="Field" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
                </Grid>

                <Grid xs={12} sm={6} item>
                    <TextField sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }}  type="number" placeholder="Value" label="Value" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
                </Grid> 
            

                <Grid xs={12} sm={6} item>
                    <TextField sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }}  type="number" placeholder="Price" label="Price" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
                </Grid> 

                <Grid xs={12} sm={6} item>
                    <TextField sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }}  type="number" placeholder="Quantity" label="Quantity" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
                </Grid> 
                
                <Grid item sx={{justifyContent: 'center', alignItems: 'center'}}>
                    <Button component="label" style={{color: 'white', background: 'gray'}}>
                    <AddIcon /> &nbsp;Image
                        <input accept="image/*" hidden type="file" />
                    </Button>
                </Grid> 
            
            
          </Grid>
        </form>
     
    </Grid>
        </DialogContent>
        <DialogActions style={{background: '#181818'}}>
          <Button onClick={handleClose} style={{color: 'white'}}>Cancel</Button>
          <Button onClick={handleClose} style={{color: 'white'}} autoFocus>
           Add
          </Button>
        </DialogActions>
      </Dialog>

      <Fab
        onClick={handleClickOpen}
        sx={{ position: "fixed", bottom: 16, right: 256 }}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default AddItem;
