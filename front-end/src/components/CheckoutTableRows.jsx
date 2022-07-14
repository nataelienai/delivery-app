import React from 'react';
import P from 'prop-types';

export default function CheckoutTableRow({ item, id }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>{item.unitValue}</td>
      <td>{item.quantity * item.unitValue}</td>
      <td>Remover</td>
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
