import React from 'react';
import OrderTableRow from './OrderTableRow';

export default function OrderTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        { Array.from({ length: 3 }, () => (
          <OrderTableRow />
        ))}
      </tbody>
    </table>
  );
}
