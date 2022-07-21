import React from 'react';
import P from 'prop-types';

export default function SellerOrderTotal({ totalPrice }) {
  return (
    <div
      data-testid="seller_order_details__element-order-total-price"
    >
      { totalPrice.replace(/\./, ',') }
    </div>
  );
}

SellerOrderTotal.propTypes = {
  totalPrice: P.string.isRequired,
};
