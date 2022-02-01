import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import DetailedDrink from '../components/DetailedDrink';
import { fetchById } from '../services/api';

function DetailsDrinks() {
  const [detaildDrinks, setDetaildDrinks] = useState([]);
  const { pathname } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const results = await fetchById(id, pathname);
      console.log(results);
      return setDetaildDrinks(results);
    })();
  }, [id, pathname, setDetaildDrinks]);
  return (

    <div>
      <h1>Details Drinks</h1>

      {(detaildDrinks && detaildDrinks.length > 0)
      && <DetailedDrink card={ detaildDrinks } /> }
    </div>
  );
}

export default DetailsDrinks;
