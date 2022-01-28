import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
/* import fetchApiFoods from '../services/api'; */

function RecipesProvider({ children }) {
  const [searchBarData, setSearchBarData] = useState([]);
  const context = {
    searchBarData,
    setSearchBarData };

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
