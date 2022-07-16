import React, { useContext, useEffect, useState } from 'react';
import CheckoutDetailsForm from '../components/CheckoutDetailsForm';
import CheckoutTable from '../components/CheckoutTable';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';

export default function Checkout() {
  const { cart } = useContext(GlobalContext);
  const [totalOrder, setTotalOrder] = useState(0);

  const sumOfCart = cart.reduce((acc, item) => item.subTotal + acc, 0);

  useEffect(() => {
    setTotalOrder(sumOfCart);
  }, [cart]);

  return (
    <main>
      <div>
        <Header />
        <CheckoutTable />
        <div
          data-testid="customer_checkout__element-order-total-price"
        >
          { totalOrder.toFixed(2).replace(/\./, ',') }
        </div>
      </div>
      <CheckoutDetailsForm />
    </main>
  );
}
