import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

function Login() {
  const { user, setUser } = useContext(RecipesContext);
  const history = useHistory();
  const { login } = user;
  const { email, password } = login;
  const minNumber = 6;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({ login: { ...user.login, [name]: value } });
  };

  const handleClick = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/foods');
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
          onClick={ () => handleClick() }
        >
          Enter
        </button>
      </form>
    </div>);
}

export default Login;
