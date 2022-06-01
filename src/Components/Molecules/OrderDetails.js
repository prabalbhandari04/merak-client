import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

  
  


const OrderDetails = ({ order }) => {

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
           
          </Typography>

          <Typography gutterBottom variant="body1" component="div">
           <span style={{color: 'gray'}}> Ordered by: </span> {order.ordered_by.full_name} 
          </Typography>
         
          <Typography variant="body1" color="text.secondary" style={{color: '#00A7E3'}} component="div">
           <span style={{color: 'gray'}}> Assigned to: </span> {order.assigned_to.full_name}
          </Typography>
          <br></br>
          <Typography variant="body1" color="text.secondary" style={{color: '#00A7E3'}} component="div">
           <span style={{color: 'gray'}}> Status: </span> {order.status}
          </Typography>
          <br></br>
          <Typography variant="body1" color="text.secondary" style={{color: '#00A7E3'}} component="div">
           <span style={{color: 'gray'}}> Delivery Location: </span>
          </Typography>
        </CardContent>

    </Card>
)
};




export default OrderDetails