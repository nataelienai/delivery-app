import React from 'react';
import P from 'prop-types';

export default function OrderLabel(props) {
  const { id, seller, date, status } = props;

  return (
    <div>
      <h1
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        { id }
      </h1>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        { seller }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { date }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { status }
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

OrderLabel.propTypes = {
  id: P.number.isRequired,
  seller: P.string.isRequired,
  date: P.string.isRequired,
  status: P.string.isRequired,
};
