import { useState } from 'react';
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar } from '@mui/material';
// components
import MenuPopover from '../../../components/MenuPopover';
import { IconButtonAnimate } from '../../../components/animate';



// redux
import {useSelector, useDispatch} from 'react-redux';
import {loadUser} from '../../../redux/actions/usersActions';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Dashboard',
    linkTo: '/',
  },
  {
    label: 'Settings',
    linkTo: '/dashboard/account',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {

  const navigate = useNavigate();

  
  const { user } = useSelector(state => state.data2); //Redux State
  console.log(user)

  const [open, setOpen] = useState(null);

  const handleOpen = (e) => {
    setOpen(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogOut = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate("/auth/login");
  }

  return (
    <>
      <IconButtonAnimate
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src="https://www.gstatic.com/stadia/gamers/avatars/xxhdpi/avatar_53.png" alt="" />
      </IconButtonAnimate>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user.display_name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
           example@example.com
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
           
           <RouterLink key={option.label} style={{textDecoration: 'none', color: 'white'}} to={option.linkTo}>
            <MenuItem key={option.label}  onClick={handleClose}>
              {option.label} 
            </MenuItem>
            </RouterLink>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem sx={{ m: 1 }} onClick={handleLogOut}>Logout</MenuItem>
      </MenuPopover>
    </>
  );
}
