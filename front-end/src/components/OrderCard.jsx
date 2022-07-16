import React from 'react';

export default function OrderCard() {
  return (
    <div>
      <p
        data-testid="customer_orders__element-order-id-<id>"
      >
        id do pedido
      </p>
      <p
        data-testid="customer_orders__element-delivery-status-<id>"
      >
        status
      </p>
      <p
        data-testid="customer_orders__element-order-date-<id>"
      >
        data
      </p>
      <p
        data-testid="customer_orders__element-card-price-<id>"
      >
        total do pedido
      </p>
    </div>
  );
}
