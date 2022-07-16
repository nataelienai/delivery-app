import React from 'react';
import Header from '../components/Header';
import OrderLabel from '../components/OrderLabel';
import OrderTable from '../components/OrderTable';
import OrderTotal from '../components/OrderTotal';

export default function Order() {
  return (
    <main>
      <Header />
      <OrderLabel />
      <OrderTable />
      <OrderTotal />
    </main>
  );
}
