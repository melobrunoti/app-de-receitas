import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

import shareIcon from '../images/shareIcon.svg';
import favorite from '../images/blackHeartIcon.svg';

function FavoriteRecipeCard({ filter }) {
  const history = useHistory();
  const {
    setFavoriteRecipe,
    favoriteRecipes,
  } = useContext(RecipesContext);

  const [copied, setCopied] = useState(false);

  function copyToClipboard(id, type) {
    if (type === 'food') {
      const link = `http://localhost:3000/foods/${id}`;
      navigator.clipboard.writeText(link);
    } else {
      const link = `http://localhost:3000/drinks/${id}`;
      navigator.clipboard.writeText(link);
    }
    setCopied(true);
  }

  function unfavorite(id) {
    setFavoriteRecipe((prevState) => (
      prevState.filter((recipe) => recipe.id !== id)));
  }

  function redirect(type, id) {
    return ((type === 'food')
      ? history.push(`/foods/${id}`)
      : history.push(`/drinks/${id}`));
  }

  function renderRecipes() {
    if (favoriteRecipes.length > 0) {
      const filtered = (filter !== '')
        ? favoriteRecipes.filter((recipe) => recipe.type === filter) : favoriteRecipes;
      return (
        filtered.map((recipe, index) => (
          <div key={ index }>
            <input
              type="image"
              style={ { width: '100vw' } }
              src={ recipe.image }
              data-testid={ `${index}-horizontal-image` }
              alt={ recipe.name }
              onClick={ () => redirect(recipe.type, recipe.id) }
              onKeyDown={ () => redirect(recipe.type, recipe.id) }
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
            <button
              type="button"
              data-testid={ `${index}-horizontal-name` }
              onClick={ () => redirect(recipe.type, recipe.id) }
              onKeyDown={ () => redirect(recipe.type, recipe.id) }
            >
              { recipe.name }
            </button>
            <input
              id={ recipe.id }
              type="image"
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              alt="compartilhar"
              title="Compartilhar"
              onClick={ () => copyToClipboard(recipe.id, recipe.type) }
            />
            <input
              type="image"
              data-testid={ `${index}-horizontal-favorite-btn` }
              src={ favorite }
              alt="favorita"
              title="Desfavoritar"
              onClick={ () => unfavorite(recipe.id) }
            />
            {
              (copied) && <span>Link copied!</span>
            }
          </div>
        ))
      );
    }
    return <h1>No favorite recipe.</h1>;
  }

  return renderRecipes();
}

export default FavoriteRecipeCard;
