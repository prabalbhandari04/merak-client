import React from "react";

// // React Component to display individual item
// const Item = ({ title }) => (
//   <div className="item-container">
//     <div>
//       <span className="item-label">Title:</span>
//       {title}
//     </div>
//   </div>
// );

// export default Item;


//Api chaina tesaile data match garna use gareko not necessary
import PropTypes from 'prop-types';

// Material Ui
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import { Box, Typography} from '@mui/material';

import Card from './Card'
import ProductDetails from './ProductDetails';

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



const Item = ({title}) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    
  

  return (
    <>
    <Grid container spacing={3} style={{marginBottom: '30px'}}>
        <Grid onClick={handleOpen} item lg={8}>
          <Card product={title}/>
        </Grid>
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
            <div>
              {title}
            </div>
            </div>
          </Typography>
          
        </Box>
      </Modal>
    </>
  );
}

Item.propTypes = {
    products: PropTypes.array.isRequired
  };
  

export default Item 