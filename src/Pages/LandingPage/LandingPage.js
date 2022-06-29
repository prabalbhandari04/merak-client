import * as React from 'react';
import Box from '@mui/material/Box';
import { padding, spacing, width } from '@mui/system';
import { PaddingOutlined } from '@mui/icons-material';
import { Grid } from '@mui/material';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const font_theme = createTheme();

font_theme.typography.h2 = {
fontSize: '1.2rem',
fontFamily: 'Montserrat',
'@media (min-width:600px)': {
  fontSize: '1.5rem',
},
[font_theme.breakpoints.up('md')]: {
  fontSize: '3.5rem',
},
};

font_theme.typography.h6 = {
  fontFamily: 'Montserrat',
  color:"white",
  fontWeight:"20",
'@media (min-width:600px)': {
  fontSize: '0.4rem',
},
[font_theme.breakpoints.up('md')]: {
  fontSize: '0.9rem',
},
};

const Landing = () => {
  return (
    <>
{/* -------------------------taskbar------------------------------------------ */}
    <Grid container
      sx={{
          width: '100%',
          height: '1',
          backgroundColor: '#000B0F',
          m: '0'
        }}
        >
        <Grid item xs={5} sx={{ml:'0.5rem', mt:"0.5rem"}}>
        <img src="/asset/images/Logo2x.png" style={{width:'70px' ,padding:'1px'}} />          
        </Grid>
        <Grid item xs={1} sx={{mt:"0.5rem"}}>
          <Typography>
            Feature
          </Typography>
        </Grid>
        <Grid item xs={3} sx={{mt:"0.5rem"}}>
          <Typography>
            Pricing
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{mt:"0.5rem", ml:"4.8rem", mr:"0" }}>
        <Button variant="outlined" size="small" color="primary" sx={{mr:"0"}}>
            Get started
            </Button>
        </Grid>
    </Grid>

{/* --------------------------------------------------------------upper circel shape and middle text---------------------------------- */}
    <Grid container>
    <Grid item xs={3} >
    <img src="/asset/images/circle_shape.png" style={{width:'100%' ,padding:'3px'}} />
    </Grid>
    <Grid item xs={6} sx={{mt:"14rem"}}>
      <ThemeProvider theme={font_theme}>
    <Typography variant="h2" component="h2" align="center">
        MONITOR YOUR
    </Typography>
    <Typography variant="h2" component="h2" align="center">
        STAFF MEMBERS,
    </Typography>
    <Typography variant="h2" component="h2" align="center">
        TRACK YOUR
    </Typography>
    <Typography variant="subtitle2" component="h2" align="center" color="gray" sx={{mt:'1rem'}}>
        STAY CONNECT AND UPDATED
    </Typography>
    </ThemeProvider>
    </Grid>
    <Grid item xs={3} sx={{mt:"6rem"}}>
    <img src="/asset/images/circle_shape2.png" style={{width:'100%' ,padding:'3px'}} />
    </Grid>
    </Grid>

{/* ---------------------------------------------box with task, increase and real timimg description------------------------- */}
    <Grid container sx={{mt:"-4rem"}}>
      <Grid item xs={1}>
      </Grid>
      <Grid item xs={8}>
        <Box  width="1200px" height={"419"} backgroundColor="#252525" sx={{borderRadius:"10px" ,padding:"20px"}}>
          <Grid container>
            <ThemeProvider theme={font_theme}>
                <Grid item xs={4} align="center" >
                    <img src="/asset/images/real_time.png" style={{width:'30%' }} />
                    <Typography mt="-1rem" variant="h6">
                      REAL TIME TRACKING
                    </Typography>
                    <Typography>

                    </Typography>
                </Grid>
                <Grid item xs={4} align="center" >
                    <img src="/asset/images/task_management.png" style={{width:'30%'}} />
                    <Typography  mt="-1rem" variant="h6">
                      TASK MANAGEMENT
                    </Typography>
                </Grid>
                <Grid item xs={4} align="center">
                    <img src="/asset/images/increase.png" style={{width:'30%' }} />
                    <Typography mt="-1rem" variant="h6">
                      INCREASE PRODUCTIVITY
                    </Typography>
                </Grid>
            </ThemeProvider>
          </Grid>
        </Box>
        </Grid> 
        <Grid item xs={1}>
        
      </Grid>
    </Grid>
</>
  );
}


export default Landing;