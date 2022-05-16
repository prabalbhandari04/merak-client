import React from 'react';

//Component - Molecule
//import AddProduct from '../../Components/Molecules/AddProduct';

//Component - Organism 
import CardList from '../../Components/Organisms/CardList'

// material -ui
import { Container} from '@mui/material';

//Component - Atoms
import Title from '../../Components/Atoms/Title';
import Subtitle from '../../Components/Atoms/Subtitle';


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



const Inventory = () => {

  return (
    <>
      <Container style={{marginTop: '30px'}}>

          <Title title="Inventory" />  

          <Subtitle title="To be Delivered" />  
        
          <CardList products={delivered} />

          <Subtitle title="To be Packed" />  

          <CardList products={packed} />
      </Container>
      {/* <AddProduct/> */}
    </>
  )
}

export default Inventory