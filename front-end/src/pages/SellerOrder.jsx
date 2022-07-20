// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import SellerHeader from '../components/SellerHeader';
// import SellerOrderLabel from '../components/SellerOrderLabel';
// import SellerOrderTable from '../components/SellerOrderTable';
// import SellerOrderTotal from '../components/SellerOrderTotal';

// const HOST = process.env.REACT_APP_HOSTNAME || 'localhost';
// const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT || '3001';

// export default function Order() {
//   const { id } = useParams();
//   const [order, setOrder] = useState();

//   const fetchOrder = async () => {
//     const res = await fetch(`http://${HOST}:${BACKEND_PORT}/sales/${id}`);
//     const json = await res.json();
//     setOrder(json);
//   };

//   useEffect(() => {
//     fetchOrder();
//   });

//   return (
//     <main>
//       <SellerHeader />
//       {
//         !order || (
//           <div>
//             <SellerOrderLabel
//               id={ order.id }
//               date={ order.saleDate }
//               status={ order.status }
//             />
//             <SellerOrderTable products={ order.products } />
//             <SellerOrderTotal totalPrice={ order.totalPrice } />
//           </div>
//         )
//       }
//     </main>
//   );
// }
