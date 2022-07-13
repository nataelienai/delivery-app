import React from 'react';

export default function Register() {
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
          />
        </label>
        <label htmlFor="input-password">
          Email
          <input
            data-testid="common_register__input-email"
            id="input-email"
            name="email"
            type="text"
          />
        </label>
        <label htmlFor="input-password">
          Senha
          <input
            data-testid="common_register__input-password"
            id="input-password"
            name="password"
            type="text"
          />
        </label>
        <button
          data-testid="common_register__button-register"
          type="button"
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
