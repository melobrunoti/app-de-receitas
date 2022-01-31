import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

function Card({ cards, path }) {
  const MAX_RENDER = 12;
  const history = useHistory();

  return (
    <div>
      { cards.filter((items, i) => i < MAX_RENDER).map((item, index) => (
        <button
          type="button"
          key={ index }
          data-testid={ `${index}-recipe-card` }
          onClick={ () => ((path.includes('drinks'))
            ? history.push(`/drinks/${item.idDrink}`)
            : history.push(`/foods/${item.idMeal}`)) }
        >
          <img
            src={ (path.includes('drinks')
              ? item.strDrinkThumb : item.strMealThumb) }
            alt={ (path.includes('drinks')
              ? item.strDrink : item.strMeal) }
            data-testid={ `${index}-card-img` }
          />
          <p
            data-testid={ `${index}-card-name` }
          >
            {(path.includes('drinks') ? item.strDrink : item.strMeal)}

          </p>
        </button>
      ))}

    </div>);
}

Card.propTypes = {
  cards: PropTypes.shape({
    filter: PropTypes.func,
  }).isRequired,
  path: PropTypes.shape({
    includes: PropTypes.func,
  }).isRequired,
};

export default Card;
