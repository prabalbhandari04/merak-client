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
import { addTeams, loadOrganizations } from '../redux/actions/organizationActions';
import { loadUsers } from '../redux/actions/usersActions';






const AddTeam = () => {


  let dispatch = useDispatch();

    const { organizations } = useSelector(state => state.data3); //Redux State
    const { users } = useSelector(state => state.data2); //Redux State


    useEffect(() => {
      dispatch(loadOrganizations());
      dispatch(loadUsers());
    }, [dispatch]);


    const [open, setOpen] = useState(false);

   

    
  
    //organization name and description
    const [organizationName, setOrganizationName] = useState('');
    const [teamLeader, setTeamLeader] = useState('');

    const [state, setState] = useState({
        name: '',
        description: '',
        team_leader: teamLeader,
        organization: organizationName
      });

    
      const {name,  description} = state;


  
    //Handling Change for Organization name and Team Leader 
    
    const handleChangeOrganization = (e) => {
      setOrganizationName(e.target.value);
    }

    const handleChangeTeamLeader = (e) => {
      setTeamLeader(e.target.value);
    }
      

    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState({ ...state,  [name]: value});
    }


    const handleSubmit = (e) => {

        e.preventDefault();

        let data = {name: name, description: description, organization: organizationName, team_leader: teamLeader, members: [teamLeader]}     
        

        dispatch(addTeams(data));

        setState({
            name: '',
            description: '',
          });

        setOrganizationName('');
        setTeamLeader('');
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
        description: '',
        team_leader: '',
        organization: '',
    })

    setOrganizationName('');
    setTeamLeader('');
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
          {"Add Team"}
        </DialogTitle>

        <DialogContent>


        <Grid style={{ maxWidth: 450, padding: "5px 5px", margin: "0 auto" }}>

        <Typography variant="body2" style={{color: 'white'}} component="p" gutterBottom>
          
          </Typography> 


      
                <form id="team-form-id" onSubmit={handleSubmit}>
            <Grid container spacing={1} style={{color: 'white', marginTop: '8px'}}>

                <Grid item xs={12}>
                    <TextField name="name" sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }} value={name} onChange={handleInputChange}    placeholder="Name" label="Name" variant="filled" fullWidth required autoComplete='off' />
                </Grid>


                <Grid item xs={12}>
                  <TextField InputProps={{ style: { color: 'black', background: 'white' } }} name="description" InputLabelProps={{ style: { color: 'black' } }} value={description} onChange={handleInputChange}  label="Description" multiline rows={4} placeholder="Description" variant="filled" fullWidth required autoComplete='off'/>
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



                    <Grid item xs={12}>
                        
                        <FormControl fullWidth variant="filled" required name="team_leader" >
                            <InputLabel id="team-leader-select-label" style={{color: 'black'}}>Select Team Leader</InputLabel>
                            <Select
                            labelId="team-leader-select-label"
                            id="team-leader-select"
                            value={teamLeader}
                            label="Select Organization"
                            onChange={handleChangeTeamLeader}    
                            style={{background:'white', color: 'black'}}
                            >
                            {users.map(val => {
                                
                            
                                        return (
                                        <MenuItem key={val.id} value={val.id} style={{textTransform: 'capitalize'}}>
                                            {val.display_name}
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

          <Button type="submit" form="team-form-id" style={{color: '#00A7E3'}} autoFocus>
            Save
          </Button>



        </DialogActions>
      </Dialog>


    

      <Fab icon={<SettingsIcon/>} style={{ position: "fixed", bottom: 0, right: 0}} alwaysShowTitle={false}>

                  
            <Action text="Add Team" style={{backgroundColor: '#2065D1'}} onClick={opensessame}>
              <AddIcon />
            </Action>

              </Fab>
    </>
  );
};

export default AddTeam;
