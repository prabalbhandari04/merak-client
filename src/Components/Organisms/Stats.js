//Styled components
import styledComponents from 'styled-components'
import Stack from '@mui/material/Stack';

const Qu = styledComponents.h1`
text-align: center;
font-size: 3rem;
font-weight: 900;
`

const Stats = ({packed, delivered, stock}) => {

  return (
    <Stack direction="row" spacing='5rem'>
    <Stack>
      <Qu>{packed.length}</Qu>
      <span style={{color: '#00A7E3'}}>To be packed</span>
    </Stack>

    <Stack>
      <Qu>{delivered.length}</Qu>
      <span style={{color: '#00A7E3'}}>To be delivered</span>
    </Stack>

    <Stack>
      <Qu>{stock.length}</Qu>
      <span style={{color: '#00A7E3'}}>Total in stock</span>
    </Stack>

    </Stack> 
  );
}

export default Stats