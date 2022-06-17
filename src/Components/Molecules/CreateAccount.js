import React, {useState, useContext} from 'react';
import {AllContext} from '../../context/allContext'

import Subtitle from '../Atoms/Subtitle';

import {Grid,Typography} from "@material-ui/core";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FilledInput from '@mui/material/FilledInput';

import styledComponents from 'styled-components';

import {useDispatch} from 'react-redux';
import {createUsers} from '../../Redux/Actions/usersActions';

const Wrapper = styledComponents.section`
    display: flex;
    flex-direction: column;
`
const Container = styledComponents.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    padding-top: 5rem;
`

const CreateAccount = ()=>{
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [contact, setContact] = useState("")
    const [companyname, setCompanyname] = useState("")
    const [companycontact, setCompanycontact] = useState("")
    const [companyaddress, setCompanyaddress] = useState("")
    const [designation, setDesignation] = useState("")
    const [address, setAddress] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [industry, setIndustry] = useState("")
    const [website, setWebsite] = useState("")

    const {setSteps, setDirection} = useContext(AllContext)

    const dispatch = useDispatch(); //Redux Dispatch

    const [hidden, setHidden] = useState(false)

    const handleClickShowPassword = () => {
        setHidden(!hidden)
      };

    const createuser = (e)=>{
        e.preventDefault();

        dispatch(createUsers({
            "first_name": firstname,
            "last_name":lastname,
            email,
            password,
        }))
        
        const token = localStorage.getItem('access_token')

        if(token){
            setSteps(2)
            setDirection({
                add: 'column-reverse',
                team: 'column',
                avatar: 'column-reverse'
              })
        }

    }

    return(
        <Wrapper>
            <Subtitle title="CREATE AN ACCOUNT" />
            <Container>
                <form id="metadata-form-id">
                <Grid container spacing={2} style={{color: 'white'}}>

                    <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
                    <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                        <span style={{color: 'gray'}}> First name </span> 
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField sx={{ input: { color: 'white', background: '#252525', padding:'5px'}}} variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e) => setFirstname(e.target.value)}/>
                    </Grid>


                    <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
                    <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                        <span style={{color: 'gray'}}> Last name </span> 
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField sx={{ input: { color: 'white', background: '#252525', padding:'5px'}}} variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}} onChange={(e) => setLastname(e.target.value)}/>
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
                        <span style={{color: 'gray'}}> Password </span> 
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <FilledInput sx={{ input: { color: 'white', background: '#252525', padding:'5px' } }} type={hidden ? 'text' : 'password'} variant="filled" fullWidth autoComplete='off' style={{background:'#181818'}} onChange={(e) => setPassword(e.target.value)} value={password}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            
                            edge="end"
                            >
                            {hidden ? <Visibility style={{color: 'white' }}/> : <VisibilityOff style={{color: 'white' }}/>}
                            </IconButton>
                        </InputAdornment>
                        }
                        />
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

                    <Box height="70px" />

                    <Button variant="contained" onClick={createuser}>
                        Next
                    </Button>


                    

                </Grid>
                </form>


                
            </Container>
        </Wrapper>
)}

export default CreateAccount