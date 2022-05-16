import * as React from 'react';

//Api chaina tesaile data match garna use gareko not necessary
import PropTypes from 'prop-types';

// Material Ui
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import { Box, Typography} from '@mui/material';

import Card from '../Molecules/Card'
import ProductDetails from '../Molecules/ProductDetails';

// ----------------------------------------------------------------------




const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  height: '50%',
  width: '50%',
  borderRadius : 5,
  p: 4,
};



const CardList = ({ products }) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    


  return (
    <>
    <Grid container spacing={3} style={{marginBottom: '30px'}}>

      {products.map((product) => (
        <Grid onClick={handleOpen} key={product.id} item xs={12} sm={6} md={3}>
          <Card product={product}/>
        </Grid>
      ))}

    </Grid>


    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div>
            {products.map((product) => (
            <div key={product.id}>
              <ProductDetails product={product}/>
            </div>
          ))}
            
            </div>
          </Typography>
          
        </Box>
      </Modal>
    </>
  );
}

CardList.propTypes = {
    products: PropTypes.array.isRequired
  };
  

export default CardList 