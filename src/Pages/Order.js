import React, {useEffect, useState, useMemo} from 'react';





import Card from '../molecules/OrderCard';

//Component - Atoms

import AddOrder from '../molecules/AddOrder';

// hooks
import useSettings from '../hooks/useSettings';

// components
import Page from '../components/Page';


//Redux
import {useSelector, useDispatch} from 'react-redux';
import {loadOrders} from '../redux/actions/ordersActions';
import {loadVariants} from '../redux/actions/productsActions';

import {loadUsers} from '../redux/actions/usersActions';



// material -ui

import { Grid, Container, Typography} from '@mui/material';

import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';


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



const Order = () => {

  const { themeStretch } = useSettings();


  const dispatch = useDispatch(); //Redux Dispatch
  const {orders} = useSelector(state => state.data1); //Redux State
  const {users} = useSelector(state => state.data2);
  const {variants} = useSelector(state => state.data);
  const [search, setSearch] = useState("");

  //Fetching All Products - loadProducts le redux ko -> Action ma (dispatch gareko) Api call gareko cha (GET)
  useEffect(() => {
    dispatch(loadOrders());
    dispatch(loadVariants());
    dispatch(loadUsers());
  }, [dispatch]);
  
  const filteredOrder = orders.filter(
    order => {
      return (
        order
        .status
        .toLowerCase()
        .includes(search.toLowerCase()) 
      );
    }
  );

  const handleChange = e => {
    setSearch(e.target.value);
  };

  // Filter Component for Order

  // filter constants,state and functions
  const [orderList ] = useState([]);

  const [selectedFilter,setSelectedFilter] = useState();

  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedFilter) {
      return orderList;
    }
    return orderList.filter((item) => item.status === selectedFilter);
  }

  function handleCategoryChange(event) {
    setSelectedFilter(event.target.value);
  }
  
  // Avoid duplicate function calls with useMemo
  const orderFilteredList = useMemo(getFilteredList, [selectedFilter, orderList]);
  
  return (
<>
<Page title="Order">

    <Container maxWidth={themeStretch ? false : 'xl'}>

      

        <Typography variant="h3" component="h1" paragraph>
          Order
        </Typography>
       

        <Typography variant="h5" component="h1" paragraph>
         
        </Typography>

        

        


        <Grid container spacing={3} style={{marginBottom: '30px'}}>

          {orders && orders.map((order, index) => (
            <Grid xs={12} sm={6} key={index} item >
              <Card order={order}/>

            </Grid>
          ))}

        </Grid>



      </Container>

      

      <AddOrder />
      </Page>
    </>
  )
}
export default Order;
