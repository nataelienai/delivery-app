import React from 'react';
import P from 'prop-types';
import { Link } from 'react-router-dom';

export default function SellerOrderCard({ order }) {
  return (
    <div>
      <Link
        to={ `/seller/orders/${order.id}` }
      >
        <p
          data-testid={ `seller_orders__element-order-id-${order.id}` }
        >
          { order.id }
        </p>
        <p
          data-testid={ `seller_orders__element-delivery-status-${order.id}` }
        >
          { order.status }
        </p>
        <p
          data-testid={ `seller_orders__element-order-date-${order.id}` }
        >
          { new Date(order.saleDate).toLocaleDateString('pt-BR') }
        </p>
        <p
          data-testid={ `seller_orders__element-card-price-${order.id}` }
        >
          { order.totalPrice.replace(/\./, ',') }
        </p>
        <p
          data-testid={ `seller_orders__element-card-address-${order.id}` }
        >
          { `${order.deliveryAddress}, ${order.deliveryNumber}` }
        </p>
      </Link>
    </div>
  );
}

SellerOrderCard.propTypes = {
  order: P.shape({
    id: P.number,
    status: P.string,
    saleDate: P.string,
    totalPrice: P.string,
    deliveryAddress: P.string,
    deliveryNumber: P.string,
  }).isRequired,
};
