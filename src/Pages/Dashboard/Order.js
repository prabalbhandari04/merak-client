import React, {useEffect, useState} from 'react';
import styledComponents from 'styled-components'

//Component - Organisms 
import CardList from '../../Components/Organisms/CardList'
import Stats from '../../Components/Organisms/Stats'

//Component - Atoms
import Subtitle from '../../Components/Atoms/Subtitle';
// import AddItem from '../../Components/Molecules/AddItem';
import AddOrder from '../../Components/Molecules/AddOrder';
import Title from '../../Components/Atoms/Title';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {loadProducts} from '../../Redux/Actions/productsActions';

// material -ui
import { Container} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

const Order = () => {
  return (
<>
    <Container style={{marginTop: '30px'}}>

        <Title title="Inventory" /> 
        

        {/* Body Content */}


        <Subtitle title="Storage Stats" /> 

        <Stats/>

        <Box sx={{ m: '2rem' }} /> 

        <Subtitle title="To be Delivered" />

        <Box sx={{ m: '2rem' }} />   
       
        <CardList />

        <Subtitle title="To be Packed" />  

        <Box sx={{ m: '2rem' }} /> 

        <CardList />

      </Container>

      <AddOrder/>
    </>
  )
}

export default Order