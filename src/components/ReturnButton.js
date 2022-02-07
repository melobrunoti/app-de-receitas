import React from 'react';
import PropTypes from 'prop-types';

function ReturnButton({ push }) {
  return (
    <button
      type="button"
      onClick={ push }
    >
      Voltar
    </button>);
}

ReturnButton.propTypes = {
  push: PropTypes.string.isRequired,
};

export default ReturnButton;
