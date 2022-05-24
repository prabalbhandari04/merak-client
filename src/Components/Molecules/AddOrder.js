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
    const [items, setItems] = React.useState('');

    const handleChange = (event) => {
        setAssign(event.target.value);
        setItems(event.target.value);
    };
  
    const optionsMember = [
      {label: 'React',      value: 'react'},
      {label: 'JavaScript', value: 'js'   },
      {label: 'TypeScript', value: 'ts'   }
  ];

  const optionsItem = [
    {label: 'React',      value: 'react'},
    {label: 'JavaScript', value: 'js'   },
    {label: 'TypeScript', value: 'ts'   }
];

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
                    <Select style ={{backgroundColor:"white"}} InputLabelProps={{ style: { color: 'black' } }}
                        // name={value}
                        // value ={value}
                        onChange={handleChange}
                        >
                          {optionsMember?.map(option=> {
                            return(
                              <MenuItem key={option.value} value={option.value}>
                              {option.label ?? option.value}
                              </MenuItem>
                            );
                          })}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl variant="filled" sx={{ m: 1}} InputLabelProps={{ style: { color: 'black' } }} fullWidth >
                    <InputLabel id="demo-simple-select-filled-label">Items</InputLabel>
                    <Select
                        onChange={handleChange}
                        >
                          {optionsItem?.map(option=> {
                            return(
                        <MenuItem key={option.value} value={option.value}>
                          {option.label ?? option.value}
                        </MenuItem>
                        );
                      })}
                    </Select>
                </FormControl>
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
