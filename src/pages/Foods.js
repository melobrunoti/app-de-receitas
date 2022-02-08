import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import RecipeList from '../components/RecipeList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';

import '../styles/foodsAndDrinks.css';

function Foods(props) {
  const { searchBarData } = useContext(RecipesContext);
  const history = useHistory();
  const { pathname } = useLocation();

  function renderFooter() {
    if (pathname === '/foods') return <Footer { ...props } />;
  }

  useEffect(() => {
    if (searchBarData !== null && searchBarData.length === 1) {
      history.push(`/foods/${searchBarData[0].idMeal}`);
    }
    if (!searchBarData) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  }, [searchBarData, history]);

  return (
    <div className="food-container">

      <Header pageName="foods" searchVisible />

      <RecipeList />

      {
        renderFooter()
      }
    </div>
  );
}

Foods.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}.isRequired;

export default Foods;
