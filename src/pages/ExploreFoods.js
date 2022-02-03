import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fecthRandomFoods } from '../services/api';

function ExploreFoods() {
  const history = useHistory();

  const supriseMeClick = async () => {
    const result = await fecthRandomFoods();
    const id = result[0].idMeal;
    return history.push(`/foods/${id}`);
  };

  return (
    <div>
      <Header pageName="Explore Foods" searchVisible={ false } />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/foods/ingredients') }
      >
        By Ingredient
      </button>
      <button
        type="button"
        data-testid="explore-by-nationality"
        onClick={ () => history.push('/explore/foods/nationalities') }
      >
        By Nationality
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => supriseMeClick() }
      >
        Surprise me!
      </button>
      <Footer />
    </div>);
}
export default ExploreFoods;
