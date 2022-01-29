import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { fetchDrinksApi, fetchFoodApi } from '../services/api';

function RecipeList() {
  const { pathname } = useLocation();
  const { searchBarData, setSearchBarData } = useContext(RecipesContext);
  const searchNumber = 12;
  const eleven = 11;
  let limitedArr = searchBarData;

  if (searchBarData.length > eleven) {
    limitedArr = searchBarData.slice(0, searchNumber);
  }

  useEffect(() => {
    const fetchAll = async () => {
      if (pathname.includes('foods')) {
        const response = await fetchFoodApi();
        return setSearchBarData(response);
      }
      const response = await fetchDrinksApi();
      return setSearchBarData(response);
    };
    fetchAll();
  }, [setSearchBarData, pathname]);
  console.log(searchBarData);

  return (
    <div>
      { (limitedArr.length > 0) && limitedArr.map((item, index) => (
        <div
          key={ index }
          data-testid={ `${index}-recipe-card` }
        >
          <img
            src={ (pathname.includes('drinks') ? item.strDrinkThumb : item.strMealThumb) }
            alt={ (pathname.includes('drinks') ? item.strDrink : item.strMeal) }
            data-testid={ `${index}-card-img` }
          />
          <p
            data-testid={ `${index}-card-name` }
          >
            {(pathname.includes('drinks') ? item.strDrink : item.strMeal)}

          </p>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
