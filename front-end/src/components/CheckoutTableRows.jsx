import React from 'react';
import P from 'prop-types';

export default function CheckoutTableRow({ item, id }) {
  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {id + 1}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        {item.name}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {item.quantity}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {item.unitValue}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {item.quantity * item.unitValue}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
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
