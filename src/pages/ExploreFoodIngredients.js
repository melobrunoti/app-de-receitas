import React from 'react';
import FoodIngredientCards from '../components/FoodIngredientCards';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreFoodIngredients(props) {
  return (
    <div>
      <Header pageName="Explore Ingredients" searchVisible={ false } />
      <FoodIngredientCards />
      <Footer { ...props } />
    </div>);
}

export default ExploreFoodIngredients;
