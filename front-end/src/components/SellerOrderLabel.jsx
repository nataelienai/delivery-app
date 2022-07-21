import React, { useState, useEffect } from 'react';
import P from 'prop-types';
import { getLocalStorage } from '../utils/localStorageAccess';

export default function SellerOrderLabel(props) {
  const { id, date, status } = props;
  const [currentStatusId, setCurrentStatusId] = useState(0);
  const statuses = {
    0: 'Pendente',
    1: 'Preparando',
    2: 'Em trânsito',
    3: 'Entregue',
  };

  const formatDate = (data) => new Date(data).toLocaleDateString('pt-BR');

  const handleClick = async (statusId) => {
    const res = await fetch(`http://${HOST}:${BACKEND_PORT}/sales/${id}/${statusId}`, {
      headers: {
        Authorization: getLocalStorage().token,
      },
      method: 'PATCH',
    });

    if (res.status === NO_CONTENT) {
      setCurrentStatusId(statusId);
    }
  };

  useEffect(() => {
    const statusIds = {
      Pendente: 0,
      Preparando: 1,
      'Em trânsito': 2,
      Entregue: 3,
    };
    setCurrentStatusId(statusIds[status]);
  }, []);

  return (
    <div>
      <h1
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        { id }
      </h1>
      <p
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        { formatDate(date) }
      </p>
      <p
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        { statuses[currentStatusId] }
      </p>
      <button
        type="button"
        data-testid="seller_order_details__button-preparing-check"
        onClick={ () => handleClick(1) }
        disabled={ currentStatusId >= 1 }
      >
        Preparar Pedido
      </button>
      <button
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
        onClick={ () => handleClick(2) }
        disabled={ currentStatusId >= 2 }
      >
        Saiu Para Entrega
      </button>
    </div>
  );
}

SellerOrderLabel.propTypes = {
  id: P.number.isRequired,
  date: P.string.isRequired,
  status: P.string.isRequired,
};
