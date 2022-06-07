import React, {useState} from 'react';

import Subtitle from '../Atoms/Subtitle';

import {Grid,Typography} from "@material-ui/core";
import TextField from '@mui/material/TextField';

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

const CreateAccount = ()=>{
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [companyname, setCompanyname] = useState("")
    const [companycontact, setCompanycontact] = useState("")
    const [companyaddress, setCompanyaddress] = useState("")
    const [designation, setDesignation] = useState("")
    const [address, setAddress] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [industry, setIndustry] = useState("")
    const [website, setWebsite] = useState("")


    return(
        <Wrapper>
            <Subtitle title="CREATE AN ACCOUNT" />
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
                        <span style={{color: 'gray'}}> Company Name </span> 
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField sx={{ input: { color: 'white', background: '#252525', padding:'5px' } }} variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e) => setCompanyname(e.target.value)}/>
                    </Grid>


                    <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
                    <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                        <span style={{color: 'gray'}}> Company Contact </span> 
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField sx={{ input: { color: 'white', background: '#252525', padding:'5px' } }} variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e) => setCompanycontact(e.target.value)}/>
                    </Grid>

                    <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
                    <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                        <span style={{color: 'gray'}}> Company Address </span> 
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField sx={{ input: { color: 'white', background: '#252525', padding:'5px' }}} variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e) => setCompanyaddress(e.target.value)}/>
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


                    <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
                    <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                        <span style={{color: 'gray'}}> Zip Code: </span> 
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField sx={{ input: { color: 'white', background: '#252525', padding:'5px' } }} variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e) => setZipcode(e.target.value)}/>
                    </Grid>


                    <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
                    <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                        <span style={{color: 'gray'}}> Industry </span> 
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField sx={{ input: { color: 'white', background: '#252525', padding:'5px' }}} variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e) => setIndustry(e.target.value)}/>
                    </Grid>

                    <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
                    <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                        <span style={{color: 'gray'}}> Website </span> 
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField sx={{ input: { color: 'white', background: '#252525', padding:'5px' }}} variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e) => setWebsite(e.target.value)}/>
                    </Grid>


                    

                </Grid>
                </form>


                
            </Container>
        </Wrapper>
)}

export default CreateAccount