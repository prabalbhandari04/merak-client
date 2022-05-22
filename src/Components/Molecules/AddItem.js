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
//-------------------------------------------
import {useDispatch} from "react-redux";
import {addProducts} from '../../Redux/Actions/productsActions';
// import {addVariants} from "../../Redux/Actions/productsActions";





const AddItem = () => {
  const [open, setOpen] = React.useState(false);

  let dispatch = useDispatch();


  const [state, setState] = React.useState({
    name: '',
    description: '',
    default_price: '',
  });



  const {name,  description} = state;

  const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value});
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProducts(state));
  }


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
          {"Add Product"}
        </DialogTitle>
        <DialogContent style={{background: '#181818'}}>
        <Grid style={{ maxWidth: 450, padding: "5px 5px", margin: "0 auto" }}>
        
        <Typography variant="body2" style={{color: 'white'}} component="p" gutterBottom>
          
      </Typography> 

        <form id="product-form-id" onSubmit={handleSubmit}>
          <Grid container spacing={1} style={{color: 'white'}}>
            <Grid item xs={12}>
              <TextField sx={{ input: { color: 'black', background: 'white' } }} name="name" InputLabelProps={{ style: { color: 'black' } }}  value={name} onChange={handleInputChange} placeholder="Product Name" label="Product Name" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
            </Grid>

         
           
            <Grid item xs={12}>
              <TextField InputProps={{ style: { color: 'black', background: 'white' } }} name="description" InputLabelProps={{ style: { color: 'black' } }} value={description} onChange={handleInputChange}  label="Description" multiline rows={4} placeholder="Description" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
            </Grid>

                {/* <div className="border-addproduct"></div>

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
                    <TextField sx={{ input: { color: 'black', background: 'white' } }} name="default_price" value={default_price} onChange={handleInputChange} InputLabelProps={{ style: { color: 'black' } }}  placeholder="Price" label="Price" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
                </Grid>  */}
                
                {/* <Grid item sx={{justifyContent: 'center', alignItems: 'center'}}>
                    <Button component="label" style={{color: 'white', background: 'gray'}}>
                    <AddIcon /> &nbsp;Image
                        <input accept="image/*" hidden type="file" />
                    </Button>
                </Grid>  */}
            
            
          </Grid>
        </form>
     
    </Grid>
        </DialogContent>
        <DialogActions style={{background: '#181818'}}>
          <Button onClick={handleClose} style={{color: 'white'}}>Cancel</Button>
          <Button type="submit" form="product-form-id" style={{color: '#00A7E3'}} autoFocus onClick={handleClose}>
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

export default AddItem;
