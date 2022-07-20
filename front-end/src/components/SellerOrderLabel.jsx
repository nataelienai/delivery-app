import React, { useState, useEffect } from 'react';
import P from 'prop-types';

export default function SellerOrderLabel(props) {
  const { id, date, status } = props;
  const [prepared, setPrepared] = useState(false);
  const [dispatched, setDispatched] = useState(false);

  const formatDate = (data) => new Date(data).toLocaleDateString('pt-BR');

  const handleClickPreparing = async () => {
    setPrepared(true);
  };

  const handleClickDispatched = async () => {
    setDispatched(true);
  };

  useEffect(() => {
    if (status === 'Entregue') {
      setDelivered(true);
    }
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
        { !delivered ? status : 'Entregue' }
      </p>
      <button
        type="button"
        data-testid="seller_order_details__preparing-check"
        onClick={ handleClickPreparing }
        disabled={ prepared }
      >
        Preparar Pedido
      </button>
      <button
        type="button"
        data-testid="seller_order_details__dispatch-check"
        onClick={ handleClickDispatched }
        disabled={ dispatched }
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
