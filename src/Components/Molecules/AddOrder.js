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

//Redux
import {useSelector, useDispatch} from 'react-redux';

import {addOrders} from '../../Redux/Actions/ordersActions';


const AddOrder = () => {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch(); //Redux Dispatch

  const opensessame = () =>{ 
    
    
    handleClickOpen()

  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const [assignby, setAssignby] = React.useState('your_user_name');
    const [assignto, setAssignto] = React.useState('Staff member');
    const [orderby, setOrderby] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [items, setItems] = React.useState('');
  
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

const addhandle = (e)=>{
  console.log(items)
  e.preventDefault();

  dispatch(addOrders(
    {
      "items": JSON.parse(`[{"product": "${items}", "quantity": "1"}]`),
      "ordered_by": "02",
      "assigned_to": "01"

    }
  ));
  handleClose()
} 

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        width="500px"
      >
        <DialogTitle id="alert-dialog-title" style={{color: 'white', background: '#181818'}}>
          {"Add Order"}
        </DialogTitle>
        <DialogContent style={{background: '#181818'}}>
        <Grid style={{ maxWidth: 600, padding: "5px 5px", margin: "0 auto" }}>

        <form id="metadata-form-id">
          <Grid container spacing={1} style={{color: 'white'}}>

            <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
              <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                <span style={{color: 'gray'}}> Assigned by: </span> 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField sx={{ input: { color: 'black', background: 'white' } }} disabled fullWidth autoComplete='off' style={{background:'#181818'}} defaultValue={assignby} onChange={(e) => setAssignby(e.target.value)}/>
            </Grid>


            <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
              <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                <span style={{color: 'gray'}}> Assigned to: </span> 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField sx={{ input: { color: 'black', background: 'white'} }} variant="filled" fullWidth autoComplete='off' style={{background:'#181818'}} defaultValue={assignto} onChange={(e) => setAssignto(e.target.value)}/>
            </Grid>
            

            <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
              <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                <span style={{color: 'gray'}}> Ordered by: </span> 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField sx={{ input: { color: 'black', background: 'white' } }} variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e) => setOrderby(e.target.value)}/>
            </Grid>


            <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
              <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                <span style={{color: 'gray'}}> Customer Location: </span> 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField sx={{ input: { color: 'black', background: 'white' } }} variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e) => setLocation(e.target.value)}/>
            </Grid>


            <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
              <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                <span style={{color: 'gray'}}> Product Ordered: </span> 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField sx={{ input: { color: 'black', background: 'white' } }} variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e) => setItems(e.target.value)}/>
            </Grid>
       




            {/* <Grid item xs={12} sm={6}>
                <FormControl variant="filled" sx={{ m: 1}} InputLabelProps={{ style: { color: 'black' } }} fullWidth >
                    <InputLabel id="demo-simple-select-filled-label">Assigned To</InputLabel>
                    <Select style ={{backgroundColor:"white"}} InputLabelProps={{ style: { color: 'black' } }}
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
                    <Select style ={{backgroundColor:"white"}} InputLabelProps={{ style: { color: 'black' } }}
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
            </Grid> */}

            
            



          </Grid>
        </form>
     
    </Grid>
        </DialogContent>
        <DialogActions style={{background: '#181818'}}>
          <Button onClick={handleClose} style={{color: 'white'}}>Cancel</Button>
          <Button onClick={addhandle} style={{color: 'white'}} autoFocus>
           Add
          </Button>
        </DialogActions>
      </Dialog>

      <Fab
        onClick={opensessame}
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default AddOrder;
