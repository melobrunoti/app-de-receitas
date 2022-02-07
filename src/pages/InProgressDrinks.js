import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import InProgressCard from '../components/InProgressCard';
import ReturnButton from '../components/ReturnButton';
import { ingredients } from '../globalFunctions';
import { fetchById } from '../services/api';

function InProgressDrinks() {
  const history = useHistory();
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
      <ReturnButton push={ () => history.push(`/drinks/${id}`) } />
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
