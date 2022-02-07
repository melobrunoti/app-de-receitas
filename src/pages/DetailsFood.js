import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import DetailedFoodCard from '../components/DetailedFoodCard';
import ReturnButton from '../components/ReturnButton';
import { fetchById } from '../services/api';

import '../styles/detailsFoodAndDrinks.css';

function DetailsFoods() {
  const history = useHistory();
  const { id } = useParams();
  const { pathname } = useLocation();
  const [detaildFood, setDetaildFood] = useState([]);

  useEffect(() => {
    (async () => {
      const results = await fetchById(id, pathname);
      // console.log(results);
      return setDetaildFood(results);
    })();
  }, [id, pathname, setDetaildFood]);

  return (
    <div>
      <ReturnButton push={ () => history.push('/foods') } />
      {(detaildFood && detaildFood.length > 0)
      && <DetailedFoodCard card={ detaildFood } />}
    </div>
  );
}

export default DetailsFoods;
