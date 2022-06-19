import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
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

import styledComponents from 'styled-components';

import {useSelector, useDispatch} from 'react-redux';
import {putOrders} from '../../Redux/Actions/ordersActions';


const Image = styledComponents.img`
  width: 100px;

`
const Stf = styledComponents.div`
  display: flex;
  flex-direction: column;
`

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

    <Card sx={{ maxWidth: 900 }} elevation={0} style={{background: '#181818', color: '#00A7E3'}}>


        <CardContent style={{background: '#181818', color: '#00A7E3'}}>
        <Typography gutterBottom variant="body1" component="div" align="center"> 
           
          </Typography>

          <Typography gutterBottom variant="body1" component="div">
           <span style={{color: 'gray'}}> Ordered by: </span> 
           {
              order.ordered_by === null ?
              <p></p>
              :
              <p>
                {order.ordered_by.full_name}
              </p>
            }
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
                onChange={(e)=>{setAssignto(e.target.value); setChange(true);}}
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
                  <TableCell align="right">
                    <div style={{display: 'flex', justifyContent:'right'}}>
                      <TextField
                        name="Quantity"
                        inputProps={{ min: 1, max: 10 }}
                        sx={{ maxWidth:"50px", input: { color: 'black', background: 'white', padding:'3px', margin: '4px'}}} 
                        variant="filled"
                        value={ordered.quantity}
                        disabled
                      />
                      <Stf>
                        <Button onClick={()=>{plus(ordered)}}>
                          <MdKeyboardArrowUp />
                        </Button>
                        <Button onClick={()=>{minus(ordered)}}>
                          <MdKeyboardArrowUp style={{transform: 'rotate(180deg)'}} />
                        </Button>
                      </Stf>
                    </div>
                  </TableCell>
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