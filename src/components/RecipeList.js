import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import foodOrDrink from '../globalFunctions';
import { fetchDrinksApi,
  fetchFoodApi,
  fetchFoodCategories,
  fetchDrinksCategories,
  fetchByCategory,
} from '../services/api';
import Card from './Card';

function RecipeList() {
  const { pathname } = useLocation();
  const { searchBarData, setSearchBarData,
    filterIngredient } = useContext(RecipesContext);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const categoryLimiter = 5;

  const handleFilter = async ({ target }) => {
    if (filter === target.innerText || target.innerText === 'All') {
      setFilter('');
      return setFilteredRecipes([]);
    }
    const response = await fetchByCategory(target.innerText, pathname);
    setFilter(target.innerText);
    return setFilteredRecipes(response);
  };

  useEffect(() => {
    (async () => {
      foodOrDrink(fetchFoodApi, fetchDrinksApi, setSearchBarData, pathname);
    })();
  }, [setSearchBarData, pathname]);

  useEffect(() => {
    (async () => {
      foodOrDrink(fetchFoodCategories, fetchDrinksCategories, setCategories, pathname);
    })();
  }, [setCategories, pathname]);

  function chooseCards() {
    if (filterIngredient.length > 0) {
      return filterIngredient;
    }
    if (filteredRecipes.length > 0) {
      return filteredRecipes;
    }
    return searchBarData;
  }

  return (
    <div className="recipe-container">
      {(categories.length > 0) && categories.slice(0, categoryLimiter)
        .map(({ strCategory }) => (
          <button
            data-testid={ `${strCategory}-category-filter` }
            type="button"
            key={ strCategory }
            onClick={ (e) => handleFilter(e) }
          >
            {strCategory}
          </button>)) }
      <button
        data-testid="All-category-filter"
        type="button"
        onClick={ (e) => handleFilter(e) }
      >
        All

      </button>
      <div>
        { (searchBarData && searchBarData.length > 0)
        && <Card cards={ chooseCards() } path={ pathname } MAX_RENDER={ 12 } />}
      </div>

    </div>
  );
}

export default RecipeList;
