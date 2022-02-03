import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

import shareIcon from '../images/shareIcon.svg';
import favorite from '../images/blackHeartIcon.svg';

function FavoriteRecipeCard() {
  const {
    // setFavoriteRecipe,
    favoriteRecipes,
  } = useContext(RecipesContext);

  function renderRecipes() {
    if (favoriteRecipes.length > 0) {
      return (
        favoriteRecipes.map((recipe, index) => (
          <div key={ index }>
            <img
              src={ recipe.image }
              data-testid={ `${index}-horizontal-image` }
              alt={ recipe.name }
            />
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              {
                (recipe.type === 'food')
                  ? `${recipe.nationality} - ${recipe.category}`
                  : recipe.alcoholicOrNot
              }
            </p>
            <h1 data-testid={ `${index}-horizontal-name` }>
              { recipe.name }
            </h1>
            <input
              type="image"
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              alt="compartilhar"
              title="Compartilhar"
            />
            <input
              type="image"
              data-testid={ `${index}-horizontal-favorite-btn` }
              src={ favorite }
              alt="favorita"
              title="Desfavoritar"
            />
          </div>
        ))
      );
    }
    return <h1>No favorite recipe.</h1>;
  }

  return renderRecipes();
}

export default FavoriteRecipeCard;
