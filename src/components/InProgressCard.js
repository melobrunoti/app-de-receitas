import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import useIngredients from '../hooks/useIngredients';

function InProgressCard({
  id, thumb, ingredients, title, category, instructions, alcool, nationality, tags }) {
  const history = useHistory();
  const { pathname } = useLocation();
  const [copied, setCopied] = useState(false);
  const { setFavoriteRecipe, checkFavorite,
    setDoneRecipes } = useContext(RecipesContext);
  const [checkedIngredients, setCheckedIngredients] = useIngredients();

  console.log(checkedIngredients);
  console.log(ingredients);

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

  function callDate() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    today = `${dd}/${mm}/${yyyy}`;
    return today;
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

  const splitTags = () => {
    if (tags) {
      return tags.split(',');
    }
  };

  const finishRecipe = () => {
    const newRecipe = {
      id,
      type: chooseType(),
      nationality: hasNationality(),
      category,
      alcoholicOrNot: isAlcoolic(),
      name: title,
      image: thumb,
      date: callDate(),
      tags: splitTags(),
    };
    setDoneRecipes((prevState) => [...prevState, newRecipe]);

    history.push('/done-recipes');
  };

  return (
    <div className="details-food-container">
      <img data-testid="recipe-photo" src={ thumb } alt={ title } />

      <div className="recipe-container">
        <div className="title-container">
          <h2 data-testid="recipe-title">{title}</h2>

          <button
            type="button"
            onClick={ () => changeFavorite() }
            data-testid="favorite-btn"
          >
            { checkFavorite(id)
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
        <p className="category-title" data-testid="recipe-category">{category}</p>

        <div className="progress-ingredient-container">
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
        </div>

        <p />
        <p className="instructions" data-testid="instructions">{instructions}</p>
      </div>

      <button
        data-testid="finish-recipe-btn"
        type="button"
        className="finish-btn"
        disabled={ checkedIngredients.length !== ingredients.length }
        onClick={ () => finishRecipe() }

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
  alcool: PropTypes.string,
  nationality: PropTypes.string,
  tags: PropTypes.string,
};

InProgressCard.defaultProps = {
  nationality: '',
  tags: '',
  alcool: '',
};

export default InProgressCard;
