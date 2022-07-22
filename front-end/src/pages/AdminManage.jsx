import React, { useState, useContext, useEffect } from 'react';
import AdminHeader from '../components/AdminHeader';
import GlobalContext from '../context/GlobalContext';
import { getLocalStorage, setLocalStorage } from '../utils/localStorageAccess';

const HOST = process.env.REACT_APP_HOSTNAME || 'localhost';
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT || '3001';
const CREATED = 201;
const CONFLICT = 409;

export default function AdminManage() {
  const { setUserDataLogin } = useContext(GlobalContext);

  const [typedInfo, setTypedInfo] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
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
    const res = await fetch(`http://${HOST}:${BACKEND_PORT}/users`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: getLocalStorage().token,
      },
      method: 'POST',
      body: JSON.stringify(typedInfo),
    });

    if (res.status === CREATED) {
      const { name, email, token, id } = await res.json();
      setUserDataLogin({ name, email, role, id, token });
      saveOnLocalStorageAndGlobalState('admin', {
        id,
        name,
        email,
        role,
        token,
      });
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
    <main>
      <AdminHeader />
      <h3>Cadastrar novo usuário</h3>
      <form>
        <label htmlFor="input-name">
          Nome
          <input
            data-testid="admin_manage__input-name"
            id="input-name"
            type="text"
            name="name"
            value={ typedInfo.name }
            onChange={ onChangeHandle }
          />
        </label>
        <label htmlFor="input-email">
          Email
          <input
            data-testid="admin_manage__input-email"
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
            data-testid="admin_manage__input-password"
            id="input-password"
            name="password"
            type="password"
            value={ typedInfo.password }
            onChange={ onChangeHandle }
          />
        </label>
        <label htmlFor="input-type">
          Tipo
          <select
            data-testid="admin_manage__select-role"
            id="input-type"
            name="role"
            value={ typedInfo.role }
            onChange={ onChangeHandle }
          >
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="administrator">Administrador</option>
          </select>
        </label>
        <button
          data-testid="admin_manage__button-register"
          type="button"
          disabled={ invalidInfo }
          onClick={ handleRegister }
        >
          Cadastrar
        </button>
        <h1
          data-testid="admin_manage__element-invalid_register"
          hidden={ !shouldRenderMessage }
        >
          Dados inválidos
        </h1>
      </form>
    </main>
  );
}
