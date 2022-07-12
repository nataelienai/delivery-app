import React from 'react';
import { Routes, Route } from 'react-router-dom';

export default function Switcher() {
  return (
    <Routes>
      <Route exact path="/" component={ Login } />
      <Route exact path="/login" component={ Login } />
    </Routes>
  );
}
