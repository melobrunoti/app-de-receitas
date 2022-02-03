import React, { useEffect, useState } from 'react';
import { fecthIngredientsFoods } from '../services/api';

function FoodIngredientCards() {
  const [ingredients, setIngrediets] = useState([]);
  const ingredientLimiter = 12;

  useEffect(() => {
    (async () => {
      const response = await fecthIngredientsFoods();
      return setIngrediets(response);
    })();
  }, []);

  return (
    <div>
      { (ingredients.length > 0) && ingredients.slice(0, ingredientLimiter)
        .map(({ strIngredient }, index) => (
          <div key={ index } data-testid={ `${index}-ingredient-card` }>
            <img
              src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
              data-testid={ `${index}-card-img` }
              alt={ strIngredient }
            />
            <p data-testid={ `${index}-card-name` }>{strIngredient}</p>
          </div>
        )) }
    </div>
  );
}

export default FoodIngredientCards;
