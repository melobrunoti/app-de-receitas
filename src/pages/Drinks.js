import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../components/Card';
import Header from '../components/Header';
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
      <Header pageName="Drinks" searchVisible />
      {(searchBarData && searchBarData.length > 0) && <Card />}
    </div>
  );
}
export default Drinks;
