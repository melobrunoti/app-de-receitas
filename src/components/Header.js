// import React, { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Header.css';
import SearchBar from './SearchBar';

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
            <i className="bi bi-person-circle" />
          </Link>

          <p data-testid="page-title" className="header-title">{ pageName }</p>

          {searchVisible ? (
            <button type="button" onClick={ this.handleClick }>
              <i data-testid="search-top-btn" className="bi bi-search" />
            </button>)
            : null}

        </div>
        {isSearchVisible ? (
          <SearchBar />) : null}
      </div>
    );
  }
}

Header.propTypes = {
  pageName: PropTypes.string.isRequired,
  searchVisible: PropTypes.bool.isRequired,
};

export default Header;
