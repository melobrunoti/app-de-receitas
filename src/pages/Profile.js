import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  const [userEmail, setUserEmail] = useState('');
  useEffect(() => {
    if (localStorage.getItem('user')) {
      const getEmail = JSON.parse(localStorage.getItem('user')).email;
      setUserEmail(getEmail);
    }
  }, []);

  const history = useHistory();

  const redirectDoneRecipes = () => {
    history.push('/done-recipes');
  };

  const redirectFavoriteRecipes = () => {
    history.push('/favorite-recipes');
  };

  const logout = () => {
    history.push('/');
    localStorage.clear();
  };

  return (
    <div>
      <Header pageName="Profile" searchVisible={ false } />
      <h1>Profile</h1>

      <p data-testid="profile-email">{userEmail}</p>

      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ redirectDoneRecipes }
      >
        Done Recipes
      </button>

      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ redirectFavoriteRecipes }
      >
        Favorite Recipes
      </button>

      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ logout }
      >
        Logout

      </button>
      <Footer />
    </div>
  );
}

export default Profile;
