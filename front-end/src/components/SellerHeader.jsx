// import React from 'react';
// import { Link } from 'react-router-dom';
// import { getLocalStorage } from '../utils/localStorageAccess';

// export default function SellerHeader() {
//   const { name } = getLocalStorage();
//   const handleClick = () => {
//     localStorage.removeItem('user');
//   };

//   return (
//     <header>
//       <nav>
//         <ul>
//           <li>
//             <Link
//               data-testid="customer_products__element-navbar-link-products"
//               to="/customer/products"
//             >
//               Produtos
//             </Link>
//           </li>
//           <li data-testid="customer_products__element-navbar-user-full-name">
//             {name}
//           </li>
//           <li>
//             <Link
//               to="/login"
//               data-testid="customer_products__element-navbar-link-logout"
//               onClick={ handleClick }
//             >
//               Sair
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// ********Não encontrei nenhum test-id da NavBar de Seller, a única diferença é que não tem "Meus Pedidos"***********