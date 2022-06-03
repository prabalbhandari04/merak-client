import React, {useEffect, useState} from 'react';
import styledComponents from 'styled-components'

//Component - Organisms 
import CardList from '../../Components/Organisms/CardList'
import Stats from '../../Components/Organisms/Stats'
import Card from '../../Components/Molecules/OrderCard'

//Component - Atoms
import Subtitle from '../../Components/Atoms/Subtitle';
// import AddItem from '../../Components/Molecules/AddItem';
import AddOrder from '../../Components/Molecules/AddOrder';
import Title from '../../Components/Atoms/Title';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {loadOrders} from '../../Redux/Actions/ordersActions';

// material -ui
import { Container} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";

//-------Custom Styling----------------------------
const TxtField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'gray',
      borderRadius: '10px',
    },

    '&:hover fieldset': {
      borderColor: 'gray',
    },

    '&.Mui-focused fieldset': {
      borderColor: 'gray',
    },
  },
});

const Topbar = styledComponents.div`
  display: flex;
  justify-content: space-between;
`


const Order = () => {
  const dispatch = useDispatch(); //Redux Dispatch
  const {orders} = useSelector(state => state.data); //Redux State
  const [search, setSearch] = useState("");

  //Fetching All Products - loadProducts le redux ko -> Action ma (dispatch gareko) Api call gareko cha (GET)
  useEffect(() => {
    dispatch(loadOrders());
  }, [dispatch]);
  
  const handleChange = e => {
    setSearch(e.target.value);
  };

  console.log(orders)
  return (
<>
    <Container style={{marginTop: '30px'}}>
        <Topbar>
        <Title title="Activity" /> 
        <TxtField id="outlined-basic" label="Search Activity" variant="outlined" sx={{ input: { color: 'white'}}} 
        InputLabelProps={{ style: { color: 'gray' } }} color='secondary' onChange = {handleChange} 
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon style={{color: 'gray'}}/>
            </InputAdornment>
           )
          }}
        />
        </Topbar>

        <Subtitle title="Order"/>

        <Grid container spacing={3} style={{marginBottom: '30px'}}>

          {orders && orders.map((order, index) => (
            <Grid  key={index} item >
              <Card order={order}/>
            </Grid>
          ))}

        </Grid>


      </Container>

      
      {/* <Grid container spacing={8}>
          <Grid item mx={4} >
             
          </Grid>
          <Grid item mx={2} >
          <Button type="submit" form="product-form-id" style={{color: '#00A7E3'}} autoFocus>
           Add
          </Button>
          </Grid>
      </Grid> */}

      
      <AddOrder/>
    </>
  )
}
export default Order;