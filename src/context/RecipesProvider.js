import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

const INITIAL_LOGIN = {
  login: {
    email: '',
    password: '',
    disabled: true,
  },
};

function RecipesProvider({ children }) {
  const [user, setUser] = useState(INITIAL_LOGIN);

  const context = {
    user,
    setUser,
  };

  return (
    <RecipesContext.Provider value={ context }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
