import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import GlobalContext from '../context/GlobalContext';
import { setLocalStorage, getLocalStorage } from '../utils/localStorageAccess';

const HOST = process.env.REACT_APP_HOSTNAME || 'localhost';
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT || '3001';
const NOT_FOUND = 404;
const OK = 200;

export default function Login() {
  const navigate = useNavigate();
  const { setUserDataLogin } = useContext(GlobalContext);
  const [typedInfo, setTypedInfo] = useState({ email: '', password: '' });
  const [shouldRenderMessage, setShouldRenderMessage] = useState(false);
  const [invalidInfo, toggleInvalidInfo] = useState(true);
  const homePages = {
    customer: '/customer/products',
    seller: '/seller/orders',
  };

  const handleValidation = () => {
    const validRegex = /\S+@\S+\.\S+/;
    const minPasswordLength = 6;
    if (
      validRegex.test(typedInfo.email) && typedInfo.password.length >= minPasswordLength
    ) {
      toggleInvalidInfo(false);
    } else {
      toggleInvalidInfo(true);
    }
  };

  const saveOnLocalStorageAndGlobalState = (key, payload) => {
    setUserDataLogin(payload);
    setLocalStorage(key, payload);
  };

  const handleLogin = async () => {
    const res = await fetch(`http://${HOST}:${BACKEND_PORT}/login`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(typedInfo),
    });

    if (res.status === NOT_FOUND) {
      setShouldRenderMessage(true);
    }

    if (res.status === OK) {
      setShouldRenderMessage(false);
      const json = await res.json();
      const { user: { name, email, role, id }, token } = json;
      saveOnLocalStorageAndGlobalState('user', {
        name,
        email,
        role,
        token,
        id,
      });
      console.log(`homePages[role] - ${role}`);
      navigate(homePages[role]);
    }
  };

  useEffect(() => {
    const user = getLocalStorage();
    if (user) {
      console.log(`homePages[user.role] - ${user.role}`);
      navigate(homePages[user.role]);
    }
  }, []);

  useEffect(() => {
    handleValidation();
  }, [typedInfo]);

  const onChangeHandle = ({ target }) => {
    const { name, value } = target;
    setTypedInfo({
      ...typedInfo,
      [name]: value,
    });
  };

  const handleClick = () => {
    navigate('/register');
  };

  return (
    <div>
      <form>
        <label htmlFor="input-email">
          Login
          <input
            data-testid="common_login__input-email"
            id="input-email"
            type="text"
            name="email"
            value={ typedInfo.email }
            onChange={ onChangeHandle }
          />
        </label>
        <label htmlFor="input-password">
          Senha
          <input
            data-testid="common_login__input-password"
            id="input-password"
            name="password"
            type="password"
            value={ typedInfo.password }
            onChange={ onChangeHandle }
          />
        </label>
        <button
          data-testid="common_login__button-login"
          type="button"
          disabled={ invalidInfo }
          onClick={ handleLogin }
        >
          Login
        </button>
        <button
          data-testid="common_login__button-register"
          type="button"
          onClick={ handleClick }
        >
          Ainda não tenho conta
        </button>
      </form>
      <h1
        data-testid="common_login__element-invalid-email"
        hidden={ !shouldRenderMessage }
      >
        Msg de erro
      </h1>
    </div>
  );
}
