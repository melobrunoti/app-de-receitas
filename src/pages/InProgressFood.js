import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import InProgressCard from '../components/InProgressCard';
import { ingredients } from '../globalFunctions';
import { fetchById } from '../services/api';

function InProgressFood() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [inProgressDrink, setInProgressDrink] = useState();

  useEffect(() => {
    (async () => {
      const results = await fetchById(id, pathname);
      return setInProgressDrink(results);
    })();
  }, [id, pathname, setInProgressDrink]);

  return (
    <div>
      {(inProgressDrink) && <InProgressCard
        ingredients={ ingredients(inProgressDrink[0]) }
        id={ inProgressDrink[0].idMeal }
        title={ inProgressDrink[0].strMeal }
        thumb={ inProgressDrink[0].strMealThumb }
        /* alcool={ inProgressDrink[0].strAlcoholic } */
        category={ inProgressDrink[0].strCategory }
        instructions={ inProgressDrink[0].strInstructions }
        nationality={ inProgressDrink[0].strArea }
      />}
    </div>
  );
}

export default InProgressFood;
