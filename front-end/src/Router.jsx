import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
    </Routes>
  );
}
