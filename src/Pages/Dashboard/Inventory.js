// import React from 'react'
// import styledComponents from 'styled-components'
// import Card from '../../Components/Organisms/Card/Card'

// const data = [
//   {
//     id: 1,
//     img: "https://imgs.search.brave.com/M3I0djBm_PCYQ44FDVmtJEai1am2wNJu6C6dDj72ODc/rs:fit:1200:1200:1/g:ce/aHR0cDovL2Nkbi5w/aW5jaG9meXVtLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvTmlj/ZS1DcmVhbS02Lmpw/Zw",
//     title: "Icecream",
//     quantity: "12"
//   },
//   {
//     id: 2,
//     img: "https://imgs.search.brave.com/M3I0djBm_PCYQ44FDVmtJEai1am2wNJu6C6dDj72ODc/rs:fit:1200:1200:1/g:ce/aHR0cDovL2Nkbi5w/aW5jaG9meXVtLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvTmlj/ZS1DcmVhbS02Lmpw/Zw",
//     title: "Icecream",
//     quantity: "12"
//   },
// ]

// const CardContainer = styledComponents.div`
//   display: flex;
//   gap: 2rem;
// `

//Component - Orgasm 
import CardList from '../../Components/Organisms/CardList'
import Stats from '../../Components/Organisms/Stats'

// material -ui
import { Container} from '@mui/material';
import TextField from '@mui/material/TextField';
import {Search} from '@mui/icons-material'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';


//Component - Atoms
import Title from '../../Components/Atoms/Title';
import Subtitle from '../../Components/Atoms/Subtitle';
import Add from '../../Components/Atoms/AddButton'

//Styled components
import styledComponents from 'styled-components'

//Dummy Array Data
const delivered = [
  {
    id: 1,
    img: "https://imgs.search.brave.com/M3I0djBm_PCYQ44FDVmtJEai1am2wNJu6C6dDj72ODc/rs:fit:1200:1200:1/g:ce/aHR0cDovL2Nkbi5w/aW5jaG9meXVtLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvTmlj/ZS1DcmVhbS02Lmpw/Zw",
    title: "Icecream",
    quantity: "12"
  },
  {
    id: 2,
    img: "https://shoppinglife.lk/wp-content/uploads/2021/11/olive-oil-1-922x1024.png",
    title: "Extra virgin olive oil",
    quantity: "10"
  },
]


const packed = [
  {
    id: 1,
    img: "https://shoppinglife.lk/wp-content/uploads/2021/11/olive-oil-1-922x1024.png",
    title: "Extra virgin olive oil",
    quantity: "5"
  },
  
]


const stock = [
  {
    id: 1,
    img: "https://imgs.search.brave.com/M3I0djBm_PCYQ44FDVmtJEai1am2wNJu6C6dDj72ODc/rs:fit:1200:1200:1/g:ce/aHR0cDovL2Nkbi5w/aW5jaG9meXVtLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvTmlj/ZS1DcmVhbS02Lmpw/Zw",
    title: "Icecream",
    quantity: "12"
  },
  {
    id: 2,
    img: "https://shoppinglife.lk/wp-content/uploads/2021/11/olive-oil-1-922x1024.png",
    title: "Extra virgin olive oil",
    quantity: "10"
  },
]


const Topbar = styledComponents.div`
  display: flex;
  justify-content: space-between;
`

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

const Inventory = () => {

  return (
    <>
      <Container style={{marginTop: '30px'}}>
        <Topbar>
          <Title title="Inventory" />  
          <TxtField 
            id="outlined-basic" 
            label="Search Item" 
            variant="outlined" 
            sx={{ input: { color: 'white'}}} 
            InputLabelProps={{ style: { color: 'white' } }} 
            color='secondary' 
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <Search />
                </IconButton>
              </InputAdornment>
            }
          />
        </Topbar>

        <Subtitle title="Storage Stats" /> 

        <Stats packed={packed} delivered={delivered} stock={stock}/>

        <Box sx={{ m: '2rem' }} /> 

        <Subtitle title="To be Delivered" />  
       
        <CardList products={delivered} />

        <Subtitle title="To be Packed" />  

        <CardList products={packed} />

      </Container>

      <Add/>
    </>
  )
}

export default Inventory