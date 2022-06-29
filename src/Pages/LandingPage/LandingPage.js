import * as React from 'react';
import Box from '@mui/material/Box';
import { padding, spacing, width } from '@mui/system';
import { PaddingOutlined } from '@mui/icons-material';
import { Grid } from '@mui/material';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Swiper, SwiperSlide } from "swiper/react";
import "./Landing.css";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";


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

font_theme.typography.subtitle2 = {
  fontFamily: 'Montserrat',
  color:"gray",
  fontWeight:"10",
'@media (min-width:600px)': {
  fontSize: '0.4rem',
},
[font_theme.breakpoints.up('md')]: {
  fontSize: '0.9rem',
},
};

font_theme.typography.h3= {
  fontFamily: 'Montserrat',
'@media (min-width:600px)': {
  fontSize: '1.9rem',
},
[font_theme.breakpoints.up('md')]: {
  fontSize: '2.5rem',
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
            GET STARTED
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
    <Grid container justifyContent={"center"} sx={{mt:"2rem"}}>
    <Button variant="contained" color="primary"  align="center" justify="center">
        GET STARTED
    </Button>
    </Grid>
    </Grid>
    <Grid item xs={3} sx={{mt:"6rem"}}>
    <img src="/asset/images/circle_shape2.png" style={{width:'100%' ,padding:'3px'}} />
    </Grid>
    </Grid>

{/* ---------------------------------------------box with task, increase and real timimg description------------------------- */}
    <Grid container sx={{mt:"-4rem"}} justifyContent={"center"}>
        <Box  width="1200px" height={"419"} backgroundColor="#252525" sx={{borderRadius:"10px" ,padding:"60px"}}>
          <Grid container>
            <ThemeProvider theme={font_theme}>
                <Grid item xs={4} align="center" >
                    <img src="/asset/images/real_time.png" style={{width:'30%' }} />
                    <Typography mt="-1rem" variant="h6">
                      REAL TIME TRACKING
                    </Typography>
                    <Typography variant="subtitle2" sx={{mt:"1rem"}}  width="250px">
                    Your employees are slacking off?
                    Get updated on their activities instantly and increase your efficiency
                    </Typography>
                </Grid>
                <Grid item xs={4} align="center" >
                    <img src="/asset/images/task_management.png" style={{width:'30%'}} />
                    <Typography  mt="-1rem" variant="h6">
                      TASK MANAGEMENT
                    </Typography>
                    <Typography variant="subtitle2" sx={{mt:"1rem"}} width="250px">
                    Get your task managed on time and updated.
                    </Typography>
                </Grid>
                <Grid item xs={4} align="center">
                    <img src="/asset/images/increase.png" style={{width:'30%' }} />
                    <Typography mt="-1rem" variant="h6">
                      INCREASE PRODUCTIVITY
                    </Typography>
                    <Typography variant="subtitle2" sx={{mt:"1rem"}}  width="250px">
                    Get updated on every tasks and activities of your team, allocate them tasks and increase your productivity
                    </Typography>
                </Grid>
            </ThemeProvider>
          </Grid>
        </Box>
    </Grid>


{/* -------------------------------------Starting making youe team------------------------------------- */}
  <Grid container padding="6.5%" mt="3rem">
          <Grid item xs={6}>
            <ThemeProvider theme={font_theme}>
              <Typography variant="h3" >
                STARTING BUILDING
              </Typography>
              <Typography variant="h3" >
                YOUR TEAM
              </Typography>
              <Typography variant='h6' width="495px" color="gray" sx={{mt:"2rem"}}>
              Register your organization, add team members and allocate them their tasks. 
              Build up the connection, join in with their activities 
              boost up their morale and get your tasks done.
              </Typography>
            </ThemeProvider>
          </Grid>
          <Grid item={6}>

          </Grid>
  </Grid>

{/* -------------------------------------assign and update task----------------------------------------- */}
  <Grid container padding="6.5%" mt="1rem">
          <Grid item={1}>
            <Box width="500px" ml="-4rem">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
                >
                <SwiperSlide>
                  <Typography variant='h6'>
                  COMPLETE
                  </Typography>
                  </SwiperSlide>
                <SwiperSlide>
                <Typography variant='h6'>
                  INPROGRESS
                  </Typography>
                </SwiperSlide>
                <SwiperSlide>
                <Typography variant='h6'>
                  PENDING
                  </Typography>
                  </SwiperSlide>
              </Swiper>
              </Box>
          </Grid>
          <Grid item xs={5} sx={{ml:"20rem", mr:"0"}}>
            <ThemeProvider theme={font_theme}>
              <Typography variant="h3" >
                ASIGN AND
              </Typography>
              <Typography variant="h3" >
                UPDATE TASKS
              </Typography>
              <Typography variant='h6' width="495px" color="gray" sx={{mt:"2rem"}}>
              Assign tasks to your team members and maintain the working environment in your 
              organization. Stay updated with the progress of your project and increase your productivity.
              </Typography>
            </ThemeProvider>
          </Grid>
  </Grid>

{/* -------------------------------footer---------------------------------------- */}
  <Grid container>
    <Grid item xs={3} >
      <img src="/asset/images/fotter1.png" style={{width:'100%' ,padding:'3px'}} />
    </Grid>
    <Grid item xs={6} sx={{mt:"10rem"}}>
    <ThemeProvider theme={font_theme}>
      <Typography variant="h2" component="h2" align="center">
         SUBSCRIBE
      </Typography>
      <Typography variant="subtitle2" component="h2" align="center" color="gray" sx={{mt:'1rem'}} >
        And get updated on our every updates, Newsletters,
        Changes, Offers and many more.
      </Typography>
    </ThemeProvider>
    <Grid container justifyContent={"center"} sx={{mt:"2rem"}}>
    <Button variant="contained" color="primary"  align="center" justify="center">
        SUBSCRIBE
    </Button>
    </Grid>
    </Grid>
    <Grid item xs={3}>
    <img src="/asset/images/fotter2.png" style={{width:'100%' ,padding:'3px'}} />
    </Grid>
  </Grid>

</>
  );
}


export default Landing;