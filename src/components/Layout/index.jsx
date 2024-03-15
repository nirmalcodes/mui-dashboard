import React, { useState } from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MAppbar from './MAppbar';
import MDrawer from './MDrawer';
import MMain from './MMain';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexGrow: '1' }}>
      {/* <CssBaseline /> */}
      <MAppbar open={open} onAction={handleDrawerOpen} />
      <MDrawer open={open} onAction={handleDrawerClose} />
      <MMain open={open}>{children}</MMain>
    </Box>
  );
};

export default Layout;
