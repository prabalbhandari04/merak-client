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
        <Box sx={{ ...style }}>
          <LocationMap />
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
const AddCustomer = () => {
  const [assignby, setAssignby] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const cancelhandel = () => {
    alert ("cancel");
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
            
            <Grid>
            <form>
            <Grid container spacing={1} style={{color: 'white'}}>
            <Grid item xs={4} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
              <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                <span style={{color: 'gray'}}> Assigned by: </span> 
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField
                        sx={{ input: { color: "black", background: "white" } }}
                        InputLabelProps={{ style: { color: "black" } }}
                        placeholder="First Name"
                        label="First Name"
                        variant="filled"
                        fullWidth
                        required
                        autoComplete="on"
                    /></Grid>
            </Grid>
            </form>
          </Grid>


          <Grid>
            <form>
            <Grid container spacing={1} style={{color: 'white'}}>
            <Grid item xs={4} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
              <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                <span style={{color: 'gray'}}> Last Name: </span> 
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField
                        sx={{ input: { color: "black", background: "white" } }}
                        InputLabelProps={{ style: { color: "black" } }}
                        placeholder="Last Name"
                        label="Last Name"
                        variant="filled"
                        fullWidth
                        required
                        autoComplete="on"
                    /></Grid>
            </Grid>
            </form>
          </Grid>


          <Grid>
            <form>
            <Grid container spacing={1} style={{color: 'white'}}>
            <Grid item xs={4} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
              <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                <span style={{color: 'gray'}}> Email: </span> 
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField
                        sx={{ input: { color: "black", background: "white" } }}
                        InputLabelProps={{ style: { color: "black" } }}
                        placeholder="Email"
                        label="Email"
                        variant="filled"
                        fullWidth
                        required
                        autoComplete="on"
                    /></Grid>
            </Grid>
            </form>
          </Grid>


          <Grid>
            <form>
            <Grid container spacing={1} style={{color: 'white'}}>
            <Grid item xs={4} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
              <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                <span style={{color: 'gray'}}> Contact Number: </span> 
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField
                        sx={{ input: { color: "black", background: "white" } }}
                        InputLabelProps={{ style: { color: "black" } }}
                        placeholder="Contact Number"
                        label="Contact Number"
                        variant="filled"
                        fullWidth
                        required
                        autoComplete="on"
                    /></Grid>
            </Grid>
            </form>
          </Grid>

          <Grid>
            <form>
            <Grid container spacing={1} style={{color: 'white'}}>
            <Grid item xs={4} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
              <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                <span style={{color: 'gray'}}> Location: </span> 
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
            <ChildModal />
            </Grid>
            </Grid>
            </form>
          </Grid>

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