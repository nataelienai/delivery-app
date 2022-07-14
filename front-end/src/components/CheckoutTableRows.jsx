import React from 'react';
import P from 'prop-types';

export default function CheckoutTableRow({ item, id }) {
  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${id}` }
      >
        {id + 1}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${id}` }
      >
        {item.name}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${id}` }
      >
        {item.quantity}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${id}` }
      >
        {item.unitValue}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${id}` }
      >
        {item.quantity * item.unitValue}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-remove-${id}` }
      >
        Remover
      </td>
    </tr>
  );
}

CheckoutTableRow.propTypes = {
  item: P.shape({
    name: P.string,
    quantity: P.number,
    unitValue: P.number,
  }).isRequired,
  id: P.number.isRequired,
};
