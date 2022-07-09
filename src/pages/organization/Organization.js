import { useState } from 'react'
import { Link } from 'react-router-dom';

import { Grid, Container, Typography, TextField, Alert, Stack } from '@mui/material';
import Page from '../../components/Page';



import { LoadingButton } from '@mui/lab';

import { useSelector, useDispatch } from 'react-redux';
import { addOrganizations } from '../../redux/actions/organizationActions';



const Organization = () => {
  
  let dispatch = useDispatch();

  

  const { errorMessageOrganization } = useSelector(state => state.data3); //Redux State

  //organization name and description
  const [state, setState] = useState({
    name: '',
    description: '',
  });

  const {name,  description} = state;

  const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value});
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    dispatch(addOrganizations(state));

  }

  


  return (
    <Page title="Create Organization">
      <Container maxWidth="sm">

      <Typography variant="h3" sx={{ mb: 8, mt: 13 }} style={{display: 'flex', justifyContent: 'center'}}>
        Create Organization 🎉
        </Typography>

        {errorMessageOrganization && 
            <>
            {errorMessageOrganization === 'You cannot create two organizations' ? 
            <Alert severity="error" >
            {errorMessageOrganization}
            </Alert>
            :
            <Alert severity="warning" >
            {errorMessageOrganization}
            </Alert>
            }
            </>
        }
       
    
          
      <form id="organization-form-id" onSubmit={handleSubmit}>
      <Grid container spacing={3} style={{color: 'white', marginTop: '8px'}}>
      
    

        <Grid  item xs={12}>
            <TextField type="name" placeholder="Name" label="Name" variant="outlined" value={name} onChange={handleInputChange} name="name"  fullWidth required autoComplete='off' />
        </Grid>


        <Grid item xs={12}>
            <TextField type="description" placeholder="Description" label="Description" variant="outlined" value={description} onChange={handleInputChange} name="description" multiline rows={4} fullWidth required autoComplete='off' />
        </Grid>
        


      
      </Grid>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 3 }}>

      <LoadingButton form="organization-form-id"  fullWidth size="large" type="submit" variant="contained">
        Next
      </LoadingButton>

      </Stack>

        <Link to="/new/team" style={{textDecoration: 'none'}}>
       <Typography variant="h6"  style={{display: 'flex', justifyContent: 'center', color: 'gray'}}>
         Skip
      </Typography>
      </Link>

    </form>

         

      </Container>
    </Page>
  )
}

export default Organization