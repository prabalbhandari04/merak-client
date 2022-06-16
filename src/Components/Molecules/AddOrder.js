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
import {useDispatch, useSelector} from 'react-redux';

import {addOrders} from '../../Redux/Actions/ordersActions';

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

const AddOrder = () => {
  const [open, setOpen] = React.useState(false);
  const {users} = useSelector(state => state.data2);
  const {variants} = useSelector(state => state.data);

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
    const [assignto, setAssignto] = React.useState('');
    const [orderby, setOrderby] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [orderprod, setOrderprod] = React.useState([])
    
    const [max, setMax] = React.useState(1);
    const [items, setItems] = React.useState('');
    const [quantity, setQuantity] = React.useState(1);
    
    React.useEffect(() => {
    }, [setOrderprod, orderprod])
    
  const additems = (e)=>{  
    if(items !== ""){
      setOrderprod([...orderprod, {"product": items, "quantity": quantity}])  
      setItems("")
      setQuantity(1)
      setMax("")
    }

  }

  const discarditems = ()=>{
    setItems("")
    setQuantity(1)
  }

  const removeitems = (prod)=>{
    const itm = orderprod
    const id = itm.findIndex((prd)=>{if(prd.product === prod){return prd}})
    itm.splice(id, 1)
    setOrderprod(itm)
  }


const changes = (e)=>{
  setItems(e.target.value[0])
  setMax(e.target.value[1])
  setQuantity(1)

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
  ))

  setAssignto("")
  setOrderby("")
  setLocation("")
  setOrderprod([])
  setItems("")
  setQuantity(1)
  setMax("")
  
  handleClose()
} 

const cancelhandel = (e)=>{
  setAssignto("")
  setOrderby("")
  setLocation("")
  setOrderprod([])
  setItems("")
  setQuantity(1)
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
        fullWidth={true}
        maxWidth="lg"
        sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 600 } }}
      >
        <DialogTitle id="alert-dialog-title" style={{color: 'white', background: '#181818'}}>
          {"Add Order"}
        </DialogTitle>
        <DialogContent style={{background: '#181818'}}>
        <Grid style={{ maxWidth: 800, padding: "5px 5px", margin: "0 auto" }}>
        <form id="metadata-form-id">
          <Grid container spacing={1} style={{color: 'white'}}>

            <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
              <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                <span style={{color: 'gray'}}> Assigned by: </span> 
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField sx={{ input: { color: 'black', background: 'white', padding:'5px', margin:'4px'} }} disabled fullWidth autoComplete='off' style={{background:'#181818'}} defaultValue={assignby} onChange={(e) => setAssignby(e.target.value)}/>
            </Grid>


            <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
              <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                <span style={{color: 'gray'}}> Assigned to: </span> 
              </Typography>
            </Grid>
            
            <Grid item xs={12} sm={6}> 
              <FormControl variant="standard" sx={{ m: 1, style: { color: 'black', background: 'white'}, margin:'4px' }} size="small" fullWidth>
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

                  {users?.map(option=> {
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
              <FormControl variant="standard" sx={{ m: 1, minWidth: 275, style: { color: 'black', background: 'white' }, margin:'4px' }} size="small" fullWidth>
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

                  {users?.map(option=> {
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
                <span style={{color: 'gray'}}> Product Ordered: </span> 
              </Typography>
            </Grid>

            <Grid item  xs={12} sm={6}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 175, style: { color: 'black', background: 'white' }, margin:'4px' }} size="small">
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

                    {variants?.map(option=> {
                      return(
                        <MenuItem key={option.sku} value={[option.sku, option.quantity]}>
                        {`${option.sku}  (${option.price})` ?? option.sku}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>

              <TextField
                name="Quantity"
                type="number"
                inputProps={{ min: 1, max: max }}
                sx={{ maxWidth:"50px", input: { color: 'black', background: 'white', padding:'3px', margin: '4px'}}} 
                variant="filled"
                value={quantity}
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
                  <Button onClick={()=>{removeitems(itm.product)}}>
                    <RemoveIcon style={{color: 'red'}} />
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
