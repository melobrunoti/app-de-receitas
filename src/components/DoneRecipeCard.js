import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import shareIcon from '../images/shareIcon.svg';

function DoneRecipeCard({ storage }) {
  const history = useHistory();

  const [copied, setCopied] = useState(false);

  const handleButton = (id, type) => {
    setCopied(true);
    const clipboard = type === 'food'
      ? navigator.clipboard.writeText(`http://localhost:3000/foods/${id}`)
      : navigator.clipboard.writeText(`http://localhost:3000/drinks/${id}`);

    return clipboard;
  };

  const createCard = () => storage.map((recipe, index) => (
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
        {`${recipe.type === 'food' ? recipe.nationality : ''} - ${recipe.category}`}

      </p>

      <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>

      <input
        type="image"
        data-testid={ `${index}-horizontal-share-btn` }
        src={ shareIcon }
        alt="share"
        onClick={ () => handleButton(recipe.id, recipe.type) }
      />

      {(recipe.tags && recipe.tags.length > 0) && recipe.tags.map((tag, i) => (
        <p key={ i } data-testid={ `${index}-${tag}-horizontal-tag` }>{tag}</p>
      ))}

      <p data-testid={ `${index}-horizontal-top-text` }>
        {recipe.type === 'drink' ? recipe.alcoholicOrNot : null }

      </p>
    </div>

  ));
  return (
    <div>
      {createCard()}
      {
        (copied) && <span>Link copied!</span>
      }
      {/*  {storage.map((item) => <h1 key={ item.name }>{item.date}</h1>)} */}
    </div>
  );
}

DoneRecipeCard.propTypes = {
  storage: PropTypes.instanceOf(Object).isRequired,
};

export default DoneRecipeCard;
