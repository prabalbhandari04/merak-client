import React, { useState, useEffect } from "react";

import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

//--------------Icons------------------------
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from '@mui/icons-material/Settings';

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
import InputLabel from '@mui/material/InputLabel';
//-------------------------------------------


//Redux
import { useSelector, useDispatch } from 'react-redux';
import { loadOrganizations } from '../redux/actions/organizationActions';
import { createCustomers } from '../redux/actions/usersActions';







const AddCustomer = () => {


  let dispatch = useDispatch();

    const { organizations } = useSelector(state => state.data3); //Redux State
   

    useEffect(() => {
      dispatch(loadOrganizations());
    }, [dispatch]);


    const [open, setOpen] = useState(false);

   

    
  
    //organization name and description
    const [organizationName, setOrganizationName] = useState('');
  
    const [state, setState] = useState({
        name: '',
        phone: '',
        address: '',
        organization: organizationName
      });

    
      const {name,  phone, address} = state;


  
    //Handling Change for Organization name and Team Leader 
    
    const handleChangeOrganization = (e) => {
      setOrganizationName(e.target.value);
    }

  
      

    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState({ ...state,  [name]: value});
    }


    const handleSubmit = (e) => {

        e.preventDefault();

        let data = {name: name, phone: phone, address: address, organization: organizationName}     
        

        dispatch(createCustomers(data));

        setState({
            name: '',
            phone: '',
            address: '',
          });

        setOrganizationName('');
        setOpen(false);
    
      }

  


  const opensessame = () =>{ 
    handleClickOpen()
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setState({
        name: '',
        phone: '',
        address: '',
        organization: '',
    })

    setOrganizationName('');
    setOpen(false);
  };



const cancelhandel = (e)=>{

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
          {"Add Customer"}
        </DialogTitle>

        <DialogContent>


        <Grid style={{ maxWidth: 450, padding: "5px 5px", margin: "0 auto" }}>

        <Typography variant="body2" style={{color: 'white'}} component="p" gutterBottom>
          
          </Typography> 


      
                <form id="customer-form-id" onSubmit={handleSubmit}>
            <Grid container spacing={1} style={{color: 'white', marginTop: '8px'}}>

                <Grid item xs={12}>
                    <TextField name="name" sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }} value={name} onChange={handleInputChange}    placeholder="Name" label="Name" variant="filled" fullWidth required autoComplete='off' />
                </Grid>


                <Grid item xs={12}>
                    <TextField type="number" name="phone" sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }} value={phone} onChange={handleInputChange}    placeholder="Phone" label="Phone" variant="filled" fullWidth required autoComplete='off' />
                </Grid>


                <Grid item xs={12}>
                    <TextField name="address" sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }} value={address} onChange={handleInputChange}    placeholder="Address" label="Address" variant="filled" fullWidth required autoComplete='off' />
                </Grid>


               



                <Grid item xs={12}>
                        
                        <FormControl fullWidth variant="filled" required name="organization" >
                            <InputLabel id="organization-select-label" style={{color: 'black'}}>Select Organization</InputLabel>
                            <Select
                            labelId="organization-select-label"
                            id="organization-select"
                            value={organizationName}
                            label="Select Organization"
                            onChange={handleChangeOrganization}
                            style={{background:'white', color: 'black'}}
                            >
                            {organizations.map(val => {
                                
                                        return (
                                        <MenuItem key={val.uuid} value={val.id} style={{textTransform: 'capitalize'}}>
                                            {val.name}
                                        </MenuItem>
                                        )
                            })}
                            </Select>
                        </FormControl>
                    
                    </Grid>


                </Grid>

            </form>
     
    </Grid>

        </DialogContent>
        <DialogActions>

          <Button onClick={cancelhandel} style={{color: 'white'}}>Cancel</Button>

          <Button type="submit" form="customer-form-id" style={{color: '#00A7E3'}} autoFocus>
            Save
          </Button>



        </DialogActions>
      </Dialog>


    

      <Fab icon={<SettingsIcon/>} style={{ position: "fixed", bottom: 0, right: 0}} alwaysShowTitle={false}>

                  
            <Action text="Add Customer" style={{backgroundColor: '#2065D1'}} onClick={opensessame}>
              <AddIcon />
            </Action>

              </Fab>
    </>
  );
};

export default AddCustomer;
