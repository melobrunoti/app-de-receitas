import PropTypes from 'prop-types';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

/* import Card from './Card'; */

function DetailedCard({ card }) {
  const {
    strMeal,
    strMealThumb,
    strCategory,
    strInstructions,
    idMeal,
    idDrink,
    strDrink,
    strDrinkThumb } = card[0];
  const acc = [];
  const history = useHistory();
  const { pathname } = useLocation();

  /* const [recommendations, setRecommendations] = useState(); */

  /*  const chooseApi = async () => {
    if (pathname.includes('/foods')) {
      const response = await fetchDrinksApi();
      return setRecommendations(response);
    }
    const response = await fetchFoodApi();
    return setRecommendations(response);
  }; */

  Object.entries(card[0]).forEach((key) => {
    if (key[0].includes('strIngredient') && key[1]) acc.push(key[1]);
  });

  const handleClick = () => {
    if (pathname.includes('/foods')) {
      history.push(`/foods/${idMeal}/in-progress`);
    }
    history.push(`/drinks/${idDrink}/in-progress`);
  };

  return (
    <div>
      <img
        src={ (pathname.includes('drinks')
          ? strDrinkThumb : strMealThumb) }
        alt={ (pathname.includes('drinks')
          ? strDrink : strMeal) }
      />
      <h2>{(pathname.includes('/foods')) ? strMeal : strDrink}</h2>
      <button
        type="button"
      >
        Share
      </button>
      <button
        type="button"
      >
        Favorite

      </button>
      <p>{strCategory}</p>
      <ul>
        {(acc.length > 0) && acc.map((item, index) => (
          <li
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ item }
          >
            {item}
          </li>))}
      </ul>
      <p>{strInstructions}</p>

      {/*       { (searchBarData.length > 0)
       && <Card cards={ searchBarData } path={ pathname } MAX_RENDER={ 6 } />} */}

      <button
        type="button"
        onClick={ () => handleClick() }
      >
        Start Recipe

      </button>
    </div>
  );
}

DetailedCard.propTypes = {
  card: PropTypes.instanceOf(Object).isRequired,
};
export default DetailedCard;
