import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={ <Login /> } />
      <Route exact path="/login" element={ <Login /> } />
    </Routes>
  );
}
