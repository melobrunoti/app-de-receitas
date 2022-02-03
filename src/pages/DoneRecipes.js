import React, { useEffect, useState } from 'react';
import DoneRecipeCard from '../components/DoneRecipeCard';

import Header from '../components/Header';

function DoneRecipes() {
  const originalStorage = JSON.parse(localStorage.getItem('doneRecipes'));
  const [storage, setStorage] = useState(JSON.parse(localStorage.getItem('doneRecipes')));
  console.log(storage);

  const favoritess = [{
    id: '52771',
    type: 'food',
    nationality: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: '23/06/2020',
    tags: ['Pasta', 'Curry'],
  },
  {
    id: '178319',
    type: 'drink',
    nationality: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    doneDate: '23/06/2020',
    tags: [],
  }];

  useEffect(() => {
    localStorage.setItem('doneRecipes', JSON.stringify(favoritess));
  }, []);

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

      <DoneRecipeCard storage={ storage } />
      {console.log(originalStorage)}
    </div>
  );
}
export default DoneRecipes;
