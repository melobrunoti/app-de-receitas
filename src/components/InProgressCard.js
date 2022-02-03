import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
import notFavorite from '../images/whiteHeartIcon.svg';
import favorite from '../images/blackHeartIcon.svg';
import useIngredients from '../hooks/useIngredients';

function InProgressCard({
  id, thumb, ingredients, title, category, instructions, alcool, nationality }) {
  const history = useHistory();
  const { pathname } = useLocation();
  const [copied, setCopied] = useState(false);
  const { setFavoriteRecipe, checkFavorite } = useContext(RecipesContext);
  const [checkedIngredients, setCheckedIngredients] = useIngredients();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href.split('/in')[0]);
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

  const hasNationality = () => {
    if (nationality) {
      return nationality;
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
      nationality: hasNationality(),
      category,
      alcoholicOrNot: isAlcoolic(),
      name: title,
      image: thumb,
    };
    console.log(newFav);
    console.log(hasNationality());
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

      {ingredients.map((ingredient, index) => (
        <label
          htmlFor={ ingredient[1] }
          key={ index }
          data-testid={ `${index}-ingredient-step` }
        >
          <input
            onChange={ () => toggle(ingredient) }
            value={ ingredient }
            type="checkbox"
            key={ index }
            checked={ isChecked(ingredient) }

          />
          { ingredient }
        </label>

      ))}
      <p />
      <p data-testid="instructions">{instructions}</p>
      <button
        data-testid="finish-recipe-btn"
        type="button"
        disabled={ checkedIngredients.length !== ingredients.length }
        onClick={ () => history.push('/done-recipes') }

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
  nationality: PropTypes.string.isRequired,
};

export default InProgressCard;
