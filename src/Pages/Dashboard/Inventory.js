import React, {useEffect, useState, useMemo} from 'react';
import styledComponents from 'styled-components'

//Component - Organisms 
import CardList from '../../Components/Organisms/CardList'
import Stats from '../../Components/Organisms/Stats'
import CardFilter from '../../Components/Organisms/CardFilter'

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


const Inventory = () => {


  // filter constants,state and functions
  const [productList, ] = useState([]);

  const [selectedCategory,] = useState();
  const [selectedPrice,] = useState();

  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return productList;
    }
    return productList.filter((item) => item.category === selectedCategory);
  }

  // Function to get filtered list
  function getFilteredListPrice() {
    // Avoid filter when selectedCategory is null
    if (!selectedPrice) {
      return productList;
    }
    return productList.filter((item) => item.price === selectedPrice);
  }

  function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

  // Avoid duplicate function calls with useMemo
  const filteredLists = useMemo(getFilteredList, [selectedCategory, productList]);
  const filteredListPrice = useMemo(getFilteredListPrice, [selectedPrice, productList]);
  
  // const totalFilter = arrayUnique(filteredLists.concat(filteredListPrice));

  const temp = filteredLists.concat(filteredListPrice)
  const temp2 = arrayUnique(temp)
  const filteredList=  temp2;
  
  // function handleCategoryChange(event) {
  //   setSelectedCategory(event.target.value);
  // }

  // function handlePriceChange(event) {
  //   setSelectedPrice(event.target.value);
  // }

  // Filter code ends 



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

        <Title title="Inventory" />  

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

      {/* Filter Component */}
      {/* <div className="app">
            <div className="filter-container">
              <div>Filter by Category:</div>
              <div>
                <select
                  name="category-list"
                  id="category-list"
                  onChange={handleCategoryChange}
                >
                  <option value="">All</option>
                  <option value="Grocery">Grocery</option>
                  <option value="Electronics">Electronics</option>
                </select>
              </div>
              <div>
          <select
              name="price-list"
              id="price-list"
              onChange={handlePriceChange}
              style = {{marginLeft: '10px', marginRight: '10px', marginTop: '10px', marginBottom: '10px'}}
            >
              <option value="">All</option>
              <option value="500">Rs 500</option>
              <option value="1000">Rs 1000</option>
              <option value="1500">Rs 1000-1500</option>
            </select>
          </div>
            </div>
          </div> */}

      </Topbar>

        

        {/* Body Content */}


        <Subtitle title="Storage Stats" /> 

        <Stats/>

        <Box sx={{ m: '2rem' }} /> 

        <Subtitle title="To be Delivered" />

        <Box sx={{ m: '2rem' }} />   

        <CardFilter filteredList = {filteredList}/>     
       
        <CardList filteredProduct={filteredProduct}/>
 
        <Subtitle title="To be Packed" />  

        <Box sx={{ m: '2rem' }} /> 

        <CardList filteredProduct={filteredProduct}/>

      </Container>

      <AddItem/>
    </>
  )
}

export default Inventory