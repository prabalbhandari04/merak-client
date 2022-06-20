
import React, {useEffect, useState} from 'react';
import {Grid, Typography, Box, Avatar, Card} from "@material-ui/core";
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';


//Redux
import {useSelector, useDispatch} from 'react-redux';
import { loadVariants } from '../redux/actions/productsActions';




export default function Info({product}) {

    
  const dispatch = useDispatch(); //Redux Dispatch
  const {variants} = useSelector(state => state.data); //Redux State


  const [selectedVariant, setSelectedVariant] = useState({
    id: null,
    image: null,
    price: null,
    quantity: null
  });
 


  //Fetching All Products - loadProducts le redux ko -> Action ma (dispatch gareko) Api call gareko cha (GET)
  useEffect(() => {
    dispatch(loadVariants());
  }, [dispatch]);


    
  return (
    <>
    <Grid item sm={5}>

    {selectedVariant.id === null ? 
            <>
            {variants.map((obj) => {


                if (product.id === obj.product && obj.is_default === true) { 
                    return (<span key={obj.id}><CardMedia
                        component="img"
                        height="240"
                        image={obj.image}
                        alt=""
                      /></span>)
                }  else {
                    return null
                }

                })}
            </>
     : 
        <span><CardMedia
        component="img"
        height="240"
        image={selectedVariant.image}
        alt=""
      /></span>
    }
       
    </Grid>


        <Grid item sm={6} style={{marginLeft: '20px'}}>
            <Grid container direction="column" style={{height: '100%'}}>
                <Typography variant="h5" style={{color: '#00A7E3'}}>
                    {product.name}
                </Typography>

                
                <Box mt={2}>
                    <Typography variant="body1"  style={{color: '#00A7E3'}} component="div">
                    
                        <span><span style={{color: 'gray'}}> Description: </span> {product.description}</span>
                    </Typography>

                    <br></br>

                {selectedVariant.id === null ? 
                    <Typography variant="body1"  style={{color: '#00A7E3'}} component="div">
                {variants.map((obj, index) => {
                    if (product.id === obj.product && obj.is_default === true) { 
                        return <span key={index}><span style={{color: 'gray'}}> Price: </span> Rs {obj.price}</span>
                    }  else {
                        return null   
                    }
        
                })}
                </Typography>

                : 

                <Typography variant="body1"  style={{color: '#00A7E3'}} component="div">
                    <span style={{color: 'gray'}}> Price: </span> Rs {selectedVariant.price}    
                </Typography>

                }






                <br></br>

                {selectedVariant.id === null ? 
                <Typography variant="body1" style={{color: '#00A7E3'}} component="div">
                {variants.map((obj, index) => {
                    if (product.id === obj.product && obj.is_default === true) { 
                        return <span key={index}><span style={{color: 'gray'}}> Quantity: </span> {obj.quantity} pcs</span>
                    }  else {
                        return null   
                    }
        
                })}
                </Typography>

                : 

                <Typography variant="body1" style={{color: '#00A7E3'}} component="div">
                        <span style={{color: 'gray'}}> Quantity: </span> {selectedVariant.quantity} pcs
                </Typography>
                
                }

                <br></br>

                    {variants.map((obj, index) => {

                        if (product.id === obj.product) { 
                        
                        
                           


                        return (
                        <span key={obj.id} style={{display: "inline-block", cursor: 'pointer'}} onClick={() => setSelectedVariant({id: obj.id,
                            image: obj.image,
                            price: obj.price,
                            quantity: obj.quantity})}> 
                               
                               
                                <Chip
                                    style={{cursor: 'pointer', color: 'white', marginRight: '10px'}}
                                    avatar={<Avatar alt="" src={obj.image} />}
                                    label={obj.field[0].name}
                                    variant="outlined"
                                />
                        </span>
                        )
                        }  else {
                        return null
                        }

                        })}
                        
                </Box>
                
            </Grid>
        </Grid>





    </>
  )
}
