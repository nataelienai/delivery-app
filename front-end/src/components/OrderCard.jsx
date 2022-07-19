import React from 'react';
import P from 'prop-types';

export default function OrderCard({ order, index }) {
  return (
    <div>
      <p
        data-testid={ `customer_orders__element-order-id-${index}` }
      >
        { order.id }
      </p>
      <p
        data-testid={ `customer_orders__element-delivery-status-${index} ` }
      >
        { order.status }
      </p>
      <p
        data-testid={ `customer_orders__element-order-date-${index}` }
      >
        { new Date(order.saleDate).toLocaleDateString('pt-BR') }
      </p>
      <p
        data-testid={ `customer_orders__element-card-price-${index}` }
      >
        { order.totalPrice }
      </p>
    </div>
  );
}

OrderCard.propTypes = {
  order: P.shape({
    id: P.number,
    status: P.string,
    saleDate: P.string,
    totalPrice: P.string,
  }).isRequired,
  index: P.number.isRequired,
};
