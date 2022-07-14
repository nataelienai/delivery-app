import React, { useState } from 'react';
import P from 'prop-types';
import GlobalContext from './GlobalContext';

export default function ContextProvider({ children }) {
  const [userDataLogin, setUserDataLogin] = useState({
    email: '',
    password: '',
  });

  return (
    <GlobalContext.Provider
      value={ {
        userDataLogin,
        setUserDataLogin,
      } }
    >
      { children }
    </GlobalContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: P.node.isRequired,
};
