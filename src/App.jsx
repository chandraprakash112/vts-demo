import './App.css';
import AppRoutes from './routes/AppRoutes';
import AuthRoutes from './routes/AuthRoutes';

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const session = sessionStorage.getItem('userinfo');
  const isLoggedIn = !!session;

  useEffect(() => {
    const path = location.pathname;

    if (isLoggedIn) {
      if (path === '/login') navigate('/dashboard');
    } else {
      if (path !== '/login') navigate('/login');
    }
  }, [location.pathname, isLoggedIn]);

  return <>{isLoggedIn ? <AppRoutes /> : <AuthRoutes />}</>;
}

export default App;
