// Material Ui Components
import { Link, Card as Cards, Typography, Stack } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';
const CustomerList = (props) => {
    
    const customerlist = props.customerlist;

    return (
        <div className='blog-list'>
                {customerlist.map(item => {
                return (
                   <div>
                    <Cards variant="outlined" sx={{margin:"30px",border: "outlined", boxShadow: "none", outline: '2px', width:"25rem"}} style={{cursor: 'pointer', backgroundColor: '#181818'}}  >
                        <Stack spacing={2} sx={{ p: 1}} style={{background: '#181818'}}>
                            <Link to="#" color="inherit" underline="none" component={RouterLink}>

                            <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                            <span style={{color: 'gray'}}> Name: </span> {item.name}
                            </Typography>
                            
                            <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                            <span style={{color: 'gray'}}> Phone: </span> {item.phone}
                            </Typography>
                            
                            <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                            <span style={{color: 'gray'}}> Address: </span> {item.address}
                            </Typography>

                            <Typography gutterBottom variant="body1" style={{color: 'white', display:'flex', justifyContent:'space-between'}} component="div">
                            <span style={{color: 'gray'}}> Organization: </span> {item.organization}
                            </Typography>

                            </Link>
                        </Stack>
                        
                        </Cards>
                    </div>
                )
            }
            )}
        </div>
    );
    }

export default CustomerList;
