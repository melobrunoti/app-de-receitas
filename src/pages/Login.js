import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

function Login() {
  const { user, setUser } = useContext(RecipesContext);

  const { login } = user;
  const { email, password } = login;
  const minNumber = 6;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({ login: { ...user.login, [name]: value } });
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
          disabled={ password.length <= minNumber || !email.match(/\S+@\S+\.\S+/) }
        >
          Enter
        </button>
      </form>
    </div>);
}

export default Login;
