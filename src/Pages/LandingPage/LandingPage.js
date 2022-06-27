import * as React from 'react';
import Box from '@mui/material/Box';
import { padding, spacing, width } from '@mui/system';
import { PaddingOutlined } from '@mui/icons-material';
import { Grid } from '@mui/material';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const Landing = () => {
    const theme = {
        spacing: 8,
      }
    


  return (
    <>
    
    <Grid container
      sx={{
          width: '100%',
          height: '1',
          backgroundColor: 'black',
          m: '0'
        }}
        >
        <Grid item xs={5} sx={{ml:'0.5rem', mt:"0.5rem"}}>
        <img src="/asset/images/Logo2x.png" style={{width:'60px' ,padding:'3px'}} />          
        </Grid>
        <Grid item xs={1} sx={{mt:"0.5rem"}}>
            Feature
        </Grid>
        <Grid item xs={3} sx={{mt:"0.5rem"}}>
            Pricing
        </Grid>
        <Grid item xs={2} sx={{mt:"0.5rem", ml:"4.8rem", mr:"0" }}>
        <Button variant="outlined" size="small" color="primary" sx={{mr:"0"}}>
            Get started
            </Button>
        </Grid>
    </Grid>

    <Grid container>
        
    </Grid>
</>
  );
}


export default Landing;