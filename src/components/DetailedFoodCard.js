import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { fetchDrinksApi } from '../services/api';
import RecommendationCard from './ RecommendationCard';
// import notFavorite from '../images/whiteHeartIcon.svg';
// import favorite from '../images/blackHeartIcon.svg';
import { ingredients } from '../globalFunctions';

/* import Card from './Card'; */

function DetailedFoodCard({ card }) {
  const { strMeal,
    strMealThumb,
    strCategory,
    strInstructions,
    strYoutube,
    idMeal,
    strArea } = card[0];

  const [copied, setCopied] = useState(false);

  const history = useHistory();
  const { pathname } = useLocation();
  const {
    recommendations,
    setRecommendations,
    setFavoriteRecipe, checkFavorite } = useContext(RecipesContext);

  useEffect(() => {
    (async () => {
      const response = await fetchDrinksApi();
      return setRecommendations(response);
    })();
  }, [setRecommendations]);

  const handleClick = () => {
  /*   const local = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!local.meals[idMeal]) {
      local.meals[idMeal] = [];
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(local));
    console.log(local); */
    history.push(`/foods/${idMeal}/in-progress`);
  };

  const renderButton = () => {
    const local = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!local.meals[idMeal]) {
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
        </div>);
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

  /* const setStorage = () => {
    if (!JSON.parse(localStorage.getItem('inProgressRecipes'))) {
      localStorage
        .setItem('inProgressRecipes', JSON.stringify({ cocktails: {}, meals: {} }));
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
    if (!localStorage.getItem('favoriteRecipes')) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }

    return renderButton();
  }; */
  const setStorage = () => renderButton();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);

    setCopied(true);
  };

  const changeFavorite = () => {
    const newFav = {
      id: idMeal,
      type: 'food',
      nationality: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
    };
    if (!checkFavorite(idMeal)) {
      return setFavoriteRecipe((prevState) => [...prevState, newFav]);
    }
    return setFavoriteRecipe((prevState) => (
      prevState.filter((recipe) => recipe.id !== idMeal)));
  };

  return (
    <div className="details-food-container">
      <img
        className="food-image"
        src={ strMealThumb }
        alt={ strMeal }
        data-testid="recipe-photo"
      />
      <div className="recipe-container">
        <div className="title-container">
          <h2 data-testid="recipe-title">
            { strMeal}
          </h2>

          <button
            type="button"
            id="favorite-btn"
            onClick={ () => changeFavorite() }
            data-testid="favorite-btn"
          >
            {checkFavorite(idMeal)
              ? <i className="bi bi-heart-fill" /> : <i className="bi bi-heart" /> }
          </button>
          <button
            type="button"
            id="share-btn"
            data-testid="share-btn"
            onClick={ () => copyToClipboard() }
          >
            <i className="bi bi-share-fill" />
          </button>
        </div>
        {
          (copied) && <span>Link copied!</span>
        }

        <p className="category-title" data-testid="recipe-category">{strCategory}</p>

        <iframe
          className="details-video"
          data-testid="video"
          width="340"
          src={ strYoutube.replace('watch?v=', 'embed/') }
          title="YouTube video player"
          frameBorder="0"
          allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
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
        { (recommendations && recommendations.length > 0)
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
    </div>
  );
}

DetailedFoodCard.propTypes = {
  card: PropTypes.instanceOf(Object).isRequired,
};
export default DetailedFoodCard;
