import React from 'react';

const login = () => (
  <div>
    <h1>LOGIN</h1>
    <form>
      <input
        type="email"
        name="email"
        placeholder="Email"
        id="email"
        data-testid="email-input"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        id="Password"
        data-testid="password-input"
      />
      <button
        type="button"
        data-testid="login-submit-btn"
      >
        Enter
      </button>
    </form>
  </div>);

export default login;
