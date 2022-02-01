import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { fetchDrinksApi } from '../services/api';
import RecommendationCard from './ RecommendationCard';

/* import Card from './Card'; */

function DetailedFood({ card }) {
  const {
    strMeal,
    strMealThumb,
    strCategory,
    strInstructions,
    strYoutube,
    idMeal,
  } = card[0];
  const ingredientsArr = [];
  const history = useHistory();
  const { pathname } = useLocation();
  const { recommendations, setRecommendations } = useContext(RecipesContext);

  useEffect(() => {
    (async () => {
      const response = await fetchDrinksApi();
      return setRecommendations(response);
    })();
  }, [setRecommendations]);

  Object.entries(card[0]).forEach((key) => {
    if (key[0].includes('strIngredient') && key[1]) ingredientsArr.push(key[1]);
  });

  const handleClick = () => {
    history.push(`/foods/${idMeal}/in-progress`);
  };

  return (
    <div>
      <img
        src={ strMealThumb }
        alt={ strMeal }
        data-testid="recipe-photo"
      />
      <h2 data-testid="recipe-title">
        { strMeal}
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
      <iframe
        data-testid="video"
        width="340"
        src={ strYoutube.replace('watch?v=', 'embed/') }
        title="YouTube video player"
        frameBorder="0"
        allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
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

DetailedFood.propTypes = {
  card: PropTypes.instanceOf(Object).isRequired,
};
export default DetailedFood;
