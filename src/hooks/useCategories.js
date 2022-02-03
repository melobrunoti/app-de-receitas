/* import { useState, useEffect } from 'react';
import foodOrDrink from '../globalFunctions';
import { fetchDrinksCategories, fetchFoodCategories } from '../services/api';

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      foodOrDrink(fetchFoodCategories, fetchDrinksCategories, setCategories);
    };
    fetchCategories();
  }, [setCategories]);
  return [categories, setCategories];
};

export default useCategories; */
