import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import GlobalContext from '../context/GlobalContext';
import { setLocalStorage } from '../utils/localStorageAccess';

const HOST = process.env.REACT_APP_HOSTNAME || 'localhost';
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT || '3001';
const CONFLICT = 409;
const CREATED = 201;

export default function Register() {
  const navigate = useNavigate();
  const { setUserDataLogin } = useContext(GlobalContext);
  const [typedInfo, setTypedInfo] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [shouldRenderMessage, setShouldRenderMessage] = useState(false);

  const [invalidInfo, toggleInvalidInfo] = useState(true);

  const handleValidation = () => {
    const validRegex = /\S+@\S+\.\S+/;
    const minPasswordLength = 6;
    const minNameLength = 12;
    if (
      validRegex.test(typedInfo.email)
        && typedInfo.password.length >= minPasswordLength
        && typedInfo.name.length >= minNameLength
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

  const handleRegister = async () => {
    const res = await fetch(`http://${HOST}:${BACKEND_PORT}/register`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(typedInfo),
    });

    if (res.status === CREATED) {
      const { name, email, token, id } = await res.json();
      setUserDataLogin({ name, email, role: 'customer', id, token });
      saveOnLocalStorageAndGlobalState('user', {
        id,
        name,
        email,
        role: 'customer',
        token,
      });
      navigate('/customer/products');
    }

    if (res.status === CONFLICT) {
      setShouldRenderMessage(true);
    }
  };

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

  return (
    <div>
      <form>
        <label htmlFor="input-name">
          Nome
          <input
            data-testid="common_register__input-name"
            id="input-name"
            type="text"
            name="name"
            value={ typedInfo.name }
            onChange={ onChangeHandle }
          />
        </label>
        <label htmlFor="input-password">
          Email
          <input
            data-testid="common_register__input-email"
            id="input-email"
            name="email"
            type="text"
            value={ typedInfo.email }
            onChange={ onChangeHandle }
          />
        </label>
        <label htmlFor="input-password">
          Senha
          <input
            data-testid="common_register__input-password"
            id="input-password"
            name="password"
            type="text"
            value={ typedInfo.password }
            onChange={ onChangeHandle }
          />
        </label>
        <button
          data-testid="common_register__button-register"
          type="button"
          disabled={ invalidInfo }
          onClick={ handleRegister }
        >
          Cadastrar
        </button>
      </form>
      <h1
        data-testid="common_register__element-invalid_register"
        hidden={ !shouldRenderMessage }
      >
        Msg de erro
      </h1>
    </div>
  );
}
