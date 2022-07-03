import React, {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {loadTeams} from '../redux/actions/organizationActions';
// @mui
import { Container, Typography, Box } from '@mui/material';


// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import AddTeam from '../molecules/AddTeam';
import TeamCard from './organization/TeamCard';

import EmptyContent from '../components/EmptyContent';


const Teams = () => {


  const { themeStretch } = useSettings();

  const dispatch = useDispatch(); //Redux Dispatch
  const {teams} = useSelector(state => state.data3); //Redux State

  

  useEffect(() => {
    dispatch(loadTeams());
  }, [dispatch]);




  return (
    <Page title="Inventory">
      <Container maxWidth={themeStretch ? false : 'xl'}>


        <Typography variant="h3" component="h1" paragraph>
          Teams
        </Typography>


        {teams != "" ? 
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >

          
         
          {teams && teams.map((team) => {
             return (
               <span key={team.id}>
                 <TeamCard team={team}/>
               </span>
             )
           }
          )}

        </Box>

        : 
        <span>
        <EmptyContent
        title="No Teams Found"
        description={`You don't have any teams yet.`}
        sx={{
          '& span.MuiBox-root': { height: 160 },
        }}
      />
      </span>
       
      }



      </Container>

      <AddTeam/>

    </Page>
  )
}

export default Teams