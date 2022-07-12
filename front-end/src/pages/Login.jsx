import React, { useState, useEffect } from 'react';

export default function Login() {
  const [typedInfo, setTypedInfo] = useState({ email: '', password: '' });
  const [invalidInfo, toggleInvalidInfo] = useState(true);

  const handleValidation = () => {
    const validRegex = /\S+@\S+\.\S+/;
    const minPasswordLength = 6;
    if (validRegex.test(typedInfo.email) && typedInfo.name.length >= minPasswordLength) {
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

  return (
    <div>
      <form action="">
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
        <button data-testid="common_login__button-login" type="submit">
          Login
        </button>
        <button data-testid="common_login__button-register" type="submit">
          Ainda não tenho conta
        </button>
      </form>
      <h1
        hidden={ invalidInfo }
        data-testid="common_login__element-invalid-email"
      >
        Msg de erro
      </h1>
    </div>
  );
}
