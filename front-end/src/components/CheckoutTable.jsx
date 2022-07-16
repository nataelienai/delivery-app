import React, { useContext, useEffect } from 'react';
import GlobalContext from '../context/GlobalContext';
import CheckoutTableRow from './CheckoutTableRows';

export default function CheckoutTable() {
  const { cart } = useContext(GlobalContext);

  useEffect(() => {}, [cart]);

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
          cart.map((item, index) => (
            <CheckoutTableRow item={ item } key={ index } id={ index } />
          ))
        }
      </tbody>
    </table>
  );
}
