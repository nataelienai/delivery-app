import React from 'react';
import P from 'prop-types';
import SellerOrderTableRow from './SellerOrderTableRow';

export default function SellerOrderTable({ products }) {
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
          <SellerOrderTableRow key={ index } item={ product } id={ index } />
        ))}
      </tbody>
    </table>
  );
}

SellerOrderTable.propTypes = {
  products: P.arrayOf(P.shape({
    id: P.number,
    name: P.string,
    price: P.string,
    quantity: P.number,
  })).isRequired,
};
