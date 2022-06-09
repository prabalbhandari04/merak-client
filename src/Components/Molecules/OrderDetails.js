import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import {Grid,Typography} from "@material-ui/core";
import Box from '@mui/material/Box';

import styledComponents from 'styled-components';

const Container = styledComponents.div`
  border: 2px solid black;
  border-radius: 10px;
  max-width: 500;
  display: flex;
  justify-content: space-between;
  padding: 2px 8px;
`
const Image = styledComponents.img`
  width: 100px;

`

const Info = styledComponents.h2`
  font-size: 15px;
  color: white;
`
  


const OrderDetails = ({ order }) => {

  // const image = order.variant[0].image;
  // const price = order.variant[0].price;

  return (

    <Card sx={{ maxWidth: 700 }} elevation={0} style={{background: '#181818', color: '#00A7E3'}}>

        <CardContent style={{background: '#181818', color: '#00A7E3'}}>
        <Typography gutterBottom variant="body1" component="div" align="center"> 
           
          </Typography>

          <Typography gutterBottom variant="body1" component="div">
           <span style={{color: 'gray'}}> Ordered by: </span> {order.ordered_by.full_name} 
          </Typography>
          <br></br>
          <Typography variant="body1" style={{color: '#00A7E3'}} component="div">
           <span style={{color: 'gray'}}> Assigned to: </span> 
            {
              order.assigned_to === null ?
              <p></p>
              :
              <p>{order.assigned_to.full_name}</p>
            }
          </Typography>
          <br></br>
          <Typography variant="body1" style={{color: '#00A7E3'}} component="div">
           <span style={{color: 'gray'}}> Status: </span> {order.status}
          </Typography>
          <br></br>
          <Typography variant="body1" style={{color: '#00A7E3'}} component="div">
           <span style={{color: 'gray'}}> Invoice: </span> {order.invoice}
          </Typography>
          <br></br>
          <Typography variant="body1" style={{color: '#00A7E3'}} component="div">
           <span style={{color: 'gray'}}> Ordered date: </span> {Date(`${order.ordered_date}`)}
          </Typography>
          <br></br>
          <Typography variant="body1" style={{color: '#00A7E3'}} component="div">
           <span style={{color: 'gray'}}> Delivery Location: </span>
          </Typography>
          <br></br>
        </CardContent>


        <Stack direction="row">
          <Box sx={{width:'1rem'}}></Box>
          <Typography variant="body1" style={{color: 'white'}}>Image</Typography>
          <Box sx={{width:'8rem'}}></Box>
          <Typography variant="body1" style={{color: 'white'}}>Product Name</Typography>
          <Box sx={{width:'4rem'}}></Box>
          <Typography variant="body1" style={{color: 'white'}}>Price(RS)</Typography>
          <Box sx={{width:'3rem'}}></Box>
          <Typography variant="body1" style={{color: 'white'}}>Quantity</Typography>
        </Stack>
        <br></br>


        {order.items && order.items.map((order, index) => (
            <Grid  key={index} item >
              <Container>
                <Image src={order.product.image}></Image>


                  <Info>{order.product.sku}</Info>

                  <Info>{order.product.price}</Info>

                <Info>{order.quantity}</Info>

              </Container>
            </Grid>
          ))}

       

    </Card>
)
};




export default OrderDetails