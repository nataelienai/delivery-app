import React from 'react';
import CheckoutDetailsForm from '../components/CheckoutDetailsForm';
import CheckoutTable from '../components/CheckoutTable';

export default function Checkout() {
  return (
    <main>
      <div>
        <CheckoutTable />
        <div
          data-testid="customer_checkout__element-order-total-price"
        >
          soma dos produtos do checkout
        </div>
      </div>
      <CheckoutDetailsForm />
    </main>
  );
}
