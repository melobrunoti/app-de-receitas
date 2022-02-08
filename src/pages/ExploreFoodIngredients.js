import React from 'react';
import { useHistory } from 'react-router-dom';
import FoodIngredientCards from '../components/FoodIngredientCards';
import Footer from '../components/Footer';
import Header2 from '../components/Header2';

function ExploreFoodIngredients(props) {
  const history = useHistory();

  return (
    <div>
      <Header2 pageName="by ingredient" push={ () => history.push('/explore/foods') } />
      <FoodIngredientCards />
      <Footer { ...props } />
    </div>);
}

export default ExploreFoodIngredients;
