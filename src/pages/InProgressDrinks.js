import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import InProgressCard from '../components/InProgressCard';
import { ingredients } from '../globalFunctions';
import { fetchById } from '../services/api';

function InProgressDrinks() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [inProgressFood, setInProgressFood] = useState();

  useEffect(() => {
    (async () => {
      const results = await fetchById(id, pathname);
      return setInProgressFood(results);
    })();
  }, [id, pathname, setInProgressFood]);

  return (
    <div>
      {(inProgressFood) && <InProgressCard
        ingredients={ ingredients(inProgressFood[0]) }
        id={ inProgressFood[0].idDrink }
        title={ inProgressFood[0].strDrink }
        thumb={ inProgressFood[0].strDrinkThumb }
        alcool={ inProgressFood[0].strAlcoholic }
        category={ inProgressFood[0].strCategory }
        instructions={ inProgressFood[0].strInstructions }
        tags={ inProgressFood[0].strTags }
      />}
    </div>
  );
}

export default InProgressDrinks;
