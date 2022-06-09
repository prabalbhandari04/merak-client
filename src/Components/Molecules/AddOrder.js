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
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveIcon from '@mui/icons-material/Remove';
//-------------------------------------------

import styledComponents from 'styled-components';

//Redux
import {useDispatch} from 'react-redux';

import {addOrders} from '../../Redux/Actions/ordersActions';


const AddOrder = (user) => {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch(); //Redux Dispatch

  const Container = styledComponents.div`
  border: 2px solid black;
  border-radius: 10px;
  max-width: 500;
  display: flex;
  justify-content: space-between;
  padding: 2px 8px;
`

const Info = styledComponents.h2`
  font-size: 15px;
  color: white;
`

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
    const [assignto, setAssignto] = React.useState('');
    const [orderby, setOrderby] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [orderprod, setOrderprod] = React.useState([])

    const [max, setMax] = React.useState(1);
    const [items, setItems] = React.useState('');
    const [quantity, setQuantity] = React.useState(1);
    
  console.log(user.variant)
  
  const additems = ()=>{
    if(items !== ""){
      setOrderprod([...orderprod, {"product": items, "quantity": quantity}])  
      setItems("")
      setMax("")
    }

  }

  const discarditems = ()=>{
    setItems("")
  }

  const removeitems = (prod)=>{
    console.log(prod)

  }


const changes = (e)=>{
  setItems(e.target.value)
  setMax(6)
  // setMax(user.variant.quantity)

  console.log(max)
}

const addhandle = (e)=>{
  // console.log(assignto)
  e.preventDefault();

  dispatch(addOrders(
    {
      "items": orderprod,
      "ordered_by": orderby,
      "assigned_to": assignto

    }
  ));
  handleClose()
} 

const cancelhandel = (e)=>{
  setAssignto("")
  setOrderby("")
  setLocation("")
  setOrderprod([])
  setItems("")
  setQuantity("")
  setMax("")

  handleClose()
  
}

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        width="20rem"
      >
        <DialogTitle id="alert-dialog-title" style={{color: 'white', background: '#181818'}}>
          {"Add Order"}
        </DialogTitle>
        <DialogContent style={{background: '#181818'}}>
        <Grid style={{ maxWidth: 600, padding: "5px 5px", margin: "0 auto" }}>

        <form id="metadata-form-id">
          <Grid container spacing={1} style={{color: 'white'}}>

            <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
              <Typography gutterBottom variant="body1"  component="div">
                <span style={{color: 'gray'}}> Assigned by: </span> 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField sx={{ input: { color: 'black', background: 'white', padding:'5px' } }} disabled fullWidth autoComplete='off' style={{background:'#181818'}} defaultValue={assignby} onChange={(e) => setAssignby(e.target.value)}/>
            </Grid>


            <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
              <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                <span style={{color: 'gray'}}> Assigned to: </span> 
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              
            <FormControl variant="standard" sx={{ m: 1, minWidth: 275, style: { color: 'black', background: 'white' } }} size="small">
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={assignto}
                label="Assigned to"
                style={{ background: 'white'}}
                onChange={(e)=>{setAssignto(e.target.value);}}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                {user.user?.map(option=> {
                  return(
                    <MenuItem key={option.display_name} value={option.id}>
                    {option.display_name ?? option.value}
                    </MenuItem>
                  );
                })}
                
              </Select>
            </FormControl>

            </Grid>
            

            <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
              <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                <span style={{color: 'gray'}}> Ordered by: </span> 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                


              <FormControl variant="standard" sx={{ m: 1, minWidth: 275, style: { color: 'black', background: 'white' } }} size="small">
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={orderby}
                  label="Ordered by"
                  style={{ background: 'white'}}
                  onChange={(e)=>{setOrderby(e.target.value);}}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>

                  {user.user?.map(option=> {
                    return(
                      <MenuItem key={option.display_name} value={option.id}>
                      {option.display_name ?? option.value}
                      </MenuItem>
                    );
                  })}
                  
                </Select>
              </FormControl>

              {/* <TextField sx={{ input: { color: 'black', background: 'white' } }} variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e) => setOrderby(e.target.value)}/> */}
            </Grid>


            <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
              <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                <span style={{color: 'gray'}}> Customer Location: </span> 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField sx={{ input: { color: 'black', background: 'white' }, padding:'5px' }} variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e) => setLocation(e.target.value)}/>
            </Grid>


            <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
              <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                <span style={{color: 'gray'}}> Product Ordered: </span> 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>

              <FormControl variant="standard" sx={{ m: 1, minWidth: 175, style: { color: 'black', background: 'white' } }} size="small">
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={items}
                  label="Products"
                  style={{ background: 'white'}}
                  onChange={changes}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>

                  {user.variant?.map(option=> {
                    return(
                      <MenuItem key={option.sku} value={option.sku}>
                      {`${option.sku} (${option.price})` ?? option.sku}
                      </MenuItem>
                    );
                  })}
                  
                </Select>
              </FormControl>
              <TextField
                name="Quantity"
                type="number"
                inputProps={{ min: 1, max: max }}
                sx={{ input: { color: 'black', background: 'white', padding:'3px', marginTop: '7px'}}} 
                variant="filled"
                onChange={(e) => setQuantity(e.target.value)}
              />
              <Button onClick={additems}>
                <AddCircleIcon style={{color: 'blue' }}/>
              </Button>
              <Button onClick={discarditems}>
                <RemoveIcon style={{color: 'red'}}/>
              </Button>

            </Grid>

            {orderprod && orderprod.map((itm, index) => (
            <Grid  key={index} item >
              <Container>
                  <Info>{itm.product}</Info>

                  <Info>{`  (${itm.quantity})`}</Info>
                  <Button onClick={removeitems(itm)}>
                    <RemoveIcon style={{color: 'red'}}/>
                  </Button>
              </Container>
            </Grid>
          ))}

          </Grid>
        </form>
     
    </Grid>
        </DialogContent>
        <DialogActions style={{background: '#181818'}}>
          <Button onClick={cancelhandel} style={{color: 'white'}}>Cancel</Button>
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
