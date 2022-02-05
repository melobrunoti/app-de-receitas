import React, { useState } from 'react';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';
import Header from '../components/Header';

import '../styles/doneRecipes.css';
import '../styles/favoriteRecipes.css';

const FavoriteRecipes = () => {
  const [filter, setFilter] = useState('');

  function changeFilter({ id }) {
    switch (id) {
    case 'allBtn':
      return setFilter('');
    case 'foodBtn':
      return setFilter('food');
    case 'drinkBtn':
      return setFilter('drink');
    default:
      return filter;
    }
  }

  return (
    <div>
      <Header pageName="Favorite Recipes" searchVisible={ false } />
      <main>
        <div className="done-filter-container">
          <button
            id="allBtn"
            type="button"
            data-testid="filter-by-all-btn"
            onClick={ (e) => changeFilter(e.target) }
          >
            All
          </button>
          <button
            id="foodBtn"
            type="button"
            data-testid="filter-by-food-btn"
            onClick={ (e) => changeFilter(e.target) }
          >
            Food
          </button>
          <button
            id="drinkBtn"
            type="button"
            data-testid="filter-by-drink-btn"
            onClick={ (e) => changeFilter(e.target) }
          >
            Drinks
          </button>
        </div>

        <div className="favorite-container">
          <FavoriteRecipeCard filter={ filter } />
        </div>
      </main>
    </div>
  );
};

export default FavoriteRecipes;
