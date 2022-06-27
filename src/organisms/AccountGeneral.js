
import React, {useEffect, useState} from 'react';

// @mui
import { Box, Grid, Card, Stack, Avatar, Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import { LoadingButton } from '@mui/lab';






// redux
import {useSelector, useDispatch} from 'react-redux';
import {loadUser, updateUsers} from '../redux/actions/usersActions';

// ----------------------------------------------------------------------

export default function AccountGeneral() {



  const dispatch = useDispatch(); //Redux Dispatch
  const { user } = useSelector(state => state.data2); //Redux State

  console.log(user)
  

  //Fetching All Products - loadProducts le redux ko -> Action ma (dispatch gareko) Api call gareko cha (GET)
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);



  const [state, setState] = useState({
    display_name: user.display_name,
    phone: user.phone,
    address: user.address,
    avatar: '', 
  });


  const {display_name, phone, address, avatar} = state;


  const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({ display_name: display_name, phone: phone, address: address, avatar: avatar, [name]: value});
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const id = user.id
    const updated = state
    

    dispatch(updateUsers({id, updated}))
  }



  
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ py: 8, px: 3, textAlign: 'center' }}>

            <div style={{ display: 'flex', justifyContent: 'center'}}>
            <Avatar  src="https://www.gstatic.com/stadia/gamers/avatars/xxhdpi/avatar_53.png" style={{height: '100px', width: '100px', borderStyle: 'dotted', borderColor: 'gray' }}/>
            </div>

             <br></br>
             <div>
            <Button component="label" style={{alignItems: 'center', color: 'white', background: '#3f51b5'}}>
                     &nbsp;Change
                        <input accept="image/*" hidden type="file"  />
                    </Button>
                    </div>
          </Card>

        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'grid',
                rowGap: 3,
                columnGap: 2,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >

            <Grid >
                  <TextField placeholder="Name" label="Name" variant="filled" name="display_name" value={display_name} onChange={handleInputChange} fullWidth required autoComplete='off'/>
            </Grid>

            <Grid >
                  <TextField placeholder="Email" label="Email" variant="filled" fullWidth  autoComplete='off'/>
            </Grid>

            <Grid >
                  <TextField type="number" name="phone"  value={user.phone} placeholder="Phone Number" onChange={handleInputChange} label="Phone Number" variant="filled" fullWidth required autoComplete='off'/>
            </Grid>

            <Grid >
                  <TextField placeholder="Address" name="address"  value={user.address} label="Address" onChange={handleInputChange} variant="filled" fullWidth required autoComplete='off'/>
            </Grid>


           
             

            </Box>

            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
              

              <LoadingButton type="submit" variant="contained">
                Save Changes
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </form>
  );
}
