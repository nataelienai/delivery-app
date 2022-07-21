import React from 'react';
import P from 'prop-types';

export default function SellerOrderTableRow({ item, id }) {
  return (
    <tr>
      <td
        data-testid={ `seller_order_details__element-order-table-item-number-${id}` }
      >
        { item.id }
      </td>
      <td
        data-testid={ `seller_order_details__element-order-table-name-${id}` }
      >
        { item.name }
      </td>
      <td
        data-testid={ `seller_order_details__element-order-table-quantity-${id}` }
      >
        { item.quantity }
      </td>
      <td
        data-testid={ `seller_order_details__element-order-table-unit-price-${id}` }
      >
        { item.price }
      </td>
      <td
        data-testid={ `seller_order_details__element-order-table-sub-total-${id}` }
      >
        { (item.quantity * item.price).toFixed(2).replace(/\./, ',') }
      </td>
    </tr>
  );
}

SellerOrderTableRow.propTypes = {
  item: P.shape({
    id: P.number.isRequired,
    name: P.string.isRequired,
    price: P.string.isRequired,
    quantity: P.number.isRequired,
  }).isRequired,
  id: P.number.isRequired,
};
