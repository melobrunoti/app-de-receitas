import React from 'react';
import { useHistory } from 'react-router-dom';

function RecommendationCard() {
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

    </div>
  );
}

export default RecommendationCard;
