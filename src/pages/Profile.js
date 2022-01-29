import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Profile = () => (
  <div>
    <Header pageName="Profile" searchVisible={ false } />
    <h1>Profile</h1>
    <p data-testid="profile-email">email</p>
    <button type="button" data-testid="profile-done-btn">Done Recipes</button>
    <button type="button" data-testid="profile-favorite-btn">Favorite Recipes</button>
    <button type="button" data-testid="profile-logout-btn">Logout</button>
    <Footer />
  </div>
);

export default Profile;
