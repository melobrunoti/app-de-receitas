import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import RecipesContext from '../context/RecipesContext';

function Foods() {
  const { searchBarData } = useContext(RecipesContext);
  const history = useHistory();

  useEffect(() => {
    if (searchBarData !== null && searchBarData.length === 1) {
      history.push(`/foods/${searchBarData[0].idMeal}`);
    }
    if (!searchBarData) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  }, [searchBarData, history]);

  return (
    <div>
      <h1 data-testid="search-top-btn">FOODS</h1>
      <SearchBar />
    </div>
  );
}
export default Foods;
