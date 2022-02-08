import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
// import Header from '../components/Header';
import { fecthRandomFoods } from '../services/api';

import '../styles/exploreFoodsAndDrinks.css';

function ExploreFoods(props) {
  const history = useHistory();

  const supriseMeClick = async () => {
    const result = await fecthRandomFoods();
    const id = result[0].idMeal;
    return history.push(`/foods/${id}`);
  };

  return (
    <div>
      <header className="explore-foods-header-container">

        <p
          data-testid="page-title"
          className="header-explore-foods-title"
        >
          explore foods

        </p>
      </header>
      <div className="explore-foods-container">
        <button
          type="button"
          className="explore-foods-btn"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/foods/ingredients') }
        >
          By Ingredient
        </button>
        <button
          type="button"
          className="explore-foods-btn"
          data-testid="explore-by-nationality"
          onClick={ () => history.push('/explore/foods/nationalities') }
        >
          By Nationality
        </button>
        <button
          type="button"
          className="explore-foods-btn"
          data-testid="explore-surprise"
          onClick={ () => supriseMeClick() }
        >
          Surprise me!
        </button>
      </div>

      <Footer { ...props } />
    </div>);
}

ExploreFoods.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}.isRequired;

export default ExploreFoods;
