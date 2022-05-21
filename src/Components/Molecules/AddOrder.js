import * as React from "react";

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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//-------------------------------------------

const AddOrder = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const [assign, setAssign] = React.useState('');

    const handleChange = (event) => {
        setAssign(event.target.value);
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
          {"Add Order"}
        </DialogTitle>
        <DialogContent style={{background: '#181818'}}>
        <Grid style={{ maxWidth: 450, padding: "5px 5px", margin: "0 auto" }}>
        
        <Typography variant="body2" style={{color: 'white'}} component="p" gutterBottom>
          *Indicates a required field
      </Typography> 

        <form id="metadata-form-id">
          <Grid container spacing={1} style={{color: 'white'}}>
            <Grid item xs={12} sm={6}>
              <TextField sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }}  placeholder="Order Name" label="Order Name" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'} }/>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }} label="Assigned By" variant="filled" disabled fullWidth autoComplete='off' style={{background:'#181818'}} defaultValue="jajoisgreat"/>
            </Grid>

            <Grid item xs={12} sm={6}>
                <FormControl variant="filled" sx={{ m: 1}} InputLabelProps={{ style: { color: 'black' } }} fullWidth >
                    <InputLabel id="demo-simple-select-filled-label">Assigned To</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={assign}
                        onChange={handleChange}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }}  placeholder="Order Name" label="Product Name" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }}  type="number" placeholder="Quantity" label="Quantity" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
            </Grid> 
         
           
            <Grid item xs={12}>
              <TextField InputProps={{ style: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }}  label="Description" multiline rows={4} placeholder="Description" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
            </Grid>

                <div className="border-addproduct"></div>

                <Typography variant="body1" style={{color: 'white'}} component="p" gutterBottom>
                    &nbsp; Variants
                </Typography>

                <div className="border-invisible"></div>

                <Grid item xs={12}>
                    <TextField sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }}  placeholder="Field" label="Field" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
                </Grid>

                <Grid xs={12} sm={6} item>
                    <TextField sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }}  type="number" placeholder="Value" label="Value" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
                </Grid> 
            

                <Grid xs={12} sm={6} item>
                    <TextField sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }}  type="number" placeholder="Price" label="Price" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
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
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default AddOrder;
