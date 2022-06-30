import React, { useState, useEffect } from "react";

import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

//--------------Icons------------------------
import AddIcon from "@mui/icons-material/Add";
import AddTaskIcon from '@mui/icons-material/AddTask';
import SettingsIcon from '@mui/icons-material/Settings';
import ArticleIcon from '@mui/icons-material/Article';

//---------------Mui Dialog -----------------
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {Grid,Typography, Avatar} from "@material-ui/core";
import TextField from '@mui/material/TextField';
//-------------------------------------------

//-------------- Mui muliple select ---------------

import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

//-----------------------------------------------

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {addProducts, loadProducts, addVariants, loadVariantsField, addVariantsField} from '../redux/actions/productsActions';
//------------------------------------------------------------------------------------------------




//Variant select styling
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


//Form step
function getSteps() {
  return [
    "Product",
    "Variant",
  ];
}




const AddItem = () => {

  //Redux

  let dispatch = useDispatch();
  const {products, variantsField} = useSelector(state => state.data); //Redux State
  
  //Fetching All Products - loadProducts le redux ko -> Action ma (dispatch gareko) Api call gareko cha (GET)
  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadVariantsField());
  }, [dispatch]);

  //------------------------------------------------------------------------------------------------

  //States

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  //----------------------
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);


  const [productName, setProductName] = useState('');
  const [productVariant, setProductVariant] = useState([]);


  const [state, setState] = useState({
    name: '',
    description: '',
  });


  const [state3, setState3] = useState({
    name2: '',
    value2: '',
  });


  const [state2, setState2] = useState({
    price: '',
    quantity: '',
    image: null,
    is_default: false,
    field: productVariant,
    product: productName,
  });

  const [imgPre, setImgPre] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);


  const {name,  description} = state;
  const {price, quantity, image, is_default} = state2;
  const {name2, value2} = state3;




  //Form handling input change or any updates

  const handleChangeName = (event) => {
    setProductName(event.target.value);
  };

  const handleChangeVariant = (event) => {
    setProductVariant( typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value,);
  }

  

  const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value});
  }

  const handleInputChange2 = (e) => {
    let {name, value} = e.target;
    setState2({ price: price, quantity: quantity, image: image, is_default: false, field: productVariant, product: productName, [name]: value});
  }


  const handleInputChange3 = (e) => {
    let {name, value} = e.target;
    setState3({...state3, [name]: value});
  }


//Changing state for image
  const handleInputChangeImage = (e) => {
   
    const img = e.target.files[0];

    setImgPre(img.name)
    setImgPreview(URL.createObjectURL(img));

  
    setState2({...state2, image: img});
  }

//Changing state for default variant
  const handleChangeDefault = (event) => {
    setState2({...state2, is_default: event.target.checked});
  };


//--------------------------------------------------------------------------------------------------------------


//Form handling OpenClose 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpen2(false);
    setOpen3(false);

    setActiveStep(0);
    setState({
      name: '',
      description: '',
    });

    setState2({
      price: '',
      quantity: '',
      image: null,
    });

    setProductVariant([]);

    setProductName('');

    setImgPre(null);

    setImgPreview(null);

    setState3({
      name2: '',
      value2: '',
    })

  };


  const handleClose3 = () => {
    setOpen3(false);
  }

//-------------------------------------------------------------------------------------------------------

  
//Form Submiting Data

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProducts(state));

    setActiveStep(activeStep + 1);
  }

  const handleSubmit2 = (e) => {

    e.preventDefault();

    
    let form_data = new FormData();
    form_data.append('price', price);
    form_data.append('quantity', quantity);
    form_data.append('image', image);
    form_data.append('is_default', is_default);
    productVariant.forEach(value => form_data.append('field', value.split('/')[0])) //multiple variant
    form_data.append('product', productName);

  

    dispatch(addVariants(form_data));
    
    handleClose()

  }


  const handleSubmit3 = (e) => {
    e.preventDefault();

    let field_data = {name: name2, field_name: name2, value: value2};


    dispatch(addVariantsField(field_data));
    
    setOpen3(false);

    

    setState3({
      name2: '',
      value2: '',
    })
  }


//--------------------------------------------------------------------------------------------------------------


//Stepper Form Content and Steps
  
