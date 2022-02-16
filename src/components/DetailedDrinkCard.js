import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { fetchFoodApi } from '../services/api';
import RecommendationCard from './ RecommendationCard';
import { ingredients } from '../globalFunctions';

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
  const [copied, setCopied] = useState(false);
  const { pathname } = useLocation();
  const {
    recommendations,
    setRecommendations,
    setFavoriteRecipe, checkFavorite } = useContext(RecipesContext);

  useEffect(() => {
    (async () => {
      const response = await fetchFoodApi();
      return setRecommendations(response);
    })();
  }, [setRecommendations]);

  const handleClick = () => {
    /*     const local = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!local.cocktails[idDrink]) {
      local.cocktails[idDrink] = [];
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(local)); */
    history.push(`/drinks/${idDrink}/in-progress`);
  };

  const renderButton = () => {
    const local = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!local.cocktails[idDrink]) {
      return (
        <div className="start-button-container">
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
    return (
      <div className="start-button-container">
        <button
        type="button"
        className="start-button"
        data-testid="start-recipe-btn"
        onClick={ () => handleClick() }
        >
        Continue Recipe

       </button>
      </div>
      );
  };

  const setStorage = () => renderButton();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);

    setCopied(true);
  };

  const changeFavorite = () => {
    const newFav = {
      id: idDrink,
      type: 'drink',
      nationality: '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
    };
    if (!checkFavorite(idDrink)) {
      return setFavoriteRecipe((prevState) => [...prevState, newFav]);
    }
    return setFavoriteRecipe((prevState) => (
      prevState.filter((recipe) => recipe.id !== idDrink)));
  };

  return (
    <div className="details-drink-container">
      <img
        className="drink-image"
        src={ strDrinkThumb }
        alt={ strDrink }
        data-testid="recipe-photo"
      />
      <div className="recipe-container">
        <div className="title-container">
          <h2 data-testid="recipe-title">
            {strDrink}
          </h2>

          <button
            type="button"
            id="favorite-btn"
            onClick={ () => changeFavorite() }
            data-testid="favorite-btn"
          >
            { checkFavorite(idDrink)
              ? <i className="bi bi-heart-fill" /> : <i className="bi bi-heart" /> }
          </button>
          <button
            type="button"
            data-testid="share-btn"
            onClick={ () => copyToClipboard() }
          >
            <i className="bi bi-share-fill" />
          </button>
        </div>

        {
          (copied) && <span>Link copied!</span>
        }
        <div data-testid="recipe-category">
          <p>{strCategory}</p>

          <p>{strAlcoholic}</p>
        </div>
        <ul>
          { ingredients(card[0]).map((item, index) => (
            <li
              data-testid={ `${index}-ingredient-name-and-measure` }
              key={ item }
            >
              {item}
            </li>))}
        </ul>
        <p className="instructions" data-testid="instructions">{strInstructions}</p>
      </div>

      <div className="carrousel">
        <p>Recommendations: </p>
        {(recommendations && recommendations.length > 0)
          && <RecommendationCard
            cards={ recommendations }
            path={ pathname }
            MAX_RENDER={ 6 }
            history={ history }
          />}
      </div>
      {
        setStorage()
      }
      {/* {(local) ? renderButton() : (
        <button
          className="start-button"
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => handleClick() }
        >
          Start Recipe

        </button>)} */}
    </div>
  );
}

DetailedDrinkCard.propTypes = {
  card: PropTypes.instanceOf(Object).isRequired,
};

export default DetailedDrinkCard;
