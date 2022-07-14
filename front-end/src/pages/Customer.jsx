import React, { useContext } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import CustomerProvider, { customerContext } from '../context/CustomerProvides';

export default function Customer() {
  const { products } = useContext(customerContext);

  return (
    <CustomerProvider>
      <main>
        <Header />
        <div>
          {
            products
            && products.map((product, index) => (
              <ProductCard product={ product } key={ index } id={ product.id } />))
          }
        </div>
      </main>
    </CustomerProvider>
  );
}
