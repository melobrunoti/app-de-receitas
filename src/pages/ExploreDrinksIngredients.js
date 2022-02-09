import React from 'react';
import { useHistory } from 'react-router-dom';
import DrinkIngredientCards from '../components/DrinkIngredientCards';
import Footer from '../components/Footer';
import Header2 from '../components/Header2';

function ExploreDrinksIngredients(props) {
  const history = useHistory();
  return (
    <div>
      <Header2 pageName="By Ingredient" push={ () => history.push('/explore/drinks/') } />
      <DrinkIngredientCards />
      <Footer { ...props } />
    </div>);
}

export default ExploreDrinksIngredients;
