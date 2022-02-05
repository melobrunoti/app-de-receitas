import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

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
          <div key={ index } className="favorite-individual-card">
            <input
              type="image"
              className="favorite-img"
              src={ recipe.image }
              data-testid={ `${index}-horizontal-image` }
              alt={ recipe.name }
              onClick={ () => redirect(recipe.type, recipe.id) }
              onKeyDown={ () => redirect(recipe.type, recipe.id) }
            />

            <button
              type="button"
              className="favorite-recipe-name"
              data-testid={ `${index}-horizontal-name` }
              onClick={ () => redirect(recipe.type, recipe.id) }
              onKeyDown={ () => redirect(recipe.type, recipe.id) }
            >
              { recipe.name }
            </button>

            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              {
                (recipe.type === 'food')
                  ? `${recipe.nationality} - ${recipe.category}`
                  : recipe.alcoholicOrNot
              }
            </p>
            <div className="favorite-share-btn-container">
              <button
                type="button"
                data-testid={ `${index}-horizontal-favorite-btn` }
                onClick={ () => unfavorite(recipe.id) }
              >
                <i className="bi bi-heart-fill" />
              </button>
              <button
                id={ recipe.id }
                type="button"
                data-testid={ `${index}-horizontal-share-btn` }
                onClick={ () => copyToClipboard(recipe.id, recipe.type) }
              >
                <i className="bi bi-share-fill" />
              </button>
            </div>

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
