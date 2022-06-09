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
import {Grid,Typography} from "@material-ui/core";
import TextField from '@mui/material/TextField';
//-------------------------------------------

//-------------- Mui muliple select ---------------

import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Stepper, Step, StepLabel} from "@material-ui/core";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

//-----------------------------------------------

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {addProducts, loadProducts, addVariants, loadVariants} from '../../Redux/Actions/productsActions';
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
    dispatch(loadVariants());
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


  const [state2, setState2] = useState({
    price: '',
    quantity: '',
    image: null,
    is_default: true,
    field: productVariant,
    product: productName,
  });

  const [imgPre, setImgPre] = useState(null);


  const {name,  description} = state;
  const {price, quantity, image} = state2;




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
    setState2({ price: price, quantity: quantity, image: image, is_default: true, field: productVariant, product: productName, [name]: value});
  }



  const handleInputChangeImage = (e) => {
   
    const img = e.target.files[0];

    setImgPre(img.name)
  
    setState2({...state2, image: img});
  }


  
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
    form_data.append('is_default', true);
    productVariant.forEach(value => form_data.append('field', value.split('/')[0])) //multiple variant
    form_data.append('product', productName);

  


    dispatch(addVariants(form_data));
    
    handleClose()

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
        <form id="product-form-id" onSubmit={handleSubmit}>
          <Grid container spacing={1} style={{color: 'white'}}>
            <Grid item xs={12}>
              <TextField sx={{ input: { color: 'black', background: 'white' } }} name="name" InputLabelProps={{ style: { color: 'black' } }}  value={name} onChange={handleInputChange} placeholder="Product Name" label="Product Name" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
            </Grid>

         
           
            <Grid item xs={12}>
              <TextField InputProps={{ style: { color: 'black', background: 'white' } }} name="description" InputLabelProps={{ style: { color: 'black' } }} value={description} onChange={handleInputChange}  label="Description" multiline rows={4} placeholder="Description" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
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
                                <Chip style={{textTransform: 'capitalize'}} key={value} label={value.split('/')[1]} />
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
                        </Select>
                      </FormControl>
                </Grid>



                <Grid xs={12} sm={6} item>
                    <TextField sx={{ input: { color: 'black', background: 'white' } }} name="price" value={price} onChange={handleInputChange2} InputLabelProps={{ style: { color: 'black' } }}  placeholder="Price" label="Price" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
                </Grid>

                <Grid xs={12} sm={6} item>
                    <TextField sx={{ input: { color: 'black', background: 'white' } }} name="quantity" value={quantity} onChange={handleInputChange2} InputLabelProps={{ style: { color: 'black' } }}  type="number" placeholder="Quantity" label="Quantity" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
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
        <DialogTitle id="alert-dialog-title" style={{color: 'white', background: '#181818'}}>
          {"Add Product"}
        </DialogTitle>

       


        <DialogContent style={{background: '#181818'}}>

        <Stepper alternativeLabel activeStep={activeStep} style={{background:'transparent'}}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          
         
          return (
            <Step {...stepProps} key={index} >
              <StepLabel {...labelProps}><span style={{color: 'white'}}>{step}</span></StepLabel>
            </Step>
          );
        })}
      </Stepper>
    
          <form>{getStepContent(activeStep)}</form>
        
        </DialogContent>



        <DialogActions style={{background: '#181818'}}>
       
         
          <Button onClick={handleClose} style={{color: 'white'}}>Cancel</Button>

         
         {activeStep === 1 ?
          <Button type="submit" form="product-form-id" style={{color: '#00A7E3'}} autoFocus>
           Save
          </Button>
          : 
          <Button type="submit" form="product-form-id" style={{color: '#00A7E3'}} autoFocus >
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
        <DialogTitle id="alert-dialog-title" style={{color: 'white', background: '#181818'}}>
          {"Add Variant"}
        </DialogTitle>

       


        <DialogContent style={{background: '#181818'}}>


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
                                <Chip style={{textTransform: 'capitalize'}} key={value} label={value.split('/')[1]} />
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
                        </Select>
                      </FormControl>
                </Grid>



                <Grid xs={12} sm={6} item>
                    <TextField sx={{ input: { color: 'black', background: 'white' } }} name="price" value={price} onChange={handleInputChange2} InputLabelProps={{ style: { color: 'black' } }}  placeholder="Price" label="Price" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
                </Grid>

                <Grid xs={12} sm={6} item>
                    <TextField sx={{ input: { color: 'black', background: 'white' } }} name="quantity" value={quantity} onChange={handleInputChange2} InputLabelProps={{ style: { color: 'black' } }}  type="number" placeholder="Quantity" label="Quantity" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
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



        <DialogActions style={{background: '#181818'}}>
       
         
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
        <DialogTitle id="alert-dialog-title" style={{color: 'white', background: '#181818'}}>
          {"Add Variant Field"}
        </DialogTitle>



                      <DialogContent style={{background: '#181818'}}>

                        <Grid style={{ maxWidth: 450, padding: "5px 5px", margin: "0 auto" }}>
                      
                      <Typography variant="body2" style={{color: 'white'}} component="p" gutterBottom>
                        
                    </Typography> 
              <>
                      <form id="product-form-id" >
                        <Grid container spacing={1} style={{color: 'white'}}>




                              <Grid item xs={12}>
                                  <TextField sx={{ input: { color: 'black', background: 'white' } }}  InputLabelProps={{ style: { color: 'black' } }}  placeholder="Name" label="Name" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
                              </Grid>

                              <Grid item xs={12}>
                                  <TextField sx={{ input: { color: 'black', background: 'white' } }}  InputLabelProps={{ style: { color: 'black' } }}  placeholder="Value" label="Value" variant="filled" fullWidth required autoComplete='off' style={{background:'#181818'}}/>
                              </Grid>
                          
                            
                          
                          
                        </Grid>
                      </form>
                      </>
                  </Grid>

                  </DialogContent>



        <DialogActions style={{background: '#181818'}}>

        
          <Button onClick={handleClose3} style={{color: 'white'}}>Cancel</Button>

        

          <Button type="submit" form="product-form-id" style={{color: '#00A7E3'}} autoFocus>
          Save
          </Button>
          

        </DialogActions>
        </Dialog>



  

<Fab icon={<SettingsIcon/>} style={{ position: "fixed", bottom: 16, right: 16}} alwaysShowTitle={false}>

        
  <Action text="Add Product" style={{backgroundColor: '#3f51b5'}} onClick={handleClickOpen}>
    <AddIcon />
  </Action>

  <Action text="Add Variant" style={{backgroundColor: '#3f51b5'}} onClick={handleClickOpen2}>
    <AddTaskIcon/>
  </Action>

  <Action text="Add Variant Field" style={{backgroundColor: '#3f51b5'}} onClick={handleClickOpen3}>
    <ArticleIcon/>
  </Action>
  
  

    </Fab>


    </>
  );
};

export default AddItem;
