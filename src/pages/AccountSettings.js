import React from 'react';

// @mui
import { Container, Tab, Box, Tabs, Typography, Alert } from '@mui/material';

import {useSelector} from 'react-redux';




// hooks
import useSettings from '../hooks/useSettings';
import useTabs from '../hooks/useTabs';

import Iconify from '../components/Iconify';

// components
import Page from '../components/Page';
import AccountGeneral from '../organisms/AccountGeneral';
import AccountChangePassword from '../organisms/AccountChangePassword';



// ----------------------------------------------------------------------

const AccountSettings = () => {

  const { themeStretch } = useSettings();


  const { errorMessageProfile } = useSelector(state => state.data2); //Redux State

  const { currentTab, onChangeTab } = useTabs('general');

  const ACCOUNT_TABS = [
    {
      value: 'general',
      icon: <Iconify icon={'ic:round-account-box'} width={20} height={20} />,
      component: <AccountGeneral/>,
    },
    {
      value: 'change_password',
      icon: <Iconify icon={'ic:round-vpn-key'} width={20} height={20} />,
      component: <AccountChangePassword />,
    },
  ];


  return (
    <Page title="Account Settings">
    <Container maxWidth={themeStretch ? false : 'lg'}>

    <Typography variant="h3" component="h1" paragraph>
         Account
        </Typography>

        {errorMessageProfile && 
            <>
            <Alert severity="warning" >
            {errorMessageProfile}
            </Alert>
            </>
   }
     

      <Tabs
        allowScrollButtonsMobile
        variant="scrollable"
        scrollButtons="auto"
        value={currentTab}
        onChange={onChangeTab}
      >
        {ACCOUNT_TABS.map((tab) => (
          <Tab disableRipple key={tab.value} label={tab.value} icon={tab.icon} value={tab.value} />
        ))}
      </Tabs>

      <Box sx={{ mb: 5 }} />

      {ACCOUNT_TABS.map((tab) => {
        const isMatched = tab.value === currentTab;
        return isMatched && <Box key={tab.value}>{tab.component}</Box>;
      })}
    </Container>
  </Page>
  );
}


export default AccountSettings;