import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Customer from './pages/Customer';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Order from './pages/Order';
import Orders from './pages/Orders';
// import SellerOrder from './pages/SellerOrder';
// import SellerOrders from './pages/SellerOrders';


export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/products" element={ <Customer /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
      <Route exact path="/customer/orders" element={ <Orders /> } />
      <Route exact path="/customer/orders/:id" element={ <Order /> } />
      {/* <Route exact path="/seller/orders" element={ <SellerOrders /> } />
      <Route exact path="/seller/orders/:id" element={ <SellerOrder /> } /> */}
    </Routes>
  );
}
