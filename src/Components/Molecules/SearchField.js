import TextField from '@mui/material/TextField';
import {Search} from '@mui/icons-material'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
// import OutlinedInput from '@mui/material/OutlinedInput';
  import SearchList from './SearchList';
import {useState} from 'react';


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
  

const SearchField = ({details}) => {

  
  const [search, setSearch] = useState("");


    const filteredProduct = details.filter(
      product => {
        return (
          product
          .title
          .toLowerCase()
          .includes(search.toLowerCase()) 
        );
      }
    );
  
    const handleChange = e => {
      setSearch(e.target.value);
    };

   
  
   

    function searchList() {
      return (
          <SearchList filteredProduct={filteredProduct} />
      );
    }



    return (
      <>
        <TxtField 
        id="outlined-basic" 
        label="Search Item" 
        variant="outlined" 
        sx={{ input: { color: 'white'}}} 
        InputLabelProps={{ style: { color: 'white' } }} 
        color='secondary'
        onChange = {handleChange} 
        endadornment={
          <InputAdornment position="end">
            <IconButton edge="end">
              <Search />
            </IconButton>
          </InputAdornment>
        }
        />
        {searchList()}
        </>
    );
  }
  
  export default SearchField;

  
  