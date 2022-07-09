import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { Grid, Container, Typography, TextField, Alert, Stack } from '@mui/material';
import Page from '../../components/Page';

// ** MUI Imports
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



import { LoadingButton } from '@mui/lab';

import { useSelector, useDispatch } from 'react-redux';
import { addTeams, loadOrganizations } from '../../redux/actions/organizationActions';
import { loadUsers } from '../../redux/actions/usersActions';



const Team = () => {
  
  let dispatch = useDispatch();

    const { organizations, errorMessageOrganization } = useSelector(state => state.data3); //Redux State
    const { users } = useSelector(state => state.data2); //Redux State


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
    <Page title="Create Team">
      <Container maxWidth="sm">

      <Typography variant="h3" sx={{ mb: 8, mt: 13 }} style={{display: 'flex', justifyContent: 'center'}}>
        Create Team 🎉
        </Typography>

        {errorMessageOrganization && 
            <>
            <Alert severity="error" >
            {errorMessageOrganization}
            </Alert>
            </>
        }
       
    
          
      <form id="team-form-id" onSubmit={handleSubmit}>
      <Grid container spacing={1} style={{color: 'white', marginTop: '8px'}}>

          <Grid item xs={12}>
            <TextField name="name" value={name} onChange={handleInputChange}    placeholder="Name" label="Name" variant="outlined" fullWidth required autoComplete='off' />
          </Grid>



          <Grid item xs={12}>
            <TextField  name="description" value={description} onChange={handleInputChange}  label="Description" multiline rows={4} placeholder="Description" variant="outlined" fullWidth required autoComplete='off' />
          </Grid>


          <Grid item xs={12}>
                  
                  <FormControl fullWidth variant="outlined" required name="organization" >
                    <InputLabel id="organization-select-label" >Select Organization</InputLabel>
                    <Select
                      labelId="organization-select-label"
                      id="organization-select"
                      value={organizationName}
                      label="Select Organization"
                      onChange={handleChangeOrganization}
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
                  
                  <FormControl fullWidth variant="outlined" required name="team_leader" >
                    <InputLabel id="team-leader-select-label" >Select Team Leader</InputLabel>
                    <Select
                      labelId="team-leader-select-label"
                      id="team-leader-select"
                      value={teamLeader}
                      label="Select Team Leader"
                      onChange={handleChangeTeamLeader}    
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

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 3 }}>

      <LoadingButton form="team-form-id"  fullWidth size="large" type="submit" variant="contained">
        Add
      </LoadingButton>

      </Stack>

        <Link to="/dashboard" style={{textDecoration: 'none'}}>
       <Typography variant="h6"  style={{display: 'flex', justifyContent: 'center', color: 'gray'}}>
         Exit
      </Typography>
      </Link>

    </form>

         

      </Container>
    </Page>
  )
}

export default Team;