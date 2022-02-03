import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { fecthIngredientsDrinks, fetchFilterIgredients } from '../services/api';

function DrinkIngredientCards() {
  const [ingredients, setIngrediets] = useState([]);
  const ingredientLimiter = 12;
  const { setFilterIgredient } = useContext(RecipesContext);
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const response = await fecthIngredientsDrinks();
      return setIngrediets(response);
    })();
  }, []);

  const clickIngredient = async (e, path) => {
    const response = await fetchFilterIgredients(e, path);
    setFilterIgredient(response);
    history.push('/drinks');
  };

  return (
    <div>
      { (ingredients.length > 0) && ingredients.slice(0, ingredientLimiter)
        .map(({ strIngredient1 }, index) => (
          <button
            type="button"
            key={ index }
            data-testid={ `${index}-ingredient-card` }
            onClick={ () => clickIngredient(strIngredient1, pathname) }
          >
            <img
              src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
              data-testid={ `${index}-card-img` }
              alt={ strIngredient1 }
            />
            <p data-testid={ `${index}-card-name` }>{strIngredient1}</p>
          </button>
        )) }
    </div>
  );
}

export default DrinkIngredientCards;
