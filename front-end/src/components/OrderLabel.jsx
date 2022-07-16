import React from 'react';

export default function OrderLabel() {
  return (
    <div>
      <h1
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        Numero do pedido
      </h1>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        Nome da pessoa vendedora
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        Data do pedido
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        Status do pedido
      </p>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
      >
        Marcar como entregue
      </button>
    </div>
  );
}
