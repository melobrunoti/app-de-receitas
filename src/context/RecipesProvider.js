import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
/* import fetchApiFoods from '../services/api'; */
import useLocalStorage from '../hooks/useLocalStorage';

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
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const [recommendations, setRecommendations] = useState();
  const [favoriteRecipes, setFavoriteRecipe] = useLocalStorage('favoriteRecipes', []);
  const [inProgressRecipes,
    setInProgressRecipes] = useLocalStorage('inProgressRecipes',
    { cocktails: {}, meals: {} });
  // https://designcode.io/react-hooks-handbook-uselocalstorage-hook

  const checkFavorite = (id) => favoriteRecipes.some((recipe) => recipe.id === id);

  const context = {
    user,
    setUser,
    searchBarData,
    setSearchBarData,
    recommendations,
    setRecommendations,
    favoriteRecipes,
    setFavoriteRecipe,
    checkFavorite,
    inProgressRecipes,
    setInProgressRecipes,
    checkedIngredients,
    setCheckedIngredients,

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
