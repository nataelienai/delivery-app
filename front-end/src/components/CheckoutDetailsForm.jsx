import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import GlobalContext from '../context/GlobalContext';

const HOST = process.env.REACT_APP_HOSTNAME || 'localhost';
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT || '3001';

export default function CheckoutDetailsForm() {
  const navigate = useNavigate();
  const { cart, userDataLogin } = useContext(GlobalContext);
  const [totalOrder, setTotalOrder] = useState(0);
  const [details, setDetails] = useState({
    sellers: [],
    adress: '',
    number: '',
    sellerId: null,
  });

  const sumOfCart = cart.reduce((acc, item) => item.subTotal + acc, 0);

  useEffect(() => {
    setTotalOrder(sumOfCart);
  }, [cart]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const handleClick = async () => {
    const res = await fetch(`http://${HOST}:${BACKEND_PORT}/sales`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        userId: userDataLogin.id,
        sellerId: details.sellerId,
        totalPrice: totalOrder,
        deliveryAddress: details.adress,
        deliveryNumber: details.number,
        products: cart,
      }),
    });

    const { id } = await res.json();
    navigate(`/customer/orders/${id}`);
  };

  const fetchSellers = async () => {
    const res = await fetch(`http://${HOST}:${BACKEND_PORT}/users/sellers`);
    const json = await res.json();
    setDetails((prevDetails) => (
      { ...prevDetails, sellers: json, sellerId: json[0].id }));
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
            name="sellerId"
            id="seller-select"
            data-testid="customer_checkout__select-seller"
            value={ details.sellerId }
            onChange={ handleChange }
          >
            { details.sellers.length === 0
              ? 'aaaaaaaaaa'
              : details.sellers.map((seller, index) => (
                <option key={ index } value={ seller.id }>{seller.name}</option>
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
        onClick={ handleClick }
      >
        Finalizar Pedido
      </button>
    </div>
  );
}
