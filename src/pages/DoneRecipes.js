import React, { useContext } from 'react';
import DoneRecipeCard from '../components/DoneRecipeCard';

import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';

function DoneRecipes() {
  const originalStorage = JSON.parse(localStorage.getItem('doneRecipes'));
  const { doneRecipes, setDoneRecipes } = useContext(RecipesContext);

  const foodFilter = () => originalStorage
    .filter((recipe) => recipe.type === 'food')
    .map((foodRecipe) => setDoneRecipes([foodRecipe]));

  const drinkFilter = () => originalStorage
    .filter((recipe) => recipe.type === 'drink')
    .map((drinkRecipe) => setDoneRecipes([drinkRecipe]));

  const allFilter = () => setDoneRecipes(originalStorage);

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

      {(doneRecipes !== null && doneRecipes.length > 0)
      && <DoneRecipeCard storage={ doneRecipes } />}
    </div>
  );
}
export default DoneRecipes;
