import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchDrinksApi, fetchFoodApi } from '../services/api';
import RecommendationCard from './ RecommendationCard';

/* import Card from './Card'; */

function DetailedCard({ card }) {
  const {
    strMeal,
    strMealThumb,
    strCategory,
    strInstructions,
    strYoutube,
    idMeal,
    idDrink,
    strDrink,
    strDrinkThumb } = card[0];
  const ingredientsArr = [];
  const history = useHistory();
  const { pathname } = useLocation();

  const [recommendations, setRecommendations] = useState();

  useEffect(() => {
    (async () => {
      if (pathname.includes('/foods')) {
        const response = await fetchDrinksApi();
        return setRecommendations(response);
      }
      const response = await fetchFoodApi();
      return setRecommendations(response);
    })();
  }, [pathname, setRecommendations]);

  Object.entries(card[0]).forEach((key) => {
    if (key[0].includes('strIngredient') && key[1]) ingredientsArr.push(key[1]);
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
        data-testid="recipe-photo"
      />
      <h2 data-testid="recipe-title">
        {(pathname.includes('/foods')) ? strMeal : strDrink}

      </h2>
      <button
        type="button"
        data-testid="share-btn"
      >
        Share
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        Favorite

      </button>
      <p data-testid="recipe-category">{strCategory}</p>
      {(pathname.includes('/foods')) && <iframe
        data-testid="video"
        width="340"
        src={ strYoutube.replace('watch?v=', 'embed/') }
        title="YouTube video player"
        frameBorder="0"
        allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      /> }
      <ul>
        {(ingredientsArr.length > 0) && ingredientsArr.map((item, index) => (
          <li
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ item }
          >
            {item}
          </li>))}
      </ul>
      <p data-testid="instructions">{strInstructions}</p>
      <div>
        { (recommendations && recommendations.length > 0)
       && <RecommendationCard
         cards={ recommendations }
         path={ pathname }
         MAX_RENDER={ 6 }
         history={ history }
       />}
      </div>

      <button
        type="button"
        data-testid="start-recipe-btn"
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
