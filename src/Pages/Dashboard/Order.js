import React, {useEffect, useState} from 'react';
import styledComponents from 'styled-components'

//Component - Organisms 
import CardList from '../../Components/Organisms/CardList'
import Stats from '../../Components/Organisms/Stats'

//Component - Atoms
import Subtitle from '../../Components/Atoms/Subtitle';
import AddItem from '../../Components/Molecules/AddItem';
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
//-------------------------------------------------


const Order = () => {

  const dispatch = useDispatch(); //Redux Dispatch
  const {products} = useSelector(state => state.data); //Redux State
  const [search, setSearch] = useState("");

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
  
    const handleChange = e => {
      setSearch(e.target.value);
    };



  return (
    <>
      <Container style={{marginTop: '30px'}}>


      {/* TopBar Content */}
      <Topbar>

        <Title title="Order" />  

        <TxtField id="outlined-basic" label="Search Item" variant="outlined" sx={{ input: { color: 'white'}}} 
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

        

        {/* Body Content */}


        <Subtitle title="Storage Stats" /> 

        <Stats/>

        <Box sx={{ m: '2rem' }} /> 

        <Subtitle title="To be Delivered" />

        <Box sx={{ m: '2rem' }} />   
       
        <CardList filteredProduct={filteredProduct}/>

        <Subtitle title="To be Packed" />  

        <Box sx={{ m: '2rem' }} /> 

        <CardList filteredProduct={filteredProduct}/>

      </Container>

      <AddItem/>
    </>
  )
}

export default Order;