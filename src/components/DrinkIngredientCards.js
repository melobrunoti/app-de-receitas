import React, { useEffect, useState } from 'react';
import { fecthIngredientsDrinks } from '../services/api';

function DrinkIngredientCards() {
  const [ingredients, setIngrediets] = useState([]);
  const ingredientLimiter = 12;

  useEffect(() => {
    (async () => {
      const response = await fecthIngredientsDrinks();
      return setIngrediets(response);
    })();
  }, []);

  return (
    <div>
      { (ingredients.length > 0) && ingredients.slice(0, ingredientLimiter)
        .map(({ strIngredient1 }, index) => (
          <div key={ index } data-testid={ `${index}-ingredient-card` }>
            <img
              src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
              data-testid={ `${index}-card-img` }
              alt={ strIngredient1 }
            />
            <p data-testid={ `${index}-card-name` }>{strIngredient1}</p>
          </div>
        )) }
    </div>
  );
}

export default DrinkIngredientCards;
