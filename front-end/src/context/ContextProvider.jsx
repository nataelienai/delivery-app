import React, { useState, useEffect } from 'react';
import P from 'prop-types';
import GlobalContext from './GlobalContext';
import { getLocalStorage } from '../utils/localStorageAccess';

export default function ContextProvider({ children }) {
  const [userDataLogin, setUserDataLogin] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (getLocalStorage()) {
      setUserDataLogin(getLocalStorage());
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={ {
        userDataLogin,
        setUserDataLogin,
        cart,
        setCart,
      } }
    >
      { children }
    </GlobalContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: P.node.isRequired,
};
