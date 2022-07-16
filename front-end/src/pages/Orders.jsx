import React from 'react';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';

export default function Orders() {
  return (
    <main>
      <Header />
      <div>
        { Array.from({ length: 3 }, () => <OrderCard />)}
      </div>
    </main>
  );
}
