import React from 'react';
import PropTypes from 'prop-types';

import '../styles/returnBtn.css';

function ReturnButton({ push }) {
  return (
    <button
      type="button"
      className="return-btn"
      onClick={ push }
    >
      <i className="bi bi-arrow-left-circle" />
    </button>);
}

ReturnButton.propTypes = {
  push: PropTypes.func.isRequired,
};

export default ReturnButton;
