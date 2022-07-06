import React, {useEffect, useState, useMemo} from 'react';
import styledComponents from 'styled-components'

//Component - Organisms 

import OrderCard from '../../Components/Molecules/OrderCard'
import OrderList from '../../Components/Organisms/OrderList';
import OrderFilter from '../../Components/Organisms/OrderFilter'
import AddCustomer from '../../Components/Molecules/AddCustomer';
//Component - Atoms
import Subtitle from '../../Components/Atoms/Subtitle';
import CustomerList from '../../Components/Molecules/CustomerList';
//Redux
import {useSelector, useDispatch} from 'react-redux';

import {loadCustomer} from '../../Redux/Actions/usersActions';



// material -ui
import { Container} from '@mui/material';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import axios from 'axios';


const Customer= () => {
  const dispatch = useDispatch(); //Redux Dispatch
  const {users} = useSelector(state => state.data2);
  const {orders} = useSelector(state => state.data1);
  const [customerlist,SetCustomerlist] = useState("")
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY1MDM3MTQzLCJpYXQiOjE2NTMwMzcxNDMsImp0aSI6ImJkNjdlMzNmNjE3YzQ2NDI4NWUyNDU2YTkxMDI3NzQ0IiwidXNlcl9pZCI6MX0.FCHJiiWiW7s8kTW-h1wKen43dx-wyPN2YS7MUb23D_o"

let headers = {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": 'Bearer ' + token
};

  //Fetching All Products - loadProducts le redux ko -> Action ma (dispatch gareko) Api call gareko cha (GET)
  useEffect(() => {
    fetch(`https://merak-test.onrender.com/user/api/customer/`, {headers: headers}).then(res => res.json()).then(data => {
      console.log(data)
      SetCustomerlist(data)
  });
})
  
  
  return (
<>
<Container style={{marginTop: '30px'}}>

        <Subtitle title="Customer"/>
        
        

          <Grid container spacing={3} style={{marginBottom: '30px'}}>
          {customerlist && <CustomerList customerlist={customerlist} title="Blogs List"/>}
          {/* {orders && orders.map((data, index) => (
            <Grid xs={12} sm={6} key={index} item >
              <CustomerCard data={data}/>
            </Grid>
          ))} */}

        </Grid>



      </Container>
      <AddCustomer />
    </>
  )
}
export default Customer;
