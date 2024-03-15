import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Settings = lazy(() => import('../pages/Settings'));

const ROUTES = [
  {
    name: 'Home',
    icon: '',
    path: '/',
    main: true,
    protected: true,
    component: Home,
    hideInSidebar: false,
    children: [],
  },
  {
    name: 'Settings',
    icon: '',
    path: '/settings',
    main: true,
    protected: true,
    component: Settings,
    hideInSidebar: false,
    children: [],
  },
];

export default ROUTES;
