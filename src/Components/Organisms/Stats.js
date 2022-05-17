import { useSelector } from 'react-redux'; //Selecter for Redux state for allProducts(Api)
import styledComponents from 'styled-components' //Styled components
import Stack from '@mui/material/Stack'; //Material Ui


const Qu = styledComponents.h1`
text-align: center;
font-size: 3rem;
font-weight: 900;
margin: .5rem;
`

const Stats = () => {

  const allProducts = useSelector(state => state.allProducts.products);
 

  return (
    <Stack direction="row" spacing='5rem'>
    <Stack>
      <Qu>{allProducts.length}</Qu>
      <span style={{color: '#00A7E3'}}>To be packed</span>
    </Stack>

    <Stack>
      <Qu>{allProducts.length}</Qu>
      <span style={{color: '#00A7E3'}}>To be delivered</span>
    </Stack>

    <Stack>
      <Qu>{allProducts.length}</Qu>
      <span style={{color: '#00A7E3'}}>Total in stock</span>
    </Stack>

    </Stack> 
  );
}

export default Stats