function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
       <Grid style={{ maxWidth: 450, padding: "5px 5px", margin: "0 auto" }}>
        
        <Typography variant="body2" style={{color: 'white'}} component="p" gutterBottom>
          
      </Typography> 

<>
        <form id="product-form-id" >
          <Grid container spacing={1} style={{color: 'white'}}>
            <Grid item xs={12}>
              <TextField sx={{ input: { color: 'black', background: 'white' } }} name="name" InputLabelProps={{ style: { color: 'black' } }}  value={name} onChange={handleInputChange} placeholder="Product Name" label="Product Name" variant="filled" fullWidth required autoComplete='off'/>
            </Grid>

         
           
            <Grid item xs={12}>
              <TextField InputProps={{ style: { color: 'black', background: 'white' } }} name="description" InputLabelProps={{ style: { color: 'black' } }} value={description} onChange={handleInputChange}  label="Description" multiline rows={4} placeholder="Description" variant="filled" fullWidth required autoComplete='off'/>
            </Grid>

            
          </Grid>
        </form>
        </>
     
    </Grid>
        </>
      );

    case 1:
      return (
        <>
          <Grid style={{ maxWidth: 450, padding: "5px 5px", margin: "0 auto" }}>
        
        <Typography variant="body2"  component="p" gutterBottom>
          
      </Typography> 
<>
        <form id="variant-form-id" >
          <Grid container spacing={1} style={{color: 'white'}}>

                <Grid item xs={12}>
                    
                    <FormControl fullWidth variant="filled" required name="product" >
                      <InputLabel id="product-select-label" style={{color: 'black'}}>Product</InputLabel>
                      <Select
                        labelId="product-select-label"
                        id="product-select"
                        value={productName}
                        label="Product"
                        onChange={handleChangeName}
                        style={{background:'white', color: 'black'}}
                      >
                        {products.map(val => {
                                  return (
                                    <MenuItem key={val.uuid} value={val.id} style={{textTransform: 'capitalize'}}>
                                      {val.name}
                                    </MenuItem>
                                  )
                        })}
                      </Select>
                    </FormControl>
                 
                </Grid>


                <Grid item xs={12}>


                  <FormControl fullWidth required>
                        <InputLabel id="multiple-chip-label" style={{color: 'black'}}>Variant</InputLabel>
                        <Select
                          labelId="multiple-chip-label"
                          id="multiple-chip"
                          style={{background:'white', color: 'black'}}
                          multiple
                          value={productVariant}
                          onChange={handleChangeVariant}
                          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                          renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                              {productVariant.map((value) => (
                                <Chip style={{textTransform: 'capitalize', background: 'gray'}} key={value} label={value.split('/')[1]} />
                              ))}
                            </Box>
                          )}
                          MenuProps={MenuProps}
                        >
                          {variantsField.map((val) => (
                            <MenuItem
                              key={val.id}
                              value={`${val.id}/${val.name} (${val.value})`}
                              style={{textTransform: 'capitalize'}}
                            >
                              {val.name} ({val.value})
                            </MenuItem>
                          ))}
                          <span style={{display: 'flex', justifyContent: 'center'}} >
                          <Button onClick={handleClickOpen3}> <AddIcon /> &nbsp; Add Variant</Button>
                          </span>
                        </Select>
                      </FormControl>
                </Grid>



                <Grid xs={12} sm={6} item>
                    <TextField sx={{ input: { color: 'black', background: 'white' } }} name="price" value={price} onChange={handleInputChange2} InputLabelProps={{ style: { color: 'black' } }} type="number" InputProps={{ inputProps: { min: 1} }} placeholder="Price" label="Price" variant="filled" fullWidth required autoComplete='off'/>
                </Grid>

                <Grid xs={12} sm={6} item>
                    <TextField sx={{ input: { color: 'black', background: 'white' } }} name="quantity" value={quantity} onChange={handleInputChange2} InputLabelProps={{ style: { color: 'black' } }}  type="number" InputProps={{ inputProps: { min: 0} }} placeholder="Quantity" label="Quantity" variant="filled" fullWidth required autoComplete='off'/>
                </Grid> 

                

                <Grid xs={12} item >

                <FormControlLabel
                    control={
                      <Checkbox
                      style={{color: 'white'}}
                    onChange={(e) => handleChangeDefault(e)}
                    inputProps={{ 'aria-label': 'controlled' }}
                    
                  /> 
                    }
                    label="is default" 
                  />
                
                  </Grid>


                  <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                {imgPreview === null ? null : <Avatar  src={imgPreview} style={{ height: '100px', width: '100px', borderStyle: 'dotted', borderColor: 'gray' }}/>}
                </Grid>
                
                <Grid item xs={12} >
                 
                    <Button component="label" style={{color: 'white', background: '#3f51b5'}}>
                    <AddIcon /> &nbsp;Image
                        <input accept="image/*" hidden type="file"  onChange={(e) => handleInputChangeImage(e)} />
                    </Button>
                    <span style={{marginLeft: '10px', color: 'white'}}>{imgPre === null ? <span>Select an image</span> : imgPre}</span>
                </Grid> 

               
            
            
          </Grid>
        </form>
        </>
    </Grid>
        </>
      );


    default:
      return "unknown step";
  }
}


