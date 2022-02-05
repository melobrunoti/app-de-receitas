import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

function Card({ cards, path, MAX_RENDER }) {
  const history = useHistory();

  return (
    <div className="card-container">
      { cards.filter((items, i) => i < MAX_RENDER).map((item, index) => (
        <div key="i" className="individual-card">
          <button
            className="card-btn"
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
        </div>

      ))}

    </div>);
}

Card.propTypes = {
  cards: PropTypes.instanceOf(Object).isRequired,
  path: PropTypes.instanceOf(Object).isRequired,
  MAX_RENDER: PropTypes.number.isRequired,
};

export default Card;
