import React from 'react';
import P from 'prop-types';

export default function ProductCard({ product, id }) {
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
        { product.price }
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
        >
          +
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
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
