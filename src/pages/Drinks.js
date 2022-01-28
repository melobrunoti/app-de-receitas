import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipesContext from '../context/RecipesContext';

function Drinks(props) {
  const { searchBarData } = useContext(RecipesContext);
  const history = useHistory();

  function renderFooter() {
    const { location } = props;
    const { pathname } = location;
    console.log(props);

    if (pathname === '/drinks') return <Footer { ...props } />;
  }

  useEffect(() => {
    if (searchBarData && searchBarData.length === 1) {
      history.push(`/drinks/${searchBarData[0].idDrink}`);
    }
    if (!searchBarData) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  }, [searchBarData, history]);

  return (
    <div>
      <Header pageName="Drinks" searchVisible />
      {(searchBarData && searchBarData.length > 0) && <Card />}
      {
        renderFooter()
      }
    </div>
  );
}

Drinks.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}.isRequired;

export default Drinks;
