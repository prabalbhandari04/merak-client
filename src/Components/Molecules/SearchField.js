import TextField from '@mui/material/TextField';
import {Search} from '@mui/icons-material'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
// import OutlinedInput from '@mui/material/OutlinedInput';

const TxtField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
  
      '&:hover fieldset': {
        borderColor: 'white',
      },
  
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  });
  

const SearchField = () => {
    return (
        <TxtField 
        id="outlined-basic" 
        label="Search Item" 
        variant="outlined" 
        sx={{ input: { color: 'white'}}} 
        InputLabelProps={{ style: { color: 'white' } }} 
        color='secondary' 
        endadornment={
          <InputAdornment position="end">
            <IconButton edge="end">
              <Search />
            </IconButton>
          </InputAdornment>
        }
        />
    );
  }
  
  export default SearchField;



  