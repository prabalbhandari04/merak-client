
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// @mui
import { Link, Stack,IconButton, InputAdornment, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// components
import Iconify from '../Iconify';


//redux
import {useDispatch, useSelector} from 'react-redux';
import {loginUsers} from '../../redux/actions/usersActions';

//@mui
import { Grid, TextField} from '@mui/material';



// ----------------------------------------------------------------------

const LoginForm = () => {

  const navigate = useNavigate();
 
  const [email, setEmail] = useState("") //forEmail
  const [password, setPassword] = useState("") //forPassword
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch(); //Redux Dispatch
  const { errorMessageLogin } = useSelector(state => state.data2); //Redux State

  const handleLogin = (e) => {
    
    e.preventDefault()

    dispatch(loginUsers({
       email,
       password,
     }), [dispatch]).then(() => {
      
      if(localStorage.getItem('access_token') !== null) {
          navigate("/dashboard")
          window.location.reload();
      } else {
     
    }
        
     })}
  



  return (
    <form onSubmit={handleLogin}>
      <Stack spacing={3}>
      
    {errorMessageLogin && 
            <>
            <Alert severity="error" >
            {errorMessageLogin}
            </Alert>
            </>
   }



        <Grid >
                  <TextField type="email" placeholder="Email" label="Email" variant="outlined"  fullWidth required autoComplete='off' onChange={(e) => setEmail(e.target.value)} value={email}/>
        </Grid>


        <Grid >
                  <TextField type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} value={password} InputProps={{
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
        


      
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        
        <Link component={RouterLink} variant="subtitle2" to='/auth/login'>
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained"  onClick={handleLogin}>
        Login
      </LoadingButton>
    </form>
  );
}

export default LoginForm;
