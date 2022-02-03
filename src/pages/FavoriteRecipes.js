import React from 'react';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';
import Header from '../components/Header';

const FavoriteRecipes = () => (
  <div>
    <Header pageName="Favorite Recipes" searchVisible={ false } />
    <main>
      <button
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
      <FavoriteRecipeCard />
    </main>
  </div>
);

export default FavoriteRecipes;
