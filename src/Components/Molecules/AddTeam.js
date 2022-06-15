import React, {useState} from 'react';

import Subtitle from '../Atoms/Subtitle';

import {Grid,Typography} from "@material-ui/core";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import styledComponents from 'styled-components';

const Wrapper = styledComponents.section`
    display: flex;
    flex-direction: column;
`


const Container = styledComponents.div`
    display: flex;
    justify-content: space-between;
    max-width: 60%;
    padding-top: 5rem;
`



const AddTeam = ()=>{
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [designation, setDesignation] = useState("")
    const [address, setAddress] = useState("")

    return(

        <Wrapper>

            <Subtitle title="Add Team Member" />
            <Container>
                <form id="metadata-form-id">
                <Grid container spacing={2} style={{color: 'white'}}>

                    <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
                    <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                        <span style={{color: 'gray'}}> Full name </span> 
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField sx={{ input: { color: 'white', background: '#252525', padding:'5px'}}} variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e) => setFullname(e.target.value)}/>
                    </Grid>


                    <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
                    <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                        <span style={{color: 'gray'}}> Email id </span> 
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField sx={{ input: { color: 'white', background: '#252525', padding:'5px' } }} variant="filled" fullWidth autoComplete='off' style={{background:'#181818'}} onChange={(e) => setEmail(e.target.value)}/>
                    </Grid>
                    

                    <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
                    <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                        <span style={{color: 'gray'}}> Contact </span> 
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField sx={{ input: { color: 'white', background: '#252525', padding:'5px' } }} variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e) => setContact(e.target.value)}/>
                    </Grid>


                    <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
                    <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                        <span style={{color: 'gray'}}> Designation </span> 
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField sx={{ input: { color: 'white', background: '#252525', padding:'5px' } }} variant="filled" fullWidth autoComplete='off' style={{background:'#181818'}} onChange={(e) => setDesignation(e.target.value)}/>
                    </Grid>
                    

                    <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
                    <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                        <span style={{color: 'gray'}}> Address </span> 
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField sx={{ input: { color: 'white', background: '#252525', padding:'5px' } }} variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e) => setAddress(e.target.value)}/>
                    </Grid>
                    <Box height="70px" />

                    <Button variant="contained">
                        Next
                    </Button>                    


                </Grid>
                </form>


                
            </Container>

        </Wrapper>
)}

export default AddTeam