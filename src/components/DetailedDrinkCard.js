import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { fetchFoodApi } from '../services/api';
import RecommendationCard from './ RecommendationCard';

function DetailedDrinkCard({ card }) {
  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strInstructions,
    idDrink,
    strAlcoholic,
  } = card[0];

  const history = useHistory();
  const ingredientsArr = [];
  const { pathname } = useLocation();
  const { recommendations, setRecommendations } = useContext(RecipesContext);
  const measureArr = [];

  useEffect(() => {
    (async () => {
      const response = await fetchFoodApi();
      return setRecommendations(response);
    })();
  }, [setRecommendations]);

  const handleClick = () => {
    history.push(`/drinks/${idDrink}/in-progress`);
  };

  Object.entries(card[0]).forEach((key) => {
    if (key[0].includes('strIngredient') && key[1]) ingredientsArr.push(key[1]);
  });

  Object.entries(card[0]).forEach((key) => {
    if (key[0].includes('strMeasure') && key[1]) measureArr.push(key[1]);
  });

  return (
    <div>
      <img
        src={ strDrinkThumb }
        alt={ strDrink }
        data-testid="recipe-photo"
      />
      <h2 data-testid="recipe-title">
        { strDrink }
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

      <div data-testid="recipe-category">
        <p>{strCategory}</p>

        <p>{strAlcoholic}</p>
      </div>
      <ul>
        {(ingredientsArr.length > 0) && ingredientsArr.map((item, index) => (
          <li
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ item }
          >
            {item}
            { measureArr[index] }
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

      <button
        className="start-button"
        type="button"
        data-testid="start-recipe-btn"
        onClick={ () => handleClick() }
      >
        Start Recipe

      </button>
    </div>
  );
}

DetailedDrinkCard.propTypes = {
  card: PropTypes.instanceOf(Object).isRequired,
};

export default DetailedDrinkCard;
