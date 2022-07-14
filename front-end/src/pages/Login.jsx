import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import GlobalContext from '../context/GlobalContext';
import { setLocalStorage } from '../utils/localStorageAccess';

export default function Login() {
  const navigate = useNavigate();
  const { setUserDataLogin } = useContext(GlobalContext);
  const [typedInfo, setTypedInfo] = useState({ email: '', password: '' });
  const [invalidInfo, toggleInvalidInfo] = useState(true);

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

  const saveOnLocalStorageAndGlobalState = (key, payload) => {
    setUserDataLogin(payload);
    setLocalStorage(key, payload);
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
            type="text"
            value={ typedInfo.password }
            onChange={ onChangeHandle }
          />
        </label>
        <button
          data-testid="common_login__button-login"
          type="button"
          disabled={ invalidInfo }
          onClick={ () => saveOnLocalStorageAndGlobalState('user', typedInfo) }
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
      >
        Msg de erro
      </h1>
    </div>
  );
}
