import React, {useEffect, useState, useMemo} from 'react';
import styledComponents from 'styled-components'

//Component - Organisms 
import OrderCard from '../../Components/Molecules/OrderCard'
import OrderList from '../../Components/Organisms/OrderList';
import OrderFilter from '../../Components/Organisms/OrderFilter'
//Component - Atoms
import Subtitle from '../../Components/Atoms/Subtitle';
import AddOrder from '../../Components/Molecules/AddOrder';
import Title from '../../Components/Atoms/Title';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {loadOrders} from '../../Redux/Actions/ordersActions';
import {loadVariants} from '../../Redux/Actions/productsActions';

// material -ui
import { Container} from '@mui/material';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';

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
  const {orders} = useSelector(state => state.data1); //Redux State
  const {variants} = useSelector(state => state.data);
  const [search, setSearch] = useState("");

  //Fetching All Products - loadProducts le redux ko -> Action ma (dispatch gareko) Api call gareko cha (GET)
  useEffect(() => {
    dispatch(loadOrders());
    dispatch(loadVariants());
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

  console.log(orders)



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

        {/* Filter Component */}
      <div className="app">
            <div className="filter-container">
              <div>Filter by status:</div>
              <div>
                <select
                  name="category-list"
                  id="category-list"
                  onChange={handleCategoryChange}
                >
                  <option value="P">Pending</option>
                  <option value="CAN">Cancelled</option>
                </select>
              </div>
              <div>
          
          </div>
            </div>
          </div>
        </Topbar>

        <Subtitle title="Order"/>
        
        <OrderList filteredOrder={filteredOrder}/>
        
        <OrderFilter orderFilteredList = {orderFilteredList}/> 
        


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