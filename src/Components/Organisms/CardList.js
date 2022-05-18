import React, {useEffect} from 'react';
import axios from 'axios';

// Material Ui
import { Grid } from '@mui/material';
import Card from '../Molecules/Card'


// -----------------Redux State for AllProducts(Api)-----------------------------------------------------

import {useSelector, useDispatch} from 'react-redux';
import {setProducts} from '../../Redux/Actions/productActions';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



//Authentication for Merak

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY0Nzg3MjE2LCJpYXQiOjE2NTI3ODcyMTYsImp0aSI6IjcwOTkyNWY0OWViZjQ1ZDY5MmQxMzA0NjI1YjcyZGY0IiwidXNlcl9pZCI6MX0.E0X_MC9hUbRa_Sn0ji1gjAXZvrPBw1h_2TWhxUK5HEc"

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

        console.log(response)
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