import React from 'react';
import DrinkIngredientCards from '../components/DrinkIngredientCards';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ExploreDrinksIngredients = () => (
  <div>
    <Header pageName="Explore Ingredients" searchVisible={ false } />
    <DrinkIngredientCards />
    <Footer />
  </div>);

export default ExploreDrinksIngredients;
