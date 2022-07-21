import React, { useState, useEffect } from 'react';
import P from 'prop-types';
import { getLocalStorage } from '../utils/localStorageAccess';

const HOST = process.env.REACT_APP_HOSTNAME || 'localhost';
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT || '3001';
const NO_CONTENT = 204;

export default function OrderLabel(props) {
  const { id, seller, date, status } = props;
  const [delivered, setDelivered] = useState(false);

  const formatDate = (data) => new Date(data).toLocaleDateString('pt-BR');

  const handleClick = async () => {
    const res = await fetch(`http://${HOST}:${BACKEND_PORT}/sales/${id}/3`, {
      headers: {
        Authorization: getLocalStorage().token,
      },
      method: 'PATCH',
    });

    if (res.status === NO_CONTENT) {
      setDelivered(true);
    }
  };

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
        { formatDate(date) }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { delivered ? 'Entregue' : status }
      </p>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        onClick={ handleClick }
        disabled={ status !==  'Em Trânsito' }
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
