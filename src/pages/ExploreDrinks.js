import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fecthRandomDrinks } from '../services/api';

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
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/drinks/ingredients') }
      >
        By Ingredient
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => supriseMeClick() }
      >
        Surprise me!
      </button>
      <Footer { ...props } />
    </div>);
}
export default ExploreDrinks;
