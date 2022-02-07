import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/doneRecipes.css';

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
    <div key={ index } className="individual-done-recipe-container">
      <input
        type="image"
        className="done-recipe-img"
        src={ recipe.image }
        alt="recipe image"
        data-testid={ `${index}-horizontal-image` }
        onClick={ () => (recipe.type === 'food'
          ? history.push(`/foods/${recipe.id}`)
          : history.push(`/drinks/${recipe.id}`)) }
      />
      <section className="done-recipe-content">
        <button
          type="button"
          className="done-recipe-title"
          data-testid={ `${index}-horizontal-name` }
          onClick={ () => (recipe.type === 'drink'
            ? history.push(`/drinks/${recipe.id}`)
            : history.push(`/foods/${recipe.id}`)) }
        >
          {recipe.name}

        </button>

        <section className="done-natio-tag">
          <p data-testid={ `${index}-horizontal-top-text` }>
            {`${recipe.type === 'food' ? recipe.nationality : ''} ${recipe.category}`}

          </p>

          {recipe.tags.slice(0, 2).map((tag, i) => (
            <p
              key={ i }
              data-testid={ `${index}-${tag}-horizontal-tag` }
            >
              {tag}

            </p>
          ))}

          <p data-testid={ `${index}-horizontal-top-text` }>
            {recipe.type === 'drink' ? recipe.alcoholicOrNot : null }
          </p>
        </section>

        <div className="done-share-date-container">
          <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
          <button
            type="button"
            className="done-share-btn"
            data-testid={ `${index}-horizontal-share-btn` }
            onClick={ () => handleButton(recipe.id, recipe.type) }
          >
            <i className="bi bi-share-fill" />
          </button>
        </div>
      </section>

    </div>

  ));
  return (
    <>
      {createCard()}
      {
        (copied) && <span>Link copied!</span>
      }
    </>
  );
}

DoneRecipeCard.propTypes = {
  storage: PropTypes.instanceOf(Object).isRequired,
};

export default DoneRecipeCard;
