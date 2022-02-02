import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { fetchFoodApi } from '../services/api';
import RecommendationCard from './ RecommendationCard';
import shareIcon from '../images/shareIcon.svg';
import notFavorite from '../images/whiteHeartIcon.svg';
import favorite from '../images/blackHeartIcon.svg';
import { ingredients } from '../globalFunctions';

function DetailedDrinkCard({ card }) {
  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strInstructions,
    idDrink,
    strAlcoholic,
    strArea,
  } = card[0];

  const history = useHistory();
  const [favoriteRecipe, setFavoriteRecipe] = useState(false);
  const [copied, setCopied] = useState(false);

  const { pathname } = useLocation();
  const { recommendations, setRecommendations } = useContext(RecipesContext);

  useEffect(() => {
    (async () => {
      const response = await fetchFoodApi();
      return setRecommendations(response);
    })();
  }, [setRecommendations]);

  const handleClick = () => {
    const local = JSON.parse(localStorage.getItem('inProgressRecipes'));
    local.cocktails[idDrink] = ingredients(card[0]);
    localStorage.setItem('inProgressRecipes', JSON.stringify(local));
    history.push(`/drinks/${idDrink}/in-progress`);
  };

  const renderButton = () => {
    const local = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!local.cocktails[idDrink]) {
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

  const setStorage = () => {
    if (!JSON.parse(localStorage.getItem('inProgressRecipes'))) {
      localStorage
        .setItem('inProgressRecipes', JSON.stringify({ cocktails: {}, meals: {} }));
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
    if (!localStorage.getItem('favoriteRecipes')) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }

    return renderButton();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);

    setCopied(true);
  };

  const changeFavorite = () => {
    const localRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

    if (favoriteRecipe) {
      const newFavorites = localRecipes.filter((recipe) => recipe.id !== idDrink);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
    } else {
      const newFav = {
        id: idDrink,
        type: 'drink',
        nationality: strArea,
        category: strCategory,
        alcoholicOrNot: strAlcoholic,
        name: strDrink,
        image: strDrinkThumb,
      };
      localRecipes.push(newFav);
      localStorage.setItem('favoriteRecipes', JSON.stringify(localRecipes));
    }
    setFavoriteRecipe(!favoriteRecipe);
  };

  return (
    <div>
      <img
        src={ strDrinkThumb }
        alt={ strDrink }
        data-testid="recipe-photo"
      />
      <h2 data-testid="recipe-title">
        {strDrink}
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
        src={ favoriteRecipe ? favorite : notFavorite }
        alt="favorite"
        data-testid="favorite-btn"
      />
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
      <p data-testid="instructions">{strInstructions}</p>
      <div className="carrousel">
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
