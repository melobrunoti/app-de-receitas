import React from 'react';
import DrinkIngredientCards from '../components/DrinkIngredientCards';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ExploreDrinksIngredients = (props) => (
  <div>
    <Header pageName="Explore Ingredients" searchVisible={ false } />
    <DrinkIngredientCards />
    <Footer { ...props } />
  </div>);

export default ExploreDrinksIngredients;
