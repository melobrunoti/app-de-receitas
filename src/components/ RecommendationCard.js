import PropTypes from 'prop-types';
import React from 'react';

function RecommendationCard({ cards, history, path, MAX_RENDER }) {
  return (
    <div className="recommendation-container">
      { cards.filter((items, i) => i < MAX_RENDER).map((item, index) => (
        <button
          type="button"
          key={ index }
          data-testid={ `${index}-recomendation-card` }
          onClick={ () => ((path.includes('foods'))
            ? history.push(`/drinks/${item.idDrink}`)
            : history.push(`/foods/${item.idMeal}`)) }
        >
          <img
            src={ (path.includes('foods')
              ? item.strDrinkThumb : item.strMealThumb) }
            alt={ (path.includes('foods')
              ? item.strDrink : item.strMeal) }
          />
          <p
            data-testid={ `${index}-recomendation-title` }
          >
            {(path.includes('foods') ? item.strDrink : item.strMeal)}

          </p>
        </button>
      ))}

    </div>);
}

RecommendationCard.propTypes = {
  cards: PropTypes.instanceOf(Object).isRequired,
  path: PropTypes.string.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  MAX_RENDER: PropTypes.number.isRequired,
};

export default RecommendationCard;
