import TextField from '@mui/material/TextField';
import {Search} from '@mui/icons-material'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
// import OutlinedInput from '@mui/material/OutlinedInput';
  import Scroll from './Scroll';
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
  const [searchField, setSearchField] = useState("");
    const filteredProduct = details.filter(
      product => {
        return (
          product
          .title
          .toLowerCase()
          .includes(searchField.toLowerCase()) ||
          product
          .quantity
          .toLowerCase()
          .includes(searchField.toLowerCase())
        );
      }
    );
  
    const handleChange = e => {
      setSearchField(e.target.value);
    };
  
    function searchList() {
      return (
        <Scroll>
          <SearchList filteredProdut={filteredProduct} />
        </Scroll>
      );
    }


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

  
  //   return (
  //     <section className="garamond">
        
  //       <div className="pa2">
  //         <input 
  //           className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
  //           type = "search" 
  //           placeholder = "Search People" 
  //           onChange = {handleChange}
  //         />
  //       </div>
  //       {searchList()}
  //     </section>
  //   );
  // }
  
  // export default Search;
  