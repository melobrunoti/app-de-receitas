import React from 'react';

function ReturnButton({ push }) {
  return (
    <button
      type="button"
      onClick={ push }
    >
      Voltar
    </button>);
}

export default ReturnButton;
