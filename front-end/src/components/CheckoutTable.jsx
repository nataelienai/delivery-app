import React from 'react';

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
        <tr>
          <td>Item1</td>
          <td>Descrição1</td>
          <td>Quantidade1</td>
          <td>Valor unitário1</td>
          <td>Sub-total1</td>
          <td>Remover Item1</td>
        </tr>
        <tr>
          <td>Item</td>
          <td>Descrição2</td>
          <td>Quantidade2</td>
          <td>Valor unitário2</td>
          <td>Sub-total2</td>
          <td>Remover Item2</td>
        </tr>
        <tr>
          <td>Item3</td>
          <td>Descrição3</td>
          <td>Quantidade3</td>
          <td>Valor unitário3</td>
          <td>Sub-total3</td>
          <td>Remover Item3</td>
        </tr>
      </tbody>
    </table>
  );
}
