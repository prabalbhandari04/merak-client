import React, {useEffect} from 'react';


// Material Ui
import { Grid } from '@mui/material';
import Card from '../Molecules/Card'


// -----------------Redux State for AllProducts(Api)-----------------------------------------------------

import {useSelector, useDispatch} from 'react-redux';
import {loadProducts} from '../../Redux/Actions/productsActions';




const CardList = () => {

  const dispatch = useDispatch();
  const {products} = useSelector(state => state.data);

  //Fetching All Products - loadProducts le redux ko -> Action ma (dispatch gareko) Api call gareko cha (GET)
  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);
    


  return (
    <>
    
    <Grid container spacing={3} style={{marginBottom: '30px'}}>

      {products && products.map((product, index) => (
        <Grid  key={index} item xs={12} sm={6} md={3}>
          <Card product={product}/>
        </Grid>
      ))}

    </Grid>

   
    </>
  );
}

  

export default CardList 