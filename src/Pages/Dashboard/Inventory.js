//Component - Organisms 
import CardList from '../../Components/Organisms/CardList'
import Stats from '../../Components/Organisms/Stats'
import TopBar from '../../Components/Organisms/TopBar'

// material -ui
import { Container} from '@mui/material';
import Box from '@mui/material/Box';

//Component - Atoms
import Subtitle from '../../Components/Atoms/Subtitle';
import AddItem from '../../Components/Molecules/AddItem'
import AddVar from '../../Components/Molecules/AddVar'



const Inventory = () => {

  return (
    <>
      <Container style={{marginTop: '30px'}}>

        <TopBar />
        

        <Subtitle title="Storage Stats" /> 

        <Stats/>

        <Box sx={{ m: '2rem' }} /> 

        <Subtitle title="To be Delivered" />

        <Box sx={{ m: '2rem' }} />   
       
        <CardList/>

        <Subtitle title="To be Packed" />  

        <Box sx={{ m: '2rem' }} /> 

        <CardList/>

      </Container>

      <AddVar />

      <AddItem/>
    </>
  )
}

export default Inventory