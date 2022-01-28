import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

function Login() {
  const { user, setUser } = useContext(RecipesContext);

  const { login } = user;
  const { email, password, disabled } = login;

  const validateForm = () => {
    const minCaractere = 6;
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?$/i;
    const validateEmail = regexEmail.test(String(email).toLowerCase());
    const validatePassword = password.length > minCaractere;
    if (validateEmail && validatePassword) {
      setUser({ login: { ...user.login, disabled: false } });
    } else {
      setUser({ login: { ...user.login, disabled: true } });
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({ login: { ...user.login, [name]: value } });
    validateForm();
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
          id="email"
          data-testid="email-input"
          onChange={ handleChange }
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          id="Password"
          data-testid="password-input"
          onChange={ handleChange }
        />
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ disabled }
        >
          Enter
        </button>
      </form>
    </div>);
}

export default Login;
