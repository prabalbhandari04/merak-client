import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

  
  


const OrderDetails = ({ product }) => {

  // const image = order.variant[0].image;
  // const price = order.variant[0].price;

  return (

    <Card sx={{ maxWidth: 345 }} elevation={0} style={{background: '#181818', color: '#00A7E3'}}>
        {/* <CardMedia
          component="img"
          height="240"
          image={image}
          alt={product.title}
        /> */}

        <CardContent style={{background: '#181818', color: '#00A7E3'}}>
        <Typography gutterBottom variant="body1" component="div" align="center"> 
           {product.name} 
          </Typography>

          <Typography gutterBottom variant="body1" component="div">
           <span style={{color: 'gray'}}> Assigned by: </span> {product.name} 
          </Typography>
         
          <Typography variant="body1" color="text.secondary" style={{color: '#00A7E3'}} component="div">
           <span style={{color: 'gray'}}> Assigned to: </span> {product.description}
          </Typography>
          <br></br>
          <Typography variant="body1" color="text.secondary" style={{color: '#00A7E3'}} component="div">
           <span style={{color: 'gray'}}> Status: </span> Rs
          </Typography>
          <br></br>
          <Typography variant="body1" color="text.secondary" style={{color: '#00A7E3'}} component="div">
           <span style={{color: 'gray'}}> Delivery Location: </span> {product.quantity}pcs
          </Typography>
        </CardContent>

    </Card>
)
};




export default OrderDetails