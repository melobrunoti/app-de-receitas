import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';

function Foods(props) {
  const { searchBarData } = useContext(RecipesContext);
  const history = useHistory();

  function renderFooter() {
    const { location } = props;
    const { pathname } = location;

    if (pathname === '/foods') return <Footer { ...props } />;
  }

  useEffect(() => {
    if (searchBarData !== null && searchBarData.length === 1) {
      history.push(`/foods/${searchBarData[0].idMeal}`);
    }
    if (!searchBarData) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  }, [searchBarData, history]);

  return (
    <div>
      <Header pageName="Foods" searchVisible />
      {
        renderFooter()
      }
    </div>
  );
}

Foods.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}.isRequired;

export default Foods;
