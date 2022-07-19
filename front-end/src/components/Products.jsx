import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { customerContext } from '../context/CustomerProvider';
import GlobalContext from '../context/GlobalContext';

export default function Products() {
  const { products } = useContext(customerContext);
  const { cart } = useContext(GlobalContext);
  const [totalOrder, setTotalOrder] = useState(0);

  const sumOfCart = cart.reduce((acc, item) => item.subTotal + acc, 0);

  useEffect(() => {
    setTotalOrder(sumOfCart);
  }, [cart]);

  return (
    <div>
      {
        products
          ? products.map((product, index) => (
            <ProductCard product={ product } key={ index } id={ product.id } />))
          : 'aaaaaaaaaa'
      }
      <button
        type="button"
        data-testid="customer_products__button-cart"
        disabled={ !totalOrder }
      >
        <Link
          to="/customer/checkout"
          data-testid="customer_products__checkout-bottom-value"
        >
          { totalOrder.toFixed(2).replace(/\./, ',') }
        </Link>
      </button>
    </div>
  );
}
