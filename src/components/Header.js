import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ pageName }) {
  return (
    <div>
      <Link to="/profile">
        <img data-testid="profile-top-btn" src={ profileIcon } alt="profile icon" />
      </Link>
      <p data-testid="page-title">{ pageName }</p>
      <img data-testid="search-top-btn" src={ searchIcon } alt="search icon" />
    </div>
  );
}

Header.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default Header;
