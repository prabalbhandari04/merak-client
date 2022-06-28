import React, { useState } from "react";

import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

//--------------Icons------------------------
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from '@mui/icons-material/Settings';

//---------------Mui Dialog -----------------
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Alert from '@mui/material/Alert';
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {Grid,Typography} from "@material-ui/core";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import { MdKeyboardArrowUp } from 'react-icons/md';
import InputLabel from '@mui/material/InputLabel';
//-------------------------------------------


//Redux
import {useDispatch, useSelector} from 'react-redux';

import {addOrders} from '../redux/actions/ordersActions';





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

    
    const [assignto, setAssignto] = useState('');
    const [orderby, setOrderby] = useState('');
    const [location, setLocation] = useState('');
    const [orderprod, setOrderprod] = useState([])
    
    const [max, setMax] = useState(1);
    const [items, setItems] = useState('');
    const [quantity, setQuantity] = useState(1);
    
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


  const removeitems = (prod) => {
   
    const id = orderprod.findIndex((prd) => 
      {if(prd.product === prod)
        {return prd}
      })
      
    orderprod.splice(id, 1)
    setOrderprod([...orderprod])
  }


const changes = (e)=>{
  setItems(e.target.value)
  // setMax(e.target.value[1])
  setQuantity(1)

}

const plus = ()=>{
  if(quantity < 10 ){
    setQuantity(quantity + 1)
  }
}

const minus = ()=>{
  if(quantity != 1 ){
    setQuantity(quantity - 1)
  }
}

const addhandle = (e)=>{

  
  
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
      >
        
         <DialogTitle id="alert-dialog-title" >
          {"Add Order"}
        </DialogTitle>

        <DialogContent>


        <Grid style={{ maxWidth: 450, padding: "5px 5px", margin: "0 auto" }}>

        <Typography variant="body2" style={{color: 'white'}} component="p" gutterBottom>
          
          </Typography> 


      
          <form id="order-form-id">

            <Grid container spacing={1} style={{color: 'white'}}>

              

              <Grid xs={12} item fullWidth>
                 
                </Grid>



              <Grid item xs={12}>
                    
                    <FormControl fullWidth variant="filled" required name="order" >
                      <InputLabel id="order-select-label" style={{color: 'black'}}>Assigned to</InputLabel>
                      <Select
                        labelId="order-select-label"
                        id="order-select"
                        value={assignto}
                        label="Assigned to"
                        onChange={(e)=>{setAssignto(e.target.value);}}
                        style={{background:'white', color: 'black'}}
                      >
        
                      {users?.map(option=> {
                          return(
                            <MenuItem key={option.display_name} value={option.id} style={{textTransform: 'capitalize'}}>
                            {option.display_name ?? option.value}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                 
                </Grid>




              <Grid item xs={12}>
                    
                    <FormControl fullWidth variant="filled" required name="order" >
                      <InputLabel id="order-select-label" style={{color: 'black'}}>Ordered by</InputLabel>
                      <Select
                        labelId="order-select-label"
                        id="order-select"
                        value={orderby}
                        label="Ordered by"
                        onChange={(e)=>{setOrderby(e.target.value);}}
                        style={{background:'white', color: 'black'}}
                      >

                      {users?.map(option=> {
                                return(
                                  <MenuItem key={option.display_name} value={option.id} style={{textTransform: 'capitalize'}}>
                                  {option.display_name ?? option.value}
                                  </MenuItem>
                                );
                              })}

                      </Select>
                    </FormControl>
                 
                </Grid>

                 


                  <Grid item xs={12}>
                    
                    <FormControl fullWidth variant="filled" required name="order" >
                      <InputLabel id="order-select-label" style={{color: 'black'}}>Products</InputLabel>
                      <Select
                        labelId="order-select-label"
                        id="order-select"
                        value={items}
                        label="Products"
                        onChange={changes}
                        style={{background:'white', color: 'black'}}
                      >

                        {variants?.map(option=> {
                                      return(
                                        <MenuItem key={option.sku} value={option.sku} style={{textTransform: 'capitalize'}}>
                                        {`${option.sku}  (${option.price})` ?? option.sku}
                                        </MenuItem>
                                      );
                                    })}

                      </Select>
                    </FormControl>
                 
                </Grid>    

           
                  
                  <Grid xs={12} sm={6} item>
                    <TextField sx={{ input: { color: 'black', background: 'white' } }} name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} disabled InputLabelProps={{ style: { color: 'black' } }}  type="number" InputProps={{ inputProps: { min: 0, max: max} }} placeholder="Quantity" label="Quantity" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
                  </Grid> 

                  <div style={{display: 'flex', flexDirection: 'column', paddingTop: '11px', cursor: 'pointer'}}>
                    <MdKeyboardArrowUp onClick={plus} size="20px"/>
                    <MdKeyboardArrowUp style={{transform: 'rotate(180deg)'}} onClick={minus} size="20px"/>
                  </div>
                  <Button onClick={additems}>
                    <AddCircleIcon style={{color: 'white' }}/>
                  </Button>
               
           

              {orderprod && orderprod.map((itm, index) => (
              <Grid  key={index} item style={{display:'flex',justifyContent: 'center'}}>

                <Alert icon={false} severity="info" onClose={() => {removeitems(itm.product)}}>{itm.product} ({itm.quantity})</Alert>
                    
              </Grid>
            ))}

            </Grid>
          </form>
     
    </Grid>

        </DialogContent>
        <DialogActions>

          <Button onClick={cancelhandel} style={{color: 'white'}}>Cancel</Button>
          <Button onClick={addhandle} style={{color: '#00A7E3'}} autoFocus>
           Add
          </Button>
        </DialogActions>
      </Dialog>


    

      <Fab icon={<SettingsIcon/>} style={{ position: "fixed", bottom: 0, right: 0}} alwaysShowTitle={false}>

                  
            <Action text="Add Order" style={{backgroundColor: '#2065D1'}} onClick={opensessame}>
              <AddIcon />
            </Action>

              </Fab>
    </>
  );
};

export default AddOrder;
