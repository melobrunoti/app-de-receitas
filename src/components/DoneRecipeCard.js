import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/doneRecipes.css';
import RecipesContext from '../context/RecipesContext';

function DoneRecipeCard({ filter }) {
  const { doneRecipes } = useContext(RecipesContext);
  const history = useHistory();

  const [copied, setCopied] = useState(false);

  const handleButton = (id, type) => {
    setCopied(true);
    const clipboard = type === 'food'
      ? navigator.clipboard.writeText(`http://localhost:3000/foods/${id}`)
      : navigator.clipboard.writeText(`http://localhost:3000/drinks/${id}`);

    return clipboard;
  };

  // eslint-disable-next-line sonarjs/cognitive-complexity
  const createCard = () => {
    if (doneRecipes.length > 0) {
      const filtered = (filter !== '')
        ? doneRecipes.filter((recipe) => recipe.type === filter) : doneRecipes;
      return (
        filtered.map((recipe, index) => (
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
                  {`${recipe.type === 'food'
                    ? recipe.nationality : ''} ${recipe.category}`}

                </p>

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

        ))
      );
    }
  };
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
  filter: PropTypes.instanceOf(Object).isRequired,
};

export default DoneRecipeCard;
