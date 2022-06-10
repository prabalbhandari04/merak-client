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



  // Filter function and dummy data for now since we don't have a backend field for category
  // var items  = [
  //   {
  //     id: 1,
  //     img: "https://media.gettyimages.com/photos/german-dictator-adolf-hitler-in-military-uniform-picture-id517391954?s=612x612",
  //     name: "Nutty Butter",
  //     quantity: "12",
  //     default_price: "100",
  //     description: 'Yo baraf ho hai',
  //     category : 'Grocery'
  //   },
  //   {
  //     id: 2,
  //     img: "https://cdn.britannica.com/58/129958-050-C3FE2DD2/Adolf-Hitler-1933.jpg",
  //     name: "NutInMe",
  //     quantity: "6",
  //     default_price: "420",
  //     description: 'Yo suddha virgin',
  //     category : 'Grocery'
  //   },
  //   {
  //     id: 3,
  //     img: "https://media.gettyimages.com/photos/adolf-hitler-in-munich-in-the-spring-of-1932-picture-id119505258?s=612x612",
  //     name: "Nutlicks",
  //     quantity: "50",
  //     default_price: "420",
  //     description: 'Yo suddha Olive ho',
  //     category : 'Grocery'
  //   },
  //   {
  //     id: 4,
  //     img: "data:image/jpeg;base64,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",
  //     name: "coco",
  //     quantity: "87",
  //     default_price: "420",
  //     description: 'Zampanos',
  //     category : 'Grocery'
  //   },
  //   {
  //     id: 5,
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOy44ZmJwvSGvem4mxzTPTfOhQG8SZo6kArQ&usqp=CAU",
  //     name: "coconut oil",
  //     quantity: "87",
  //     default_price: "420",
  //     description: 'Zampanos',
  //     category : 'Electronics'
  //   },
  //   {
  //     id: 6,
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_aWN0fM9iSK0Me8XM2zD2tO37jHbNjYpDgg&usqp=CAU",
  //     name: "Motor",
  //     quantity: "87",
  //     default_price: "420",
  //     description: 'Zampanos',
  //     category : 'Electronics'
  //   },
  //   {
  //     id: 7,
  //     img: "https://media.nationalgeographic.org/assets/photos/000/345/34565.jpg",
  //     name: "Transformer",
  //     quantity: "87",
  //     default_price: "420",
  //     description: 'Zampanos',
  //     category : 'Electronics'
  //   },
  // ];

  // filter constants,state and functions
  const [productList, ] = useState([]);

  const [selectedCategory,] = useState();
  const [selectedPrice,] = useState();
  // Add default value on page load
  // useEffect(() => {
  //   setProductList(items);
  // }, []);

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