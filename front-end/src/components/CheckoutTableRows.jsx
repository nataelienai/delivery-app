import React, { useContext } from 'react';
import P from 'prop-types';
import GlobalContext from '../context/GlobalContext';

export default function CheckoutTableRow({ item, id }) {
  const { setCart } = useContext(GlobalContext);

  const handleClick = () => {
    setCart((prevState) => prevState
      .filter((_item, index) => id !== index));
  };

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
        {item.price.toFixed(2).replace(/\./, ',')}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${id}` }
      >
        {item.subTotal.toFixed(2).replace(/\./, ',')}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-remove-${id}` }
      >
        <button
          type="button"
          onClick={ handleClick }
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

CheckoutTableRow.propTypes = {
  item: P.shape({
    id: P.number,
    name: P.string,
    quantity: P.number,
    price: P.number,
    subTotal: P.number,
  }).isRequired,
  id: P.number.isRequired,
};
