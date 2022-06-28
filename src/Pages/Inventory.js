import React, {useEffect, useState} from 'react';

// @mui
import { Grid, Container, Typography, Alert} from '@mui/material';

// redux
import {useSelector, useDispatch} from 'react-redux';
import {loadProducts} from '../redux/actions/productsActions';


import Stats from '../organisms/Stats';




// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import CardList from '../organisms/CardList';
import AddItem from '../molecules/AddItem';




// ----------------------------------------------------------------------

const Inventory = () => {

  const { themeStretch } = useSettings();

  const dispatch = useDispatch(); //Redux Dispatch
  const {products} = useSelector(state => state.data); //Redux State
  const [search, ] = useState("");

  const { errorMessageProfile } = useSelector(state => state.data2); //Redux State

  //Fetching All Products - loadProducts le redux ko -> Action ma (dispatch gareko) Api call gareko cha (GET)
  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  

  //Filtering Products
  const filteredProduct = products.filter(
    product => {
      return (
        product
        .name
        .toLowerCase()
        .includes(search.toLowerCase()) 
      );
    }
  );

  // const handleChange = e => {
  //   setSearch(e.target.value);
  // };

  return (
    <Page title="Inventory">
      <Container maxWidth={themeStretch ? false : 'xl'}>

      {errorMessageProfile && 
            <>
            <Alert severity="warning" >
            {errorMessageProfile}
            </Alert>
            </>
   }

        <Typography variant="h3" component="h1" paragraph>
          Inventory
        </Typography>

        <Typography variant="h5" component="h1" paragraph>
          Storage Stats
        </Typography>

      <Grid container spacing={3} style={{marginBottom: '23px'}}>
          <Grid item xs={12} md={4}>
            <Stats title="To be packed" total={products.length} />
          </Grid>

          <Grid item xs={12} md={4}>
            <Stats title="To be delivered" total={products.length} />
          </Grid>

          <Grid item xs={12} md={4}>
            <Stats title="Total in stock" total={products.length} />
          </Grid>
          
        </Grid>

        <Typography variant="h5" component="h1" paragraph>
        To be delivered
        </Typography>


        <CardList filteredProduct={filteredProduct}/>


        <Typography variant="h5" component="h1" paragraph style={{marginTop: '23px'}}>
        To be packed
        </Typography>


        <CardList filteredProduct={filteredProduct}/>


      </Container>

      <AddItem/>
    </Page>
  );
}


export default Inventory;