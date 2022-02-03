import React, { useState } from 'react';
import DoneRecipeCard from '../components/DoneRecipeCard';

import Header from '../components/Header';

function DoneRecipes() {
  const originalStorage = JSON.parse(localStorage.getItem('doneRecipes'));
  const [storage, setStorage] = useState(JSON.parse(localStorage.getItem('doneRecipes')));
  console.log(storage);

  const foodFilter = () => originalStorage
    .filter((recipe) => recipe.type === 'food')
    .map((foodRecipe) => setStorage([foodRecipe]));

  const drinkFilter = () => originalStorage
    .filter((recipe) => recipe.type === 'drink')
    .map((drinkRecipe) => setStorage([drinkRecipe]));

  const allFilter = () => setStorage(originalStorage);

  return (
    <div>
      <Header pageName="Done Recipes" searchVisible={ false } />
      <h1>Done Recipes</h1>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => allFilter() }
      >
        All
      </button>

      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => foodFilter() }
      >
        Food
      </button>

      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => drinkFilter() }
      >
        Drinks
      </button>

      {(storage !== null && storage.length > 0)
      && <DoneRecipeCard storage={ storage } />}
    </div>
  );
}
export default DoneRecipes;
