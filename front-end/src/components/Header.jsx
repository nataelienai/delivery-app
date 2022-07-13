import React from 'react';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li data-testid="customer_products__element-navbar-link-products">
            Produtos
          </li>
          <li data-testid="customer_products__element-navbar-link-orders">
            Meus Pedidos
          </li>
          <li data-testid="customer_products__element-navbar-user-full-name">
            Nome do cliente
          </li>
          <li data-testid="customer_products__element-navbar-link-logout">
            Sair
          </li>
        </ul>
      </nav>
    </header>
  );
}
