import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
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
      <header className="explore-foods-header-container">

        <p
          data-testid="page-title"
          className="header-explore-foods-title"
        >
          explore drinks

        </p>
      </header>
      <div className="explore-drinks-container">
        <button
          type="button"
          className="explore-drinks-btn"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/drinks/ingredients') }
        >
          By Ingredient
        </button>
        <button
          type="button"
          className="explore-drinks-btn"
          data-testid="explore-surprise"
          onClick={ () => supriseMeClick() }
        >
          Surprise me!
        </button>
      </div>

      <Footer { ...props } />
    </div>);
}
export default ExploreDrinks;
