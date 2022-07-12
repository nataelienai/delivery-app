import React from 'react';

export default function Login() {
  return (
    <div>
      <form action="">
        <label htmlFor="input-email">
          Login
          <input
            data-testid="common_login__input-email"
            id="input-email"
            type="text"
          />
        </label>
        <label htmlFor="input-password">
          Senha
          <input
            data-testid="common_login__input-password"
            id="input-password"
            type="text"
          />
        </label>
        <button data-testid="common_login__button-login" type="submit">
          Login
        </button>
        <button data-testid="common_login__button-register" type="submit">
          Ainda não tenho conta
        </button>
      </form>
      <h1 data-testid="common_login__element-invalid-email">Msg de erro</h1>
    </div>

  );
}
