import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import DoneRecipeCard from '../components/DoneRecipeCard';
import Header2 from '../components/Header2';

import RecipesContext from '../context/RecipesContext';

import '../styles/doneRecipes.css';

function DoneRecipes() {
  const history = useHistory();
  const originalStorage = JSON.parse(localStorage.getItem('doneRecipes'));
  const { doneRecipes, setDoneRecipes } = useContext(RecipesContext);
  // console.log(storage);

  const foodFilter = () => originalStorage
    .filter((recipe) => recipe.type === 'food')
    .map((foodRecipe) => setDoneRecipes([foodRecipe]));

  const drinkFilter = () => originalStorage
    .filter((recipe) => recipe.type === 'drink')
    .map((drinkRecipe) => setDoneRecipes([drinkRecipe]));

  const allFilter = () => setDoneRecipes(originalStorage);

  return (
    <div>
      <Header2 pageName="done recipe" push={ () => history.push('/profile') } />

      <div className="done-filter-container">
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
      </div>

      <div className="done-recipe-container">
        {(doneRecipes !== null && doneRecipes.length > 0)
      && <DoneRecipeCard storage={ doneRecipes } />}
      </div>
    </div>
  );
}
export default DoneRecipes;
