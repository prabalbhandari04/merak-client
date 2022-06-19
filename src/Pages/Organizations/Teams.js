// ** React Imports
import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { addTeams, loadOrganizations } from '../../Redux/Actions/organizationActions';
import { loadUsers } from '../../Redux/Actions/usersActions';


// ** MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import { Container} from '@mui/material';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Title from '../../Components/Atoms/Title'






const Teams = () => {

    
    let dispatch = useDispatch();
    const {organizations} = useSelector(state => state.data3); //Redux State
    const {users} = useSelector(state => state.data2); //Redux State


    useEffect(() => {
      dispatch(loadOrganizations());
      dispatch(loadUsers());
    }, [dispatch]);

   

    
  
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
    
      }

    
     

      

  return (
    <Container style={{justifyContent: 'center', marginTop: '30px'}} maxWidth="sm">

    <Title title="Create Team" /> 

    <CardContent>
    

        <>
        <form id="organization-form-id" onSubmit={handleSubmit}>
          <Grid container spacing={1} style={{color: 'white'}}>

            <Grid item xs={12}>
              <TextField sx={{ input: { color: 'black', background: 'white' } }} name="name" value={name} onChange={handleInputChange}  InputLabelProps={{ style: { color: 'black' } }}  placeholder="Name" label="Name" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
            </Grid>

         
           
            <Grid item xs={12}>
              <TextField InputProps={{ style: { color: 'black', background: 'white' } }} name="description" value={description} onChange={handleInputChange}  InputLabelProps={{ style: { color: 'black' } }}label="Description" multiline rows={4} placeholder="Description" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
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
        </>
    
      

         <br></br>

          <Grid item xs={12}>
            <Button form="organization-form-id" type="submit" variant='contained' sx={{ marginRight: 3.5 }}>
              Next
            </Button>
          </Grid>
     
    </CardContent>
    </Container>
  )
}

export default Teams
