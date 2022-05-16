import TextField from '@mui/material/TextField';
import {Search} from '@mui/icons-material'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import styledComponents from 'styled-components';

const TxtField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#252525',
      },
  
      '&:hover fieldset': {
        borderColor: '#252525',
      },
  
      '&.Mui-focused fieldset': {
        borderColor: '#252525',
      },
    },
  });

const Container = styledComponents.div`
  display: flex;
  align-items:center;
  
`
  

const SearchField = () => {
    return (
      <Container>
        <TxtField 
        id="outlined-basic" 
        label="Search Item" 
        variant="outlined" 
        sx={{ input: { color: 'white'}}} 
        InputLabelProps={{ style: { color: 'white'}, padding:1 }} 
        color='secondary' 
        />

        <IconButton>
            <Search sx={{ color: '#FFFFFF' }}/>
        </IconButton>

      </Container>
    );
  }
  
  export default SearchField;