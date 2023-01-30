import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const token = useSelector(state => state.token);

  if (token !== '') {
    return <Outlet />;
  } else {
    return <Navigate to={'/login'} />;
  }
};

export default ProtectedRoutes;
