import React, { useState, useContext, useEffect } from 'react';
import P from 'prop-types';
import GlobalContext from '../context/GlobalContext';

export default function ProductCard({ product, id }) {
  const { setCart } = useContext(GlobalContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (quantity === 0) {
      setCart((prevState) => (prevState.filter((prod) => prod.name !== product.name)));
    }

    if (quantity !== 0) {
      setCart((cart) => {
        if (cart.length !== 0) {
          const newCart = cart.filter((prod) => prod.name !== product.name);
          return [
            ...newCart,
            {
              name: product.name,
              price: Number(product.price),
              quantity,
              subTotal: quantity * Number(product.price),
              id,
            },
          ];
        }
        return [
          ...cart,
          {
            name: product.name,
            price: Number(product.price),
            quantity,
            subTotal: quantity * Number(product.price),
            id,
          },
        ];
      });
    }
  }, [quantity]);

  const handleChange = ({ target: { value } }) => {
    setQuantity(Number(value));
  };

  const handleIncrement = () => setQuantity((prevState) => prevState + 1);
  const handleDecrement = () => {
    setQuantity((prevState) => {
      if (prevState === 0) {
        return 0;
      }

      return prevState - 1;
    });
  };

  return (
    <div>
      <h2
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { product.name }
      </h2>
      <h2
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { product.price.replace(/\./, ',') }
      </h2>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ product.urlImage }
        alt={ `${product.name}` }
      />

      <div>
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          onClick={ handleIncrement }
        >
          +
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          onChange={ handleChange }
          value={ quantity }
          type="number"
          min={ 0 }
        />
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          onClick={ handleDecrement }
        >
          -
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: P.shape({
    name: P.string,
    price: P.number,
    urlImage: P.string,
  }).isRequired,
  id: P.number.isRequired,
};
