import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fecthRandomDrinks } from '../services/api';

import '../styles/exploreFoodsAndDrinks.css';

function ExploreDrinks(props) {
  const history = useHistory();

  const supriseMeClick = async () => {
    const result = await fecthRandomDrinks();
    const id = result[0].idDrink;
    return history.push(`/drinks/${id}`);
  };

  return (
    <div>
      <Header pageName="Explore Drinks" searchVisible={ false } />
      <div className="explore-drinks-container">
        <button
          type="button"
          className="explore-drinks-btn"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/drinks/ingredients') }
        >
          By Ingredient
          <FontAwesomeIcon icon="lemon" className="explore-drinks-icons" />
        </button>
        <button
          type="button"
          className="explore-drinks-btn"
          data-testid="explore-surprise"
          onClick={ () => supriseMeClick() }
        >
          Surprise me!
          <i className="bi bi-gift-fill explore-drinks-icons" />
        </button>
      </div>

      <Footer { ...props } />
    </div>);
}
export default ExploreDrinks;
