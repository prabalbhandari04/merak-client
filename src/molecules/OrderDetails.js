import React from 'react'
import Card from '@mui/material/Card';
import {Grid, Box, Avatar} from "@material-ui/core";
import CardContent from '@mui/material/CardContent';
import {Typography} from "@material-ui/core";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import { MdKeyboardArrowUp } from 'react-icons/md';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



import {useSelector, useDispatch} from 'react-redux';
import {putOrders} from '../redux/actions/ordersActions';



const OrderDetails = ( {order} ) => {
  const {users} = useSelector(state => state.data2);
  const [itms, setItms] = React.useState(order.items)
  
  const [assignto, setAssignto] = React.useState(()=>{
    if(order.assigned_to){
       return order.assigned_to.pk
    }

  });
  const [change, setChange] = React.useState(false)

  const dispatch = useDispatch();

  const plus = (ord)=>{
    const dum = itms
    const idd = dum.findIndex((prd)=>{if(prd === ord){return prd}})
    if(ord.quantity < ord.product.quantity){
      ord.quantity = ord.quantity + 1

      dum.splice(idd, 1, ord)
      setItms(dum)
      setChange(true)
    }
  }
  
  const minus = (ord)=>{
    const dum = itms
    const idd = dum.findIndex((prd)=>{if(prd === ord){return prd}})
    if(ord.quantity > 1){
      ord.quantity = ord.quantity - 1

      dum.splice(idd, 1, ord)
      setItms(dum)
      setChange(true)
    }
  }

  const handleRemove = (id) =>{
    const itm = order.items
    const idd = itm.findIndex((prd)=>{if(prd.product.id === id){return prd}})
    itm.splice(idd, 1)
    
    setChange(true)
    setItms(itm)
  }


  const handleUpdate = async ()=>{
    const itm = order.items
    const items = []
    await itm.forEach((ob)=>{
      items.push({"product": ob.product.id, "quantity": ob.quantity})
    })

    dispatch(putOrders(order.invoice, 
      {
        "items": items,
        "ordered_by": order.ordered_by.pk,
        "assigned_to": assignto
      }
    ))
  }

  return (

<>
<Grid style={{ maxWidth: 450, padding: "5px 5px", margin: "0 12px"}}>
         
              

                
                <Box mt={2}>
                    <Typography variant="body1"  style={{color: '#00A7E3'}} component="div">
                    
                        <span><span style={{color: 'gray'}}> Ordered by: </span> {
                                                order.ordered_by === null ?
                                                <span></span>
                                                :
                                                <span>
                                                  {order.ordered_by.name}
                                                </span>
                                              }</span>
                    </Typography>

                    <br></br>
                        

                    <Typography variant="body1"  style={{color: '#00A7E3'}} component="div">
                    
                    <span><span style={{color: 'gray'}}> Assigned to: </span> {
                                            order.assigned_to === null ?
                                            <span></span>
                                            :
                                            <span>
                                              {order.assigned_to.full_name}
                                            </span>
                                          }</span>
                    </Typography>

                    <br></br>

                    <Typography variant="body1" style={{color: '#00A7E3'}} component="div">
                      <span style={{color: 'gray'}}> Status: </span> {order.status}
                     </Typography>

                     <br></br>

                     <Typography variant="body1" style={{color: '#00A7E3'}} component="div">
                    <span style={{color: 'gray'}}> Ordered date: </span> {Date(`${order.ordered_date}`)}
                    </Typography>
                    <br></br>
                  


                </Box>

                <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="right">Product</TableCell>
                <TableCell align="right">Price&nbsp;(Rs)</TableCell>
                <TableCell align="right">Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {itms.map((ordered) => (
                <TableRow
                  key={ordered.product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                  <Avatar  src={ordered.product.image} style={{height: '100px', width: '100px', borderStyle: 'dotted', borderColor: 'gray' }}/>
                  </TableCell>
                  <TableCell align="right">{ordered.product.sku}</TableCell>
                  <TableCell align="right">{ordered.product.price}</TableCell>
                  <TableCell align="right">
                  {ordered.quantity}
                  </TableCell>
               
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
                
            </Grid>
       




       



    </>
)
};




export default OrderDetails