import React, { useState } from 'react';

const sellersMock = [
  'Fulano de Tal',
  'Ciclano de Tal',
  'Chucky Norris',
  'Jimin do BTS',
  'Silvio Santos',
  'Tristana',
];

export default function CheckoutDetailsForm() {
  const [details, setDetails] = useState({
    seller: 'Selecione o vendedor',
    adress: '',
    number: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="seller-select">
          P. Vendedora Responsável
          <select
            name="seller"
            id="seller-select"
            data-testid="customer_checkout__select-seller"
            value={ details.seller }
            onChange={ handleChange }
          >
            {sellersMock.map((seller, index) => (
              <option key={ index } value={ seller }>{seller}</option>
            ))}
          </select>
        </label>
        <label htmlFor="address-input">
          Endereço
          <input
            id="address-input"
            data-testid="customer_checkout__input-address"
            type="text"
            placeholder="Rua Onde Judas perdeu as botas"
            name="adress"
            value={ details.adress }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="number">
          Número
          <input
            id="address-input"
            data-testid="customer_checkout__input-addressNumber"
            type="text"
            placeholder="666"
            name="number"
            value={ details.number }
            onChange={ handleChange }
          />
        </label>
      </form>
      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
      >
        Finalizar Pedido
      </button>
    </div>
  );
}
