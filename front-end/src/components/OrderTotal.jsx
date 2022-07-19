import React from 'react';
import P from 'prop-types';

export default function OrderTotal({ totalPrice }) {
  return (
    <div
      data-testid="customer_order_details__element-order-total-price"
    >
      { totalPrice.replace(/\./, ',') }
    </div>
  );
}

OrderTotal.propTypes = {
  totalPrice: P.string.isRequired,
};