//----------------------------------------------------------------------------------------------------------------


  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
          {"Add Product"}
        </DialogTitle>

       


        <DialogContent>

    
          <form>{getStepContent(activeStep)}</form>
        
           </DialogContent>



        <DialogActions>
       
         
          <Button onClick={handleClose} style={{color: 'white'}}>Cancel</Button>

         
         {activeStep === 1 ?
          <Button onClick={handleSubmit2} form="variant-form-id" style={{color: '#00A7E3'}} autoFocus>
           Save
          </Button>
          : 
          <Button onClick={handleSubmit}  form="product-form-id1" style={{color: '#00A7E3'}} autoFocus >
           Next
          </Button>}

        </DialogActions>
      </Dialog>


      {/* Add Variant for Existing Product */}


      <Dialog
        open={open2}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add Variant"}
        </DialogTitle>

       


        <DialogContent >


        <Grid style={{ maxWidth: 450, padding: "5px 5px", margin: "0 auto" }}>
        
        <Typography variant="body2" style={{color: 'white'}} component="p" gutterBottom>
          
      </Typography> 
<>
        <form id="product-form-id" onSubmit={handleSubmit2}>
          <Grid container spacing={1} style={{color: 'white'}}>

                <Grid item xs={12}>
                    
                    <FormControl fullWidth variant="filled" required name="product" >
                      <InputLabel id="product-select-label" style={{color: 'black'}}>Product</InputLabel>
                      <Select
                        labelId="product-select-label"
                        id="product-select"
                        value={productName}
                        label="Product"
                        onChange={handleChangeName}
                        style={{background:'white', color: 'black'}}
                      >
                        {products.map(val => {
                                  return (
                                    <MenuItem key={val.uuid} value={val.id} style={{textTransform: 'capitalize'}}>
                                      {val.name}
                                    </MenuItem>
                                  )
                        })}
                      </Select>
                    </FormControl>
                 
                </Grid>


                <Grid item xs={12}>


                  <FormControl fullWidth required>
                        <InputLabel id="multiple-chip-label" style={{color: 'black'}}>Variant</InputLabel>
                        <Select
                          labelId="multiple-chip-label"
                          id="multiple-chip"
                          style={{background:'white', color: 'black'}}
                          multiple
                          value={productVariant}
                          onChange={handleChangeVariant}
                          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                          renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                              {productVariant.map((value) => (
                                <Chip style={{textTransform: 'capitalize', background: 'gray'}} key={value} label={value.split('/')[1]} />
                              ))}
                            </Box>
                          )}
                          MenuProps={MenuProps}
                        >
                          {variantsField.map((val) => (
                            <MenuItem
                              key={val.id}
                              value={`${val.id}/${val.name} (${val.value})`}
                              style={{textTransform: 'capitalize'}}
                            >
                              {val.name} ({val.value})
                            </MenuItem>
                          ))}
                          <span style={{display: 'flex', justifyContent: 'center'}} >
                          <Button onClick={handleClickOpen3}> <AddIcon /> &nbsp; Add Variant</Button>
                          </span>
                        </Select>
                      </FormControl>
                </Grid>



                <Grid xs={12} sm={6} item>
                    <TextField sx={{ input: { color: 'black', background: 'white' } }} name="price" value={price} onChange={handleInputChange2} InputLabelProps={{ style: { color: 'black' } }} type="number" InputProps={{ inputProps: { min: 1} }}  placeholder="Price" label="Price" variant="filled" fullWidth required autoComplete='off' />
                </Grid>

                <Grid xs={12} sm={6} item>
                    <TextField sx={{ input: { color: 'black', background: 'white' } }} name="quantity" value={quantity} onChange={handleInputChange2} InputLabelProps={{ style: { color: 'black' } }}  type="number" InputProps={{ inputProps: { min: 0} }} placeholder="Quantity" label="Quantity" variant="filled" fullWidth required autoComplete='off'/>
                </Grid> 

              


                <Grid item xs={12} style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                {imgPreview === null ? null : <Avatar  src={imgPreview} style={{ height: '100px', width: '100px', borderStyle: 'dotted', borderColor: 'gray' }}/>}
                </Grid>

                
                <Grid item sx={{justifyContent: 'center', alignItems: 'center'}}>
                 
                    <Button component="label" style={{color: 'white', background: '#3f51b5'}}>
                    <AddIcon /> &nbsp;Image
                        <input accept="image/*" hidden type="file"  onChange={(e) => handleInputChangeImage(e)} />
                    </Button>
                    <span style={{marginLeft: '10px', color: 'white'}}>{imgPre === null ? <span>Select an image</span> : imgPre}</span>
                    
                </Grid> 
            
            
          </Grid>
        </form>
        </>
    </Grid>

        
        
        </DialogContent>



        <DialogActions>
       
         
          <Button onClick={handleClose} style={{color: 'white'}}>Cancel</Button>

         
        
          <Button type="submit" form="product-form-id" style={{color: '#00A7E3'}} autoFocus>
           Save
          </Button>
          

        </DialogActions>
      </Dialog>



          {/* Add variant field */}



      <Dialog
        open={open3}
        onClose={handleClose3}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add Variant Field"}
        </DialogTitle>



                      <DialogContent >

                        <Grid style={{ maxWidth: 450, padding: "5px 5px", margin: "0 auto" }}>
                      
                      <Typography variant="body2" style={{color: 'white'}} component="p" gutterBottom>
                        
                    </Typography> 
              <>
                      <form id="product-form-id-field" onSubmit={handleSubmit3}>
                        <Grid container spacing={1} style={{color: 'white'}}>




                              <Grid item xs={12}>
                                  <TextField sx={{ input: { color: 'black', background: 'white' } }}  InputLabelProps={{ style: { color: 'black' } }}  placeholder="Name" label="Name" variant="filled" name="name2" value={name2} onChange={handleInputChange3} fullWidth required autoComplete='off' />
                              </Grid>

                              <Grid item xs={12}>
                                  <TextField sx={{ input: { color: 'black', background: 'white' } }}  InputLabelProps={{ style: { color: 'black' } }}  placeholder="Value" label="Value" variant="filled" name="value2"  value={value2} onChange={handleInputChange3} fullWidth required autoComplete='off' />
                              </Grid>
                          
                            
                          
                          
                        </Grid>
                      </form>
                      </>
                  </Grid>

                  </DialogContent>



        <DialogActions>

        
          <Button onClick={handleClose3} style={{color: 'white'}}>Cancel</Button>

        

          <Button type="submit" form="product-form-id-field" style={{color: '#00A7E3'}} autoFocus>
          Save
          </Button>
          

        </DialogActions>
        </Dialog>



  

<Fab icon={<SettingsIcon/>} style={{ position: "fixed", bottom: 0, right: 0}} alwaysShowTitle={false}>

        
  <Action text="Add Product" style={{backgroundColor: '#2065D1'}} onClick={handleClickOpen}>
    <AddIcon />
  </Action>

  <Action text="Add Variant" style={{backgroundColor: '#2065D1'}} onClick={handleClickOpen2}>
    <AddTaskIcon/>
  </Action>

  <Action text="Add Variant Field" style={{backgroundColor: '#2065D1'}} onClick={handleClickOpen3}>
    <ArticleIcon/>
  </Action>
  
  

    </Fab>


    </>
  );
};

export default AddItem;
