import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../components/Footer';
import Header from '../components/Header';

import '../styles/profile.css';

function Profile(props) {
  const history = useHistory();
  const { pathname } = useLocation();
  const [userEmail, setUserEmail] = useState('');
  useEffect(() => {
    if (localStorage.getItem('user')) {
      const getEmail = JSON.parse(localStorage.getItem('user')).email;
      setUserEmail(getEmail);
    }
  }, []);

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

  function renderFooter() {
    if (pathname === '/profile') return <Footer { ...props } />;
  }

  return (
    <div className="profile-container">
      <Header pageName="Profile" searchVisible={ false } />

      <p className="profile-email" data-testid="profile-email">{userEmail}</p>

      <div className="profile-btn-container">

        <button
          className="profile-btns"
          type="button"
          data-testid="profile-done-btn"
          onClick={ redirectDoneRecipes }
        >
          Done Recipes
        </button>

        <button
          className="profile-btns"
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ redirectFavoriteRecipes }
        >
          Favorite Recipes
        </button>

        <button
          className="profile-btns"
          type="button"
          data-testid="profile-logout-btn"
          onClick={ logout }
        >
          Logout

        </button>
      </div>

      { renderFooter()}
    </div>
  );
}

export default Profile;
