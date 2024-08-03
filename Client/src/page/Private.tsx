import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, adminRequired }) => {
    const user = JSON.parse(localStorage.getItem('user'))?.user;
  
 
    if (!user) {
      
      return <Navigate to="/login" />;
    }
   
    
  

    if (!adminRequired || !user.admin) {
      
      return <Navigate to="/" />;
    }
   
    
  
    return element;
  };

export default PrivateRoute;
