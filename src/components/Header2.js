import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/header2.css';

function Header2({ pageName, push }) {
  return (
    <header className="header2-container">
      <button
        type="button"
        className="return-btn-header2"
        onClick={ push }
      >
        <i className="bi bi-arrow-left-circle" />
      </button>

      <p className="header2-page-name">{pageName}</p>

      <Link to="/profile" className="header2-icon">
        <i className="bi bi-person-circle header2-icon" />
      </Link>
    </header>
  );
}

Header2.propTypes = {
  pageName: PropTypes.string.isRequired,
  push: PropTypes.func.isRequired,
};

export default Header2;
