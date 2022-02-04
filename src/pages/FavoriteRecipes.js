import React, { useState } from 'react';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';
import Header from '../components/Header';

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
        <FavoriteRecipeCard filter={ filter } />
      </main>
    </div>
  );
};

export default FavoriteRecipes;
