import React, { useEffect, useState, useContext } from 'react';
import SellerHeader from '../components/SellerHeader';
import SellerOrderCard from '../components/SellerOrderCard';
import GlobalContext from '../context/GlobalContext';

const HOST = process.env.REACT_APP_HOSTNAME || 'localhost';
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT || '3001';

export default function SellerOrders() {
  const { userDataLogin } = useContext(GlobalContext);
  const [orders, setOrders] = useState();

  const fetchOrders = async () => {
    const res = await fetch(`http://${HOST}:${BACKEND_PORT}/sales/user/${userDataLogin.id}`);
    const json = await res.json();
    setOrders(json);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <main>
      <SellerHeader />
      <div>
        {
          !orders
            || orders.map((order, index) => (
              <SellerOrderCard key={ index } order={ order } index={ index } />
            ))
        }
      </div>
    </main>
  );
}
