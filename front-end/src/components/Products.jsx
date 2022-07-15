import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { customerContext } from '../context/CustomerProvides';

export default function Products() {
  const { products } = useContext(customerContext);
  return (
    <div>
      {
        products
          ? products.map((product, index) => (
            <ProductCard product={ product } key={ index } id={ product.id } />))
          : 'aaaaaaaaaa'
      }
    </div>
  );
}
