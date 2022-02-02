import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
/* import fetchApiFoods from '../services/api'; */

const INITIAL_LOGIN = {
  login: {
    email: '',
    password: '',
    disabled: true,
  },
};

function RecipesProvider({ children }) {
  const [user, setUser] = useState(INITIAL_LOGIN);
  const [searchBarData, setSearchBarData] = useState([]);
  const [recommendations, setRecommendations] = useState();

  const context = {
    user,
    setUser,
    searchBarData,
    setSearchBarData,
    recommendations,
    setRecommendations,
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
