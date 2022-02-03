import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
import notFavorite from '../images/whiteHeartIcon.svg';
import favorite from '../images/blackHeartIcon.svg';
import useIngredients from '../hooks/useIngredients';

function InProgressCard({
  id, thumb, ingredients, title, category, instructions, alcool }) {
  const { pathname } = useLocation();
  const [copied, setCopied] = useState(false);
  const { setFavoriteRecipe, checkFavorite } = useContext(RecipesContext);
  const [checkedIngredients, setCheckedIngredients] = useIngredients();
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);

    setCopied(true);
  };

  const chooseType = () => {
    if (pathname.includes('drinks')) {
      return 'drink';
    }
    return 'food';
  };

  const isAlcoolic = () => {
    if (pathname.includes('drinks')) {
      return alcool;
    }
    return '';
  };

  function isChecked(ingredient) {
    return checkedIngredients.includes(ingredient);
  }

  function toggle(ingredient) {
    if (isChecked(ingredient)) {
      setCheckedIngredients(checkedIngredients
        .filter((ing) => ing !== ingredient));
    } else {
      setCheckedIngredients(checkedIngredients.concat(ingredient));
    }
  }

  const changeFavorite = () => {
    const newFav = {
      id,
      type: chooseType(),
      nationality: '',
      category,
      alcoholicOrNot: isAlcoolic(),
      name: title,
      image: thumb,
    };
    if (!checkFavorite(id)) {
      return setFavoriteRecipe((prevState) => [...prevState, newFav]);
    }
    return setFavoriteRecipe((prevState) => (
      prevState.filter((recipe) => recipe.id !== id)));
  };

  return (
    <div>
      <img data-testid="recipe-photo" src={ thumb } alt={ title } />
      <h2 data-testid="recipe-title">{title}</h2>
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
        src={ checkFavorite(id) ? favorite : notFavorite }
        alt="favorite"
        data-testid="favorite-btn"
      />
      {
        (copied) && <span>Link copied!</span>
      }
      <p data-testid="recipe-category">{category}</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-step` }
          >
            <input
              type="checkbox"
              key={ index }
              /* data-testid={ `${index}-ingredient-step` } */
              checked={ isChecked(ingredient) }
              onChange={ () => toggle(ingredient) }

            />
            <span>{ ingredient }</span>
          </li>
        ))}
      </ul>
      <p />
      <p data-testid="instructions">{instructions}</p>
      <button
        data-testid="finish-recipe-btn"
        type="button"

      >
        Finish Recipe

      </button>
    </div>

  );
}

InProgressCard.propTypes = {
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  ingredients: PropTypes.instanceOf(Object).isRequired,
  instructions: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alcool: PropTypes.instanceOf(Object).isRequired,
};

export default InProgressCard;
