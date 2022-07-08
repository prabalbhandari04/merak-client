import React from 'react'
import { Link } from 'react-router-dom';
// @mui
import { Grid, Container, Typography } from '@mui/material';
import Page from '../components/Page';
import useSettings from '../hooks/useSettings';
import OrgCard from './organization/OrgCard';


const GettingStarted = () => {

  const { themeStretch } = useSettings();


  return (
    <Page title="Getting Started">
      <Container maxWidth={themeStretch ? false : 'xl'}>

      <Typography variant="h3" sx={{ mb: 8, mt: 13 }} style={{display: 'flex', justifyContent: 'center'}}>
         Getting Started 🎉
        </Typography>
       
      <Grid container spacing={4}  style={{display: 'flex', justifyContent: 'center'}}>

          
          <Grid item xs={12} sm={6} md={3}>
            <span id="create">
          <Link to="/new/organization" style={{textDecoration: 'none'}}  id="organisation">
            <OrgCard title="Create an Organization" icon={'fluent:people-team-add-20-filled'} />
          </Link>
            </span>
          </Grid>
          

          <Grid item xs={12} sm={6} md={3}>
          <Link to="/new/join" style={{textDecoration: 'none'}}>
            <OrgCard  title="Join an Organization" icon={'fluent:people-team-32-filled'} />
          </Link>
          </Grid>

         

      </Grid>
      </Container>
    </Page>
  )
}

export default GettingStarted