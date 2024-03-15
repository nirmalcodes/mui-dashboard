import React, { useState, useContext } from 'react';
import { ColorModeContext } from '../../../theme';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Avatar, Box, Menu, MenuItem, Tooltip } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const MAppbar = ({ open, onAction }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='fixed' open={open} color='inherit' elevation={0}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={onAction}
          edge='start'
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap component='div'>
          MUI Dashboard
        </Typography>
        <Box
          sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 1.5 }}
        >
          <Box>
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === 'dark' ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
          </Box>
          <Box>
            <Tooltip title='Profile'>
              <IconButton
                aria-label='open user settings dropdown'
                aria-controls='user-settings-dropdown'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
                sx={{ p: 0 }}
              >
                <Avatar
                  alt='Nirmal'
                  src='https://picsum.photos/800/800?random=1'
                />
              </IconButton>
            </Tooltip>
            <Menu
              id='user-settings-dropdown'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{ mt: '2.75rem' }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={() => navigate('/login')}>Logout</MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MAppbar;
