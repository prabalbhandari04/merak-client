import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

  
  


const ProductDetails = ({ product }) => {

  const image = product.variant[0].image;
  const price = product.variant[0].price;

  return (

    <Card sx={{ maxWidth: 345 }} elevation={0} style={{background: '#181818', color: '#00A7E3'}}>
        <CardMedia
          component="img"
          height="240"
          image={image}
          alt={product.title}
        />
        <CardContent style={{background: '#181818', color: '#00A7E3'}}>
          <Typography gutterBottom variant="body1" component="div">
           <span style={{color: 'gray'}}> Title: </span> {product.name} 
          </Typography>
         
          <Typography variant="body1" color="text.secondary" style={{color: '#00A7E3'}} component="div">
           <span style={{color: 'gray'}}> Description: </span> {product.description}
          </Typography>
          <br></br>
          <Typography variant="body1" color="text.secondary" style={{color: '#00A7E3'}} component="div">
           <span style={{color: 'gray'}}> Price: </span> Rs{price}
          </Typography>
          <br></br>
          <Typography variant="body1" color="text.secondary" style={{color: '#00A7E3'}} component="div">
           <span style={{color: 'gray'}}> Quantity: </span> {product.quantity}pcs
          </Typography>
        </CardContent>

    </Card>
)
};




export default ProductDetails