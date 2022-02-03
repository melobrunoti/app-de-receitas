import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Explore(props) {
  const history = useHistory();
  return (
    <div>
      <Header pageName="Explore" searchVisible={ false } />
      <button
        type="button"
        data-testid="explore-foods"
        name="Explore Foods"
        onClick={ () => history.push('/explore/foods') }
      >
        Explore Foods
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
        name="Explore Drinks"
        onClick={ () => history.push('/explore/drinks') }
      >
        Explore Drinks
      </button>
      <Footer { ...props } />
    </div>);
}
export default Explore;
