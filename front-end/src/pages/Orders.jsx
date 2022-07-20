import React, { useEffect, useState, useContext } from 'react';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import GlobalContext from '../context/GlobalContext';

const HOST = process.env.REACT_APP_HOSTNAME || 'localhost';
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT || '3001';

export default function Orders() {
  const { userDataLogin } = useContext(GlobalContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    const res = await fetch(`http://${HOST}:${BACKEND_PORT}/sales/user/${userDataLogin.id}`);
    const json = await res.json();
    setOrders(json);
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return <div>carregando</div>;
  }

  return (
    <main>
      <Header />
      <div>
        {
          orders.map((order, index) => (
            <OrderCard key={ index } order={ order } index={ index } />
          ))
        }
      </div>
    </main>
  );
}
