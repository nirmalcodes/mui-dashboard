import { lazy } from 'react';

const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Users = lazy(() => import('../pages/Users'));
const Messages = lazy(() => import('../pages/Messages'));
const Settings = lazy(() => import('../pages/Settings'));

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const ROUTES = [
  {
    name: 'Login',
    icon: false,
    path: '/login',
    protected: false,
    component: Login,
    hideInSidebar: true,
    children: [],
  },
  {
    name: 'Dashboard',
    icon: DashboardOutlinedIcon,
    path: '/',
    protected: true,
    component: Dashboard,
    hideInSidebar: false,
    children: [],
  },
  {
    name: 'Messages',
    icon: MailOutlineOutlinedIcon,
    path: '/messages',
    protected: true,
    component: Messages,
    hideInSidebar: false,
    children: [],
  },
  {
    name: 'Users',
    icon: PeopleOutlinedIcon,
    path: '',
    protected: true,
    component: Users,
    hideInSidebar: false,
    children: [],
  },
  {
    name: 'Settings',
    icon: SettingsOutlinedIcon,
    path: '',
    protected: true,
    component: Settings,
    hideInSidebar: false,
    children: [],
  },
];

export default ROUTES;
