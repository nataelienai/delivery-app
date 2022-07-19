import React from 'react';
import P from 'prop-types';
import OrderTableRow from './OrderTableRow';

export default function OrderTable({ products }) {
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
        { products.map((product, index) => (
          <OrderTableRow key={ index } item={ product } />
        ))}
      </tbody>
    </table>
  );
}

OrderTable.propTypes = {
  products: P.arrayOf(P.shape({
    id: P.number,
    name: P.string,
    price: P.string,
    quantity: P.number,
  })).isRequired,
};
