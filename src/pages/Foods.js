import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../components/Card';
import Header from '../components/Header';
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
      <Header pageName="Foods" searchVisible />
      {(searchBarData && searchBarData.length > 0) && <Card />}
    </div>
  );
}
export default Foods;
