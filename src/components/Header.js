// import React, { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

import './Header.css';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      isSearchVisible: false,
    };
  }

  handleClick = () => {
    const { isSearchVisible } = this.state;
    this.setState({
      isSearchVisible: !isSearchVisible,
    });
  }

  render() {
    const { pageName, searchVisible } = this.props;
    const { isSearchVisible } = this.state;
    return (
      <div className="header-container">
        <div className="header-icons-and-title">
          <Link to="/profile">
            <img data-testid="profile-top-btn" src={ profileIcon } alt="profile icon" />
          </Link>

          <p data-testid="page-title" className="header-title">{ pageName }</p>

          {searchVisible ? (
            <button type="button" onClick={ this.handleClick }>
              <img data-testid="search-top-btn" src={ searchIcon } alt="search icon" />
            </button>)
            : null}

        </div>
        {isSearchVisible ? (
          <input
            type="text"
            data-testid="search-input"
            className="header-input"
          />) : null}
      </div>
    );
  }
}

Header.propTypes = {
  pageName: PropTypes.string.isRequired,
  searchVisible: PropTypes.bool.isRequired,
};

export default Header;
