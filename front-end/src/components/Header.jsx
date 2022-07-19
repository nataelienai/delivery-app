import React from 'react';
import { Link } from 'react-router-dom';
import { getLocalStorage } from '../utils/localStorageAccess';

export default function Header() {
  const { name } = getLocalStorage();
  const handleClick = () => {
    localStorage.removeItem('user');
  };

  return (
    <header>
      <nav>
        <ul>
          <li data-testid="customer_products__element-navbar-link-products">
            Produtos
          </li>
          <li data-testid="customer_products__element-navbar-link-orders">
            <Link
              to="/customer/orders"
            >
              Meus Pedidos
            </Link>
          </li>
          <li data-testid="customer_products__element-navbar-user-full-name">
            {name}
          </li>
          <li>
            <Link
              to="/login"
              data-testid="customer_products__element-navbar-link-logout"
              onClick={ handleClick }
            >
              Sair
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
