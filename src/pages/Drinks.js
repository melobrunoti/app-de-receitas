import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import RecipesContext from '../context/RecipesContext';

function Drinks() {
  const { searchBarData } = useContext(RecipesContext);
  const history = useHistory();

  useEffect(() => {
    if (searchBarData && searchBarData.length === 1) {
      history.push(`/drinks/${searchBarData[0].idDrink}`);
    }
    if (!searchBarData) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  }, [searchBarData, history]);
  return (
    <div>
      <h1 data-testid="search-top-btn">drinks</h1>
      <SearchBar />
    </div>
  );
}
export default Drinks;
