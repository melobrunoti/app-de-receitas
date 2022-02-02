import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import InProgressDrinkCard from '../components/InProgressDrinkCard';
import { fetchById } from '../services/api';

function InProgressDrinks() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [inProgressFood, setInProgressFood] = useState();
  const ingredients = JSON.parse(localStorage.getItem('inProgressRecipes')).cocktails[id];

  useEffect(() => {
    (async () => {
      const results = await fetchById(id, pathname);
      return setInProgressFood(results);
    })();
  }, [id, pathname, setInProgressFood]);

  return (
    <div>
      {(inProgressFood) && <InProgressDrinkCard
        ingredients={ ingredients }
        card={ inProgressFood }
      />}
    </div>
  );
}

export default InProgressDrinks;
