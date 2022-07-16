import React from 'react';

export default function OrderTableRow() {
  return (
    <tr>
      <td
        data-testid="customer_order_details__element-order-table-item-number-<index>"
      >
        Item1
      </td>
      <td
        data-testid="customer_order_details__element-order-table-name-<index>"
      >
        DEscricao1
      </td>
      <td
        data-testid="customer_order_details__element-order-table-quantity-<index>"
      >
        quantidade1
      </td>
      <td
        data-testid="customer_order_details__element-order-table-unit-price-<index>"
      >
        price
      </td>
      <td
        data-testid="customer_order_details__element-order-table-sub-total-<index>"
      >
        subTotal
      </td>
    </tr>
  );
}
