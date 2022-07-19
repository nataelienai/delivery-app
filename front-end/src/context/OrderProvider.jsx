import React, {
  createContext,
  useState,
  useEffect,
  useContext,
} from 'react';
import P from 'prop-types';
import GlobalContext from './GlobalContext';

const HOST = process.env.REACT_APP_HOSTNAME || 'localhost';
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT || '3001';

export const orderContext = createContext();

export default function OrderProvider({ children }) {
  const { id } = useContext(GlobalContext);
  const [order, setOrder] = useState();
  const [orders, setOrders] = useState();

  const fetchOrders = async () => {
    const res = await fetch(`http://${HOST}:${BACKEND_PORT}/sales/user/${id}`);
    const salesByUser = await res.json();
    setOrders(salesByUser);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <orderContext.Provider
      value={ {
        orders,
        order,
        setOrder,
      } }
    >
      { children }
    </orderContext.Provider>
  );
}

OrderProvider.propTypes = {
  children: P.node.isRequired,
};
