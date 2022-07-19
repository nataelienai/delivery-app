import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import OrderLabel from '../components/OrderLabel';
import OrderTable from '../components/OrderTable';
import OrderTotal from '../components/OrderTotal';

const HOST = process.env.REACT_APP_HOSTNAME || 'localhost';
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT || '3001';

export default function Order() {
  const { id } = useParams();
  const [order, setOrder] = useState();

  const fetchOrder = async () => {
    const res = await fetch(`http://${HOST}:${BACKEND_PORT}/sales/${id}`);
    const json = await res.json();
    setOrder(json);
  };

  useEffect(() => {
    fetchOrder();
  });

  return (
    <main>
      <Header />
      {
        !order || (
          <div>
            <OrderLabel
              id={ order.id }
              seller={ order.seller.name }
              date={ order.saleDate }
              status={ order.status }
            />
            <OrderTable products={ order.products } />
            <OrderTotal totalPrice={ order.totalPrice } />
          </div>
        )
      }
    </main>
  );
}
