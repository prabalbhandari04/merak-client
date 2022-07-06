import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import LocationMap from "./LocationSearchModal";
import { DialogActions } from "@mui/material";
import { useState } from 'react';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 500,
  bgcolor: "#181818",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button  onClick={handleOpen} style={{color: 'white'}} autoFocus>
              
              Add Your Location
             </Button>
      <Modal
        hideBackdrop
        open={open}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style}}>
          <LocationMap />
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
const AddCustomer = () => {
  const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [address, setAddress] = useState("")
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const cancelhandel = () => {
    handleClose();
  }
  const addhandle  = () => {
    alert ("add");
    handleClose();
  }

  return (
    <div className="container">
      <Fab
        onClick={handleOpen}
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <AddIcon />
      </Fab>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
              Add Customer:
            </Typography>
            <br></br>
            <form id="metadata-form-id">
                <Grid container spacing={2} style={{color: 'white'}}>

                    <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
                    <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                        <span style={{color: 'gray'}}> First name </span> 
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField sx={{ input: { color: 'white', background: '#252525', padding:'5px'}}} variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e) => setFirstname(e.target.value)}/>
                    </Grid>


                    <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
                    <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                        <span style={{color: 'gray'}}> Last name </span> 
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField sx={{ input: { color: 'white', background: '#252525', padding:'5px'}}} variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e) => setLastname(e.target.value)}/>
                    </Grid>


                    <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
                    <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                        <span style={{color: 'gray'}}> Email id </span> 
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField sx={{ input: { color: 'white', background: '#252525', padding:'5px' } }} variant="filled" fullWidth autoComplete='off' style={{background:'#181818'}} onChange={(e) => setEmail(e.target.value)}/>
                    </Grid>

                    <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
                    <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                        <span style={{color: 'gray'}}> Contact </span> 
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField sx={{ input: { color: 'white', background: '#252525', padding:'5px' } }} variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e) => setContact(e.target.value)}/>
                    </Grid>

                    <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
                    <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                        <span style={{color: 'gray'}}> Address </span> 
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField sx={{ input: { color: 'white', background: '#252525', padding:'5px' } }} variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e) => setAddress(e.target.value)}/>
                    </Grid>

                   
                    

                    {/* <Box height="70px" /> */}
                </Grid>
            </form>

          <DialogActions style={{background: '#181818'}}>

          <Button onClick={cancelhandel} style={{color: 'white'}}>Cancel</Button>
          <Button onClick={addhandle} style={{color: 'white'}} autoFocus>
           Add
          </Button>
        </DialogActions>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default AddCustomer;