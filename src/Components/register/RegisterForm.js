
import { useState } from 'react';

// @mui
import { Stack, IconButton, InputAdornment, Grid, TextField, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// components
import Iconify from '../Iconify';
// ----------------------------------------------------------------------

//redux
import {useDispatch, useSelector} from 'react-redux';
import {createUsers} from '../../redux/actions/usersActions';
import { useNavigate } from 'react-router-dom';


export default function RegisterForm() {

  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch(); //Redux Dispatch

  const { errorMessageRegister } = useSelector(state => state.data2); //Redux State


  const createuser = (e) =>{ 

    e.preventDefault();

    dispatch(createUsers({
        "first_name": firstname,
        "last_name":lastname,
        email,
        password,
    })).then(() => {
      if(localStorage.getItem('access_token') !== null) {
        navigate("/new/get-started")
    } else {
   
  }
    })
    

   
  }


  return (
    <form onSubmit={createuser}>
      <Stack spacing={3}>

      {errorMessageRegister && errorMessageRegister.password !== undefined ? errorMessageRegister.password.map((error,index) => {
      
        return (

            <div key={index}>
            <Alert severity="error">
              {error}
            </Alert>
            </div>
            )
            })

            : errorMessageRegister && errorMessageRegister.email !== undefined ? errorMessageRegister.email.map((error, index) => {
      
              return (
      
                  <div key={index}>
                  <Alert severity="error">
                    {error === 'This field must be unique.' ? 'Email already in use.' : null}
                  </Alert>
                  </div>
                  )
                  }) : null
            
            }

           

    
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Grid>
                  <TextField placeholder="First name" label="First name" variant="outlined" name="firs_tname" fullWidth  required autoComplete='off' onChange={(e) => setFirstname(e.target.value)} value={firstname}/>
        </Grid>

        <Grid>
                  <TextField placeholder="Last name" label="Last name" variant="outlined" name="last_name" fullWidth  required autoComplete='off' onChange={(e) => setLastname(e.target.value)} value={lastname}/>
        </Grid>
        </Stack>
  
        <Grid >
                  <TextField type="email" placeholder="Email" label="Email" variant="outlined"  fullWidth required autoComplete='off' onChange={(e) => setEmail(e.target.value)} value={email}/>
        </Grid>


        <Grid >
                  <TextField type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} value={password}  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                placeholder="Password" label="Password" variant="outlined"  fullWidth required autoComplete='off'/>
        </Grid>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" >
          Register
        </LoadingButton>
      </Stack>
    </form>
  );
}
