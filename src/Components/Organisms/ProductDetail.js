import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Link as RouterLink } from 'react-router-dom';
// Material Ui Components
import { Box,Button, Link, Card as Cards, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  height: '50%',
  width: '50%',
  borderRadius : 5,
  p: 4,
};



const ProductImgStyle = styled('img')({
    top: 50,
    left:430,
    width: '40%',
    height: '70%',
    objectFit: 'cover',
    position: 'absolute',

  });


const ProdDetail = [
    {
      id: 1,
      img: "https://imgs.search.brave.com/M3I0djBm_PCYQ44FDVmtJEai1am2wNJu6C6dDj72ODc/rs:fit:1200:1200:1/g:ce/aHR0cDovL2Nkbi5w/aW5jaG9meXVtLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvTmlj/ZS1DcmVhbS02Lmpw/Zw",
      title: "Icecream",
      quantity: "12",
      description: "Yo chain baraf ho guliyo huncha.Chocolate wala.",
      price: "100",
      stock : 10,
    }
  ]

  const listItems = ProdDetail.map(ProdDetails =>
    <div>
        <ProductImgStyle alt={ProdDetails.title} src={ProdDetails.img} />
        <Stack spacing={2} sx={{ p: 1}} style={{background: 'black',position:'absolute',top:50,left:10}} >
            <Typography variant="subtitle1" style={{color:'gray'}} noWrap>
              <h1>{ProdDetails.title}</h1>
              <span style={{color: '#00A7E3'}}>{ProdDetails.description}</span>
              <br></br>
              <span style={{color: '#00A7E3'}}>Price: {ProdDetails.price} Nrs</span>
              <br></br>
              <span style={{color: '#00A7E3'}}>Stock: {ProdDetails.stock} Pcs</span>
            </Typography>
        </Stack>

        </div>
    );

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      
      <Button onClick={handleOpen}>View Product</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div>
            { listItems }
            </div>
          </Typography>
          
        </Box>
      </Modal>
    </div>
  );
}
