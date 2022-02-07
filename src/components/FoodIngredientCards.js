import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { fecthIngredientsFoods, fetchFilterIgredients } from '../services/api';

import '../styles/exploreByIngredient.css';

function FoodIngredientCards() {
  const [ingredients, setIngrediets] = useState([]);
  const ingredientLimiter = 12;
  const history = useHistory();
  const { pathname } = useLocation();
  const { setFilterIgredient } = useContext(RecipesContext);

  useEffect(() => {
    (async () => {
      const response = await fecthIngredientsFoods();
      return setIngrediets(response);
    })();
  }, []);

  const clickIngredient = async (e, path) => {
    const response = await fetchFilterIgredients(e, path);
    setFilterIgredient(response);
    history.push('/foods');
  };

  return (
    <div className="ingredient-container ">
      { (ingredients.length > 0) && ingredients.slice(0, ingredientLimiter)
        .map(({ strIngredient }, index) => (
          <button
            type="button"
            className="ingredient-individual"
            key={ index }
            data-testid={ `${index}-ingredient-card` }
            onClick={ () => clickIngredient(strIngredient, pathname) }
          >
            <img
              className="ingredient-img"
              src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
              data-testid={ `${index}-card-img` }
              alt={ strIngredient }
            />
            <p data-testid={ `${index}-card-name` }>{strIngredient}</p>
          </button>
        )) }
    </div>
  );
}

export default FoodIngredientCards;
