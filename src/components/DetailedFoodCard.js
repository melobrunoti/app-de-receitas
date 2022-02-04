import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { fetchDrinksApi } from '../services/api';
import RecommendationCard from './ RecommendationCard';
import shareIcon from '../images/shareIcon.svg';
import notFavorite from '../images/whiteHeartIcon.svg';
import favorite from '../images/blackHeartIcon.svg';
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
        onClick={ () => copyToClipboard() }
      >
        <img src={ shareIcon } alt="share" />
      </button>
      <input
        type="image"
        onClick={ () => changeFavorite() }
        src={ checkFavorite(idMeal) ? favorite : notFavorite }
        alt="favorite"
        data-testid="favorite-btn"
      />
      {
        (copied) && <span>Link copied!</span>
      }
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
        { ingredients(card[0]).map((item, index) => (
          <li
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ item }
          >
            {item}
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