import React, { useState, useEffect } from 'react';

export default function Register() {
  const [typedInfo, setTypedInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

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
        >
          Cadastrar
        </button>

        <h1
          data-testid="common_register__element-invalid_register"
        >
          Msg de erro
        </h1>
      </form>
    </div>
  );
}
