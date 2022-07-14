import React from 'react';

export default function ProductCard() {
  return (
    <div>
      <h2 data-testid="customer_products__element-card-title-<id>">product name</h2>
      <h2 data-testid="customer_products__element-card-title-<id>">product price</h2>
      <div data-testid="customer_products__img-card-bg-image-<id>">product image</div>
      <div>
        <button
          data-testid="customer_products__button-card-add-item-<id>"
          type="button"
        >
          +
        </button>
        <button
          data-testid="customer_products__button-card-rm-item-<id>"
          type="button"
        >
          -
        </button>
        <h2 data-testid="customer_products__input-card-quantity-<id>">product name</h2>
      </div>
    </div>
  );
}
