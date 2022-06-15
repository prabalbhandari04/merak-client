import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Typography} from "@material-ui/core";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from "@mui/material/Button";


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import styledComponents from 'styled-components';

import {useSelector, useDispatch} from 'react-redux';
import {putOrders} from '../../Redux/Actions/ordersActions';


const Image = styledComponents.img`
  width: 100px;

`

const OrderDetails = ( {order} ) => {
  const {users} = useSelector(state => state.data2);
 const [itms, setItms] = React.useState(order.items)

 console.log(order)
  
  const [assignto, setAssignto] = React.useState(order.assigned_to.pk);
  const [change, setChange] = React.useState(false)
  const [newitems, setNewitems] = React.useState([])

  const dispatch = useDispatch();
  console.log(assignto)

  const handleRemove = (id) =>{
    const itm = order.items
    const idd = itm.findIndex((prd)=>{if(prd.product.id === id){return prd}})
    itm.splice(idd, 1)
    // console.log(itm)
    const items = []

    itm.forEach((ob)=>{
      items.push({"product": ob.product.id, "quantity": ob.quantity})
    })
    setChange(true)
    setItms(itm)
    setNewitems(items)
  }


  const handleUpdate = ()=>{
    dispatch(putOrders(order.invoice, 
      {
        "items": newitems,
        "ordered_by": order.ordered_by.pk,
        "assigned_to": assignto
      }
    ))
  }

  return (

    <Card sx={{ maxWidth: 900 }} elevation={0} style={{background: '#181818', color: '#00A7E3'}}>


        <CardContent style={{background: '#181818', color: '#00A7E3'}}>
        <Typography gutterBottom variant="body1" component="div" align="center"> 
           
          </Typography>

          <Typography gutterBottom variant="body1" component="div">
           <span style={{color: 'gray'}}> Ordered by: </span> {order.ordered_by.full_name} 

          </Typography>
          <br></br>
          <Typography variant="body1" style={{color: '#00A7E3'}} component="div">
           <span style={{color: 'gray'}}> Assigned to: </span> 
           <FormControl variant="standard" sx={{ m: 1, minWidth: 275, style: { color: 'black', background: 'white' } }} size="small">
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value= {assignto}
                label="Assigned to"
                style={{ background: 'white'}}
                onChange={(e)=>{setAssignto(e.target.value); }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                {users?.map(option=> {
                  return(
                    <MenuItem key={option.display_name} value={option.id}>
                    {option.display_name ?? option.value}
                    </MenuItem>
                  );
                })}
                
              </Select>
            </FormControl>

            
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


        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="right">Product</TableCell>
                <TableCell align="right">Price&nbsp;(Rs)</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {itms.map((ordered) => (
                <TableRow
                  key={ordered.product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Image src={ordered.product.image}></Image>
                  </TableCell>
                  <TableCell align="right">{ordered.product.sku}</TableCell>
                  <TableCell align="right">{ordered.product.price}</TableCell>
                  <TableCell align="right">{ordered.quantity}</TableCell>
                  <TableCell align="right">
                  <Button onClick={()=>{handleRemove(ordered.product.id)}} disabled={order.status === "CANCELLED"? 'boolean': false}>
                    <RemoveIcon style={{color: 'red'}}/>
                  </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Button style={{color: 'white' }} variant="contained" autoFocus onClick={handleUpdate} disabled={change === false? 'boolean': false}>
           Update
        </Button>


    </Card>
)
};




export default OrderDetails