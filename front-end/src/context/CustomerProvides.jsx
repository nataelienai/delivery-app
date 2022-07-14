import React, { createContext, useState, useEffect } from 'react';
import P from 'prop-types';

const HOST = process.env.REACT_APP_HOSTNAME || 'localhost';
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT || '3001';

export const customerContext = createContext();

export default function CustomerProvider({ children }) {
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    const res = await fetch(`http://${HOST}:${BACKEND_PORT}/products`);
    const prods = await res.json();
    setProducts(prods);
  };

  useEffect(() => {
    fetchProducts();
  });

  return (
    <customerContext.Provider
      value={ {
        products,
      } }
    >
      { children }
    </customerContext.Provider>
  );
}

CustomerProvider.propTypes = {
  children: P.node.isRequired,
};
