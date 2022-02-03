import { useEffect, useState, useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

function useIngredients() {
  const { pathname } = useLocation();
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const { inProgressRecipes } = useContext(RecipesContext);
  const { id } = useParams();
  useEffect(() => {
    const local = inProgressRecipes;

    const localStorageIngredients = pathname.includes('/foods')
      ? local.meals[id]
      : local.cocktails[id];

    if (localStorageIngredients) {
      setCheckedIngredients(localStorageIngredients);
      console.log(localStorageIngredients);
    }
  }, [id, pathname, inProgressRecipes]);

  useEffect(() => {
    const local = inProgressRecipes;
    let type = 'meals';
    if (pathname.includes('/drinks')) {
      type = 'cocktails';
    }

    localStorage.setItem('inProgressRecipes', JSON.stringify({
      ...local,
      [type]: {
        ...local[type],
        [id]: checkedIngredients,
      } }));
  }, [checkedIngredients, pathname, id, inProgressRecipes]);

  return [checkedIngredients, setCheckedIngredients];
}

export default useIngredients;
