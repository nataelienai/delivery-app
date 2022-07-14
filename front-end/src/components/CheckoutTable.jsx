import React from 'react';
import CheckoutTableRow from './CheckoutTableRows';

const itemsMock = [
  {
    name: 'Item One',
    quantity: 3,
    unitValue: 5.0,
  },
  {
    name: 'Item Two',
    quantity: 5,
    unitValue: 2.5,
  },
  {
    name: 'Item Three',
    quantity: 6,
    unitValue: 8,
  },
];

export default function CheckoutTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {
          itemsMock.map((item, index) => (
            <CheckoutTableRow item={ item } key={ index } id={ index } />
          ))
        }
      </tbody>
    </table>
  );
}
