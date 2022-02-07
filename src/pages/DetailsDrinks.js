import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import DetailedDrinkCard from '../components/DetailedDrinkCard';
import ReturnButton from '../components/ReturnButton';
import { fetchById } from '../services/api';

import '../styles/detailsFoodAndDrinks.css';

function DetailsDrinks() {
  const history = useHistory();
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
      <ReturnButton push={ () => history.push('/drinks') } />

      {(detaildDrinks && detaildDrinks.length > 0)
      && <DetailedDrinkCard card={ detaildDrinks } /> }
    </div>
  );
}

export default DetailsDrinks;
