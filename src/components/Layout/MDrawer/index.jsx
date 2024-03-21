import { Fragment, useState } from 'react';

import { useTheme } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';

import ROUTES from '../../../routes';

import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import DrawerHeader from '../DrawerHeader';

import Collapse from '@mui/material/Collapse';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const drawerWidth = 240;

const MDrawer = ({ open, onAction }) => {
  const theme = useTheme();

  const navigate = useNavigate();

  const location = useLocation();
  const { pathname } = location;

  const [openCollapse, setOpenCollapse] = useState(false);

  const handleClick = () => {
    setOpenCollapse(!openCollapse);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant='persistent'
      anchor='left'
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={onAction}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <List>
        {ROUTES.map((route, index) => {
          const { name, icon: Icon, path, hideInSidebar, children } = route;

          if (hideInSidebar) {
            return null;
          }

          if (!hideInSidebar && children.length === 0) {
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => navigate(path)}
                  selected={pathname === path}
                >
                  {Icon && (
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                  )}
                  <ListItemText primary={name} />
                </ListItemButton>
              </ListItem>
            );
          }

          if (!hideInSidebar && children.length > 0) {
            return (
              <Fragment key={index}>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleClick}>
                    {Icon && (
                      <ListItemIcon>
                        <Icon />
                      </ListItemIcon>
                    )}
                    <ListItemText primary={name} />
                    {openCollapse ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                </ListItem>
                <Collapse in={openCollapse} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>
                    {children.map((child, childInex) => {
                      const {
                        name,
                        icon: Icon,
                        path: childPath,
                        hideInSidebar,
                      } = child;

                      const subPath = `${path}${childPath}`;

                      if (hideInSidebar) {
                        return null;
                      }

                      if (!hideInSidebar) {
                        return (
                          <ListItemButton
                            sx={{ pl: 4 }}
                            key={childInex}
                            onClick={() => navigate(subPath)}
                            selected={pathname === subPath}
                          >
                            {Icon && (
                              <ListItemIcon>
                                <Icon />
                              </ListItemIcon>
                            )}
                            <ListItemText primary={name} />
                          </ListItemButton>
                        );
                      }
                    })}
                  </List>
                </Collapse>
              </Fragment>
            );
          }
        })}
      </List>
    </Drawer>
  );
};

export default MDrawer;
