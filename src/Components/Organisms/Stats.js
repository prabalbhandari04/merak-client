import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loadProducts} from '../../Redux/Actions/productsActions';
import styledComponents from 'styled-components' //Styled components
import Stack from '@mui/material/Stack'; //Material Ui


const Qu = styledComponents.h1`
text-align: center;
font-size: 3rem;
font-weight: 900;
margin: .5rem;
`

const Stats = () => {

  const dispatch = useDispatch();
  const {products} = useSelector(state => state.data);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);
 

  return (
    <Stack direction="row" spacing='5rem'>
    <Stack>
      <Qu>{products.length}</Qu>
      <span style={{color: '#00A7E3'}}>To be packed</span>
    </Stack>

    <Stack>
      <Qu>{products.length}</Qu>
      <span style={{color: '#00A7E3'}}>To be delivered</span>
    </Stack>

    <Stack>
      <Qu>{products.length}</Qu>
      <span style={{color: '#00A7E3'}}>Total in stock</span>
    </Stack>

    </Stack> 
  );
}

export default Stats