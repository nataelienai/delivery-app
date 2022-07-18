import React, { useState, useEffect } from 'react';

const HOST = process.env.REACT_APP_HOSTNAME || 'localhost';
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT || '3001';

export default function CheckoutDetailsForm() {
  const [details, setDetails] = useState({
    sellers: [],
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

  const fetchSellers = async () => {
    const res = await fetch(`http://${HOST}:${BACKEND_PORT}/users/sellers`);
    const json = res.json();
    setDetails((prevDetails) => ({ ...prevDetails, json }));
  };

  useEffect(() => {
    fetchSellers();
  }, []);

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
            { details.sellers.length === 0
              || details.sellers.map((seller, index) => (
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
