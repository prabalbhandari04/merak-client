import React, {useEffect} from 'react';
import axios from 'axios';

import { Grid } from '@mui/material';
import Card from '../Molecules/Card'
  

// -----------------Redux State for AllProducts(Api)-----------------------------------------------------

import {useSelector, useDispatch} from 'react-redux';
import {setProducts} from '../../Redux/Actions/productActions';





//Authentication for Merak

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyNzYyNDQ5LCJpYXQiOjE2NTI3NTUyNDksImp0aSI6IjA3NDhjMzc0NmQ1ODQ1YzlhYmU5YzIzMmU4Zjc0Y2QzIiwidXNlcl9pZCI6MX0.Lx8M0sbl0NUdIxRsWX9E05FlGKoGj6N_v9feTEq73DM"

let headers = {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": 'Bearer ' + token
};

//Proxy bypass Cors

const prox = "https://kissasian1988.herokuapp.com/"




const CardList = () => {

  const dispatch = useDispatch();

  //Fetching allProducts from the API
    useEffect(() => {
      const fetchProducts = async () => {
        const response = await axios.get(`${prox}https://merak-test.herokuapp.com/inventory/product`,
        {
          headers: headers
        }).catch((err) => {
          console.log('Error', err)
        })
        dispatch(setProducts(response.data));
      }
      
      fetchProducts()
    });

  //Redux State for AllProducts(Api)
  const products = useSelector(state => state.allProducts.products);
    


  return (
    <>
    
    <Grid container spacing={3} style={{marginBottom: '30px'}}>

      {products.map((product, index) => (
        <Grid  key={index} item xs={12} sm={6} md={3}>
          <Card product={product}/>
        </Grid>
      ))}

    </Grid>

   
    </>
  );
}

  

export default CardList 