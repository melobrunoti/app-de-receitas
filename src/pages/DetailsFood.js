import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import DetailedFood from '../components/DetailedFood';
import { fetchById } from '../services/api';

function DetailsFoods() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [detaildFood, setDetaildFood] = useState([]);

  useEffect(() => {
    (async () => {
      const results = await fetchById(id, pathname);
      console.log(results);
      return setDetaildFood(results);
    })();
  }, [id, pathname, setDetaildFood]);

  return (
    <div>
      {(detaildFood && detaildFood.length > 0)
      && <DetailedFood card={ detaildFood } /> }
    </div>
  );
}

export default DetailsFoods;
