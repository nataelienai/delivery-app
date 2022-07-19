import React from 'react';
import P from 'prop-types';

export default function OrderTableRow({ item }) {
  return (
    <tr>
      <td
        data-testid="customer_order_details__element-order-table-item-number-<index>"
      >
        { item.id }
      </td>
      <td
        data-testid="customer_order_details__element-order-table-name-<index>"
      >
        { item.name }
      </td>
      <td
        data-testid="customer_order_details__element-order-table-quantity-<index>"
      >
        { item.quantity }
      </td>
      <td
        data-testid="customer_order_details__element-order-table-unit-price-<index>"
      >
        { item.price }
      </td>
      <td
        data-testid="customer_order_details__element-order-table-sub-total-<index>"
      >
        { (item.quantity * item.price).toFixed(2).replace(/\./, ',') }
      </td>
    </tr>
  );
}

OrderTableRow.propTypes = {
  item: P.shape({
    id: P.number.isRequired,
    name: P.string.isRequired,
    price: P.string.isRequired,
    quantity: P.number.isRequired,
  }).isRequired,
};
