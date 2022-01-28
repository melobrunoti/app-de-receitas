import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

function Card() {
  const { searchBarData } = useContext(RecipesContext);
  const { pathname } = useLocation();
  const searchNumber = 12;
  const eleven = 11;
  let limitedArr = searchBarData;

  if (searchBarData.length > eleven) {
    limitedArr = searchBarData.slice(0, searchNumber);
  }

  return (
    <div>

      { limitedArr.map((item, index) => (
        <div
          key={ index }
          data-testid={ `${index}-recipe-card` }
        >
          <img
            src={ (pathname.includes('drinks') ? item.strDrinkThumb : item.strMealThumb) }
            alt={ (pathname.includes('drinks') ? item.strDrink : item.strMeal) }
            data-testid={ `${index}-card-img` }
          />
          <p
            data-testid={ `${index}-card-name` }
          >
            {(pathname.includes('drinks') ? item.strDrink : item.strMeal)}

          </p>
        </div>
      ))}
    </div>
  );
}

export default Card;

// strDrink
// strDrinkThumb
