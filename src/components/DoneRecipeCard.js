import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import shareIcon from '../images/shareIcon.svg';

function DoneRecipeCard({ storage }) {
  const history = useHistory();

  const [copied, setCopied] = useState(false);

  const copyToClipboard = (recipe) => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    console.log(recipe);
  };

  return storage.map((recipe, index) => (
    <div key={ index }>
      <input
        type="image"
        src={ recipe.image }
        alt="recipe image"
        style={ { width: '200px' } }
        data-testid={ `${index}-horizontal-image` }
        onClick={ () => (recipe.type === 'food'
          ? history.push(`/foods/${recipe.id}`)
          : history.push(`/drinks/${recipe.id}`)) }
      />

      <button
        type="button"
        data-testid={ `${index}-horizontal-name` }
        onClick={ () => (recipe.type === 'drink'
          ? history.push(`/drinks/${recipe.id}`)
          : history.push(`/foods/${recipe.id}`)) }
      >
        {recipe.name}

      </button>

      <p data-testid={ `${index}-horizontal-top-text` }>
        {`${recipe.type === 'food' ? recipe.nationality : null} - ${recipe.category}`}

      </p>

      <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>

      <input
        type="image"
        data-testid={ `${index}-horizontal-share-btn` }
        src={ shareIcon }
        alt="share"
        onClick={ () => copyToClipboard({ recipe }) }
      />
      {
        (copied) && <span>Link copied!</span>
      }

      {recipe.tags.map((tag) => (
        <p key={ index } data-testid={ `${index}-${tag}-horizontal-tag` }>{tag}</p>
      ))}

      <p data-testid={ `${index}-horizontal-top-text` }>
        {recipe.type === 'drink' ? recipe.alcoholicOrNot : null }

      </p>
    </div>

  ));
}

export default DoneRecipeCard;
