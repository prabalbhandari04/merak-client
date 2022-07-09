import React, { useRef, useState, useEffect } from "react";

// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Avatar, Typography } from '@mui/material';
// utils
import cssStyles from '../../utils/cssStyles';
// components
import Image from '../../components/Image';


import { Menu, IconButton, ListItemIcon, ListItemText } from '@mui/material';

//---------------Mui Dialog -----------------
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from '@mui/material/DialogContentText';


import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';


import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {Grid } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
// ----------------------------------------------------------------------

import { useSelector, useDispatch } from 'react-redux';
import { updateTeams, deleteTeams } from '../../redux/actions/organizationActions';
import { loadUsers } from '../../redux/actions/usersActions';



const OverlayStyle = styled('div')(({ theme }) => ({
  ...cssStyles().bgBlur({ blur: 2, color: theme.palette.primary.darker }),
  top: 0,
  zIndex: 8,
  content: "''",
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

// ----------------------------------------------------------------------


export default function TeamCard({team}) {


  let dispatch = useDispatch();


  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const { users } = useSelector(state => state.data2); //Redux State
  const { organizations } = useSelector(state => state.data3); //Redux State

  

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);


  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);


  const [teamLeader, setTeamLeader] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  

  const [state, setState] = useState({
    name: team.name,
    description: team.description,
    team_leader: team.team_leader,
    organization: team.organization
  });

  


  const {name,  description} = state;


  const handleChangeOrganization = (e) => {
    setOrganizationName(e.target.value);
  }


  const handleChangeTeamLeader = (e) => {
    setTeamLeader(e.target.value);
  }

  const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({ ...state,  [name]: value});
}


const handleUpdate = (e) => {

  e.preventDefault();

  const id = team.id;

  let data = {name: name, description: description, organization: organizationName, team_leader: teamLeader, members: [teamLeader]}   
  
  

  dispatch(updateTeams({id, data}));

  setState({
      name: name,
      description: description,
    });

    setOrganizationName(organizationName);
  setTeamLeader(teamLeader);

  setOpen(false);

}

  const handleClose = () => {
    setState({
        name: team.name,
        description: team.description,
        team_leader: team.teamLeader,
    })

    setOpen(false);
  }


  const handleOpen = () => {
    setOpen(true);
  }

  const handleClickOpen2 = () => {
    setIsOpen(false)
    setOpen2(true);
  };


  const handleDelete = (id) => {
    dispatch(deleteTeams(id));
    setOpen2(false);
  }


  const handleClose2 = () => {
    setOpen2(false);
  };

  


  return (
    <>
    <Card sx={{ textAlign: 'center' }} onClick={handleOpen} style={{cursor: 'pointer'}}>
      <Box sx={{ position: 'relative' }}>
        
        <Avatar
          sx={{
            width: 64,
            height: 64,
            zIndex: 11,
            left: 0,
            right: 0,
            bottom: -32,
            mx: 'auto',
            position: 'absolute',
          }}
          style={{textTransform: 'capitalize', background: '#161C24', color: 'white'}}
        >{team.name.charAt(0)}</Avatar>
        <OverlayStyle />
        <Image src="https://assets.rawpixel.com/cover_400/Y29sbGVjdGlvbi9jb3Zlci80NzcyMzJlYTAxYWI3NTIzM2M2ZDI4ZWU2NzRhNzgwNF9jb3Zlci5qcGc.jpg?s=WUHG1DvAuMQmAKUUOZrxiTozvmiK53E7JDMES-P4css" alt="" ratio="16/9" />
      </Box>

      <Typography variant="subtitle1" sx={{ mt: 6 }} style={{textTransform: 'capitalize'}}>
        {team.name}
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary' }} style={{textTransform: 'capitalize'}}>
        {team.organization}
      </Typography>

    

      <Divider sx={{ borderStyle: 'dashed', mt: 0.9,}} />


      <Box sx={{ py: 2, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div>
          <Typography variant="caption" component="div" sx={{ mb: 0.75, color: 'text.disabled' }}>
            Team Leader
          </Typography>
          <Typography variant="body2" style={{textTransform: 'capitalize'}}>{team.team_leader}</Typography>
        </div>

      </Box>
    </Card>



    

    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
         <DialogTitle id="alert-dialog-title" >
          {"Team Details"}

          <IconButton ref={ref} onClick={() => setIsOpen(true)} style={{float: 'right'}}>
              <MoreVertIcon style={{ color: 'white' }}/>
        </IconButton>

          <Menu
            open={isOpen}
            anchorEl={ref.current}
            onClose={() => setIsOpen(false)}
            PaperProps={{
              sx: { width: 200, maxWidth: '100%'},
            }}
            style={{ color: '#181818'}}
          >


            <MenuItem sx={{ color: 'text.secondary' }}  onClick={() => handleClickOpen2()}>
              <ListItemIcon  style={{color: 'white'}}>
                <DeleteIcon style={{ color: 'red' }}/>
              </ListItemIcon>
              <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }} style={{ color: 'red' }}/>
            </MenuItem>

          </Menu>



          <Dialog
            open={open2}
            onClose={handleClose2}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" >
              {"Delete this team?"}
            </DialogTitle>
            <DialogContent >
              <DialogContentText id="alert-dialog-description" style={{color: 'white'}}>
                Are you sure you want to delete the team <span style={{color: 'gray', textTransform: 'capitalize'}}>{team.name}</span>
              </DialogContentText>
            </DialogContent>
            <DialogActions >
              <Button onClick={handleClose2} style={{color: 'white'}}>Cancel</Button>
              <Button autoFocus style={{ color: 'red' }} onClick={() => handleDelete(team.id)}>
                Delete
              </Button>
            </DialogActions>
          </Dialog>







        </DialogTitle>

        <DialogContent>


        <Grid style={{ maxWidth: 450, padding: "5px 5px", margin: "0 auto" }}>

        <Typography variant="body2" style={{color: 'white'}} component="p" gutterBottom>
          
          </Typography> 


      
                <form id="team-form-id" onSubmit={handleUpdate}>
            <Grid container spacing={1} style={{color: 'white', marginTop: '8px'}}>

                <Grid item xs={12}>
                    <TextField name="name" value={name} onChange={handleInputChange}  sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }}   placeholder="Name" label="Name" variant="filled" fullWidth required autoComplete='off' />
                </Grid>


                <Grid item xs={12}>
                  <TextField value={description} onChange={handleInputChange} InputProps={{ style: { color: 'black', background: 'white' } }} name="description" InputLabelProps={{ style: { color: 'black' } }}  label="Description" multiline rows={4} placeholder="Description" variant="filled" fullWidth required autoComplete='off'/>
                </Grid>



                <Grid item xs={12}>
                  
                  <FormControl fullWidth variant="filled" required name="organization" >
                    <InputLabel id="organization-select-label" style={{color: 'black'}}>Select Organization</InputLabel>
                    <Select
                      labelId="organization-select-label"
                      id="organization-select"
                      value={organizationName}
                      label="Select Organization"
                      onChange={handleChangeOrganization}
                      style={{background:'white', color: 'black'}}
                    >
                      {organizations.map(val => {
                        
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
                        
                        <FormControl fullWidth variant="filled" required name="team_leader" >
                            <InputLabel id="team-leader-select-label" style={{color: 'black'}}>Select Team Leader</InputLabel>
                            <Select
                            labelId="team-leader-select-label"
                            id="team-leader-select"
                            value={teamLeader}
                            label="Select Team Leader"
                            onChange={handleChangeTeamLeader}    
                            style={{background:'white', color: 'black'}}
                            >
                            {users.map(val => {
                                
                            
                                        return (
                                        <MenuItem key={val.id} value={val.id} style={{textTransform: 'capitalize'}}>
                                            {val.display_name}
                                        </MenuItem>
                                        )
                            })}
                            </Select>
                        </FormControl>
                    
                    </Grid>


                </Grid>

            </form>
     
    </Grid>

        </DialogContent>
        <DialogActions>

          <Button onClick={handleClose} style={{color: 'white'}}>Cancel</Button>

          <Button type="submit" form="team-form-id" style={{color: '#00A7E3'}} autoFocus>
            Update
          </Button>



        </DialogActions>
      </Dialog>

    </>
  );
}
