import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { fetchDrinksApi } from '../services/api';
import RecommendationCard from './ RecommendationCard';

/* import Card from './Card'; */

function DetailedFoodCard({ card }) {
  const {
    strMeal,
    strMealThumb,
    strCategory,
    strInstructions,
    strYoutube,
    idMeal,
  } = card[0];
  const ingredientsArr = [];
  const local = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const measureArr = [];
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

  Object.entries(card[0]).forEach((key) => {
    if (key[0].includes('strMeasure') && key[1]) measureArr.push(key[1]);
  });

  const handleClick = () => {
    if (local) {
      local.meals[idMeal] = ingredientsArr;
      localStorage.setItem('inProgressRecipes', JSON.stringify(local));
      history.push(`/drinks/${idMeal}/in-progress`);
    }
    localStorage
      .setItem('inProgressRecipes', JSON.stringify({ cocktails: {}, meals: {} }));
  };

  const renderButton = () => {
    if (!local.meals[idMeal]) {
      return (
        <button
          className="start-button"
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => handleClick() }
        >
          Start Recipe

        </button>);
    }
    return (
      <button
        type="button"
        className="start-button"
        data-testid="start-recipe-btn"
        onClick={ () => handleClick() }
      >
        Continue Recipe

      </button>);
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
            {measureArr[index]}
          </li>))}
      </ul>
      <p data-testid="instructions">{strInstructions}</p>
      <div className="carrousel">
        { (recommendations && recommendations.length > 0)
       && <RecommendationCard
         cards={ recommendations }
         path={ pathname }
         MAX_RENDER={ 6 }
         history={ history }
       />}
      </div>
      {(local) ? renderButton() : (
        <button
          className="start-button"
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => handleClick() }
        >
          Start Recipe

        </button>)}
    </div>
  );
}

DetailedFoodCard.propTypes = {
  card: PropTypes.instanceOf(Object).isRequired,
};
export default DetailedFoodCard;
