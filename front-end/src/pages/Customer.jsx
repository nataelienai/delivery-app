import React from 'react';
import Header from '../components/Header';
import Products from '../components/Products';
import CustomerProvider from '../context/CustomerProvider';

export default function Customer() {
  return (
    <main>
      <Header />
      <CustomerProvider>
        <Products />
      </CustomerProvider>
    </main>
  );
}
