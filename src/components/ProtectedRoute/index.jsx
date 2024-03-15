import React from 'react';
import Layout from '../Layout';
// import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // const user = JSON.parse(localStorage.getItem('user'));

  // if (!user) {
  //   return <Navigate to={'/'} replace />;
  // }

  return <Layout>{children}</Layout>;
};

export default ProtectedRoute;
