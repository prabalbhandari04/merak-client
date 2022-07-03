import React, {useEffect, useState, useMemo} from 'react';


import { useTheme } from '@mui/material/styles';


import Card from '../molecules/OrderCard';

//Component - Atoms

import AddOrder from '../molecules/AddOrder';

// hooks
import useSettings from '../hooks/useSettings';

// components
import Page from '../components/Page';
import Scrollbar from '../components/Scrollbar';


//Redux
import {useSelector, useDispatch} from 'react-redux';
import {loadOrders} from '../redux/actions/ordersActions';
import {loadVariants} from '../redux/actions/productsActions';

import {loadUsers} from '../redux/actions/usersActions';


import EmptyContent from '../components/EmptyContent';

// material -ui

import { Grid, Container, Typography, Card as Cards, Stack, Divider} from '@mui/material';

import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import InvoiceAnalytic from '../pages/invoice/InvoiceAnalytic';

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

  const theme = useTheme();

  const { themeStretch } = useSettings();


  const dispatch = useDispatch(); //Redux Dispatch
  const {orders} = useSelector(state => state.data1); //Redux State
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



  //Reducing the order array to group by status

  let orderStatus = orders.reduce((acc, curr) => {
    const status = curr.status.toLowerCase();
    (acc[status] = acc[status] || []).push({
      invoice: curr.invoice,
    });
    return acc;
  }, {});
  

  let completed = orderStatus.completed !== undefined ? orderStatus.completed.length : 0;
  let pending = orderStatus.pending !== undefined ? orderStatus.pending.length : 0;
  let cancelled = orderStatus.cancelled !== undefined ? orderStatus.cancelled.length : 0;
  let total = completed + pending + cancelled;




  
  return (
<>
<Page title="Order">

    <Container maxWidth={themeStretch ? false : 'xl'}>

      

        <Typography variant="h3" component="h1" paragraph>
          Order
        </Typography>
       

        <Typography variant="h5" component="h1" paragraph>
         
        </Typography>


        <Cards sx={{ mb: 5, mt: 5, }}>
          <Scrollbar>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
              sx={{ py: 2 }}
            >
        
              <InvoiceAnalytic
                title="Completed"
                total={completed}
                percent={100*completed/total}
                label="order"
                icon="eva:checkmark-circle-2-fill"
                color={theme.palette.success.main}
              />
              <InvoiceAnalytic
                title="Pending"
                total={pending}
                percent={100*pending/total}
                label="order"
                icon="eva:clock-fill"
                color={theme.palette.warning.main}
              />
              <InvoiceAnalytic
                title="Cancelled"
                total={cancelled}
                percent={100*cancelled/total}
                label="order"
                icon="eva:bell-fill"
                color={theme.palette.error.main}
              />
              
            </Stack>
          </Scrollbar>
        </Cards>

        

        
        {orders != '' ? 

        <Grid container spacing={3} style={{marginBottom: '30px'}}>

          {orders && orders.map((order, index) => (
            <Grid xs={12} sm={6} key={index} item >
              <Card order={order}/>

            </Grid>
          ))}

        </Grid>

        : 

        <span>
        <EmptyContent
        title="No Orders Found"
        description={`You don't have any orders yet.`}
        sx={{
          '& span.MuiBox-root': { height: 160 },
        }}
      />
      </span>
          
          }



      </Container>

      

      <AddOrder />
      </Page>
    </>
  )
}
export default Order;
