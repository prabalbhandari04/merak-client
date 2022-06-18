// ** React Imports
import { useState } from 'react'
import {useDispatch} from 'react-redux';
import { addOrganizations } from '../../Redux/Actions/organizationActions'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import { Container} from '@mui/material';


import Title from '../../Components/Atoms/Title'






const Organizations = () => {

    
    let dispatch = useDispatch();

  
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

        setState({
            name: '',
            description: '',
          });
    
      }

    


  return (
    <Container style={{justifyContent: 'center', marginTop: '30px'}} maxWidth="sm">

    <Title title="Create Organization" /> 

    <CardContent>
    

        <>
        <form id="organization-form-id" onSubmit={handleSubmit}>
          <Grid container spacing={1} style={{color: 'white'}}>

            <Grid item xs={12}>
              <TextField sx={{ input: { color: 'black', background: 'white' } }} value={name} onChange={handleInputChange} name="name" InputLabelProps={{ style: { color: 'black' } }}  placeholder="Name" label="Name" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
            </Grid>

         
           
            <Grid item xs={12}>
              <TextField InputProps={{ style: { color: 'black', background: 'white' } }} value={description} onChange={handleInputChange} name="description" InputLabelProps={{ style: { color: 'black' } }}label="Description" multiline rows={4} placeholder="Description" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
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

export default Organizations
