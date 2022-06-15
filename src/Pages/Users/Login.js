import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

import Subtitle from '../../Components/Atoms/Subtitle';

import { Container} from '@mui/material';
import {Grid,Typography} from "@material-ui/core";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FilledInput from '@mui/material/FilledInput';

import {useDispatch, useSelector} from 'react-redux';
import {loginUsers} from '../../Redux/Actions/usersActions';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [hidden, setHidden] = useState(false)

    const dispatch = useDispatch(); //Redux Dispatch

    // let navigate = useNavigate()
  
    const handleClickShowPassword = () => {
      setHidden(!hidden)
    };

    const handleLogin = ()=>{
     dispatch(loginUsers({
        email,
        password,
      }), [dispatch]).then(()=>{
          setEmail("")
          setPassword("")
      })}

  return (
      <>
        <Container style={{marginTop: '100px', marginLeft: '60px'}}>
          <Subtitle title="USER LOGIN" />

          <Box height="30px" />
          <form id="metadata-form-id">

            <Grid container spacing={2} style={{color: 'white'}}>

              <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'centre'}}>
                <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                    <span style={{color: 'gray'}}> Email id </span> 
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField sx={{ input: { color: 'white', background: '#252525', padding:'5px', type:'email' } }} variant="filled" fullWidth autoComplete='off' style={{background:'#181818'}} onChange={(e) => setEmail(e.target.value)} value={email}/>
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

              <Box height="30px" />

              <Button variant="contained" onClick={handleLogin}>
                  Login
              </Button>
            </ Grid>
          </form>

        </Container>
      </>
  )
}

export default Login