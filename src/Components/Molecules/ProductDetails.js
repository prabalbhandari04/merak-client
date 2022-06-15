
import React, {useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

  
  

//Redux
import {useSelector, useDispatch} from 'react-redux';
import { loadVariants } from '../../Redux/Actions/productsActions';


const ProductDetails = ({ product }) => { 


  const dispatch = useDispatch(); //Redux Dispatch
  const {variants} = useSelector(state => state.data); //Redux State
 

  //Fetching All Products - loadProducts le redux ko -> Action ma (dispatch gareko) Api call gareko cha (GET)
  useEffect(() => {
    dispatch(loadVariants());
  }, [dispatch]);


  return (

    <Card sx={{ maxWidth: 345 }} elevation={0} style={{background: '#181818', color: '#00A7E3'}}>
       {variants.map((obj, index) => {

        if (product.id === obj.product) { 
          return (<span key={index}><CardMedia
          component="img"
          height="240"
          image={obj.image}
          alt={product.title}
        /></span>)
        }  else {
          return null
        }

    })}
        <br></br>
        <CardContent style={{background: '#181818', color: '#00A7E3'}}>
          <Typography gutterBottom variant="body1" component="div">
           <span style={{color: 'gray'}}> Title: </span> {product.name} 
          </Typography>
          <br></br>
          <Typography variant="body1" color="text.secondary" style={{color: '#00A7E3'}} component="div">
           <span style={{color: 'gray'}}> Description: </span> {product.description}
          </Typography>
          <br></br>
          <Typography variant="body1" color="text.secondary" style={{color: '#00A7E3'}} component="div">
          {variants.map((obj, index) => {
              if (product.id === obj.product) { 
                return <span key={index}><span style={{color: 'gray'}}> Price: </span> Rs {obj.price}</span>
              }  else {
                return null   
              }
   
          })}
          </Typography>
          <br></br>
          <Typography variant="body1" color="text.secondary" style={{color: '#00A7E3'}} component="div">
          {variants.map((obj, index) => {
              if (product.id === obj.product) { 
                return <span key={index}><span style={{color: 'gray'}}> Quantity: </span> {obj.quantity} pcs</span>
              }  else {
                return null   
              }
   
          })}
          </Typography>
        </CardContent>

    </Card>
)
};




export default ProductDetails