import PropTypes from 'prop-types';
import React from 'react';

// import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import foodIcon from '../images/mealIcon.svg';

import './Footer.css';

function Footer(props) {
  const { history } = props;
  return (
    <footer data-testid="footer">
      <button
        type="button"
        data-testid="drinks-bottom-btn"
        className="footer-drink"
        onClick={ () => history.push('/drinks') }
      >
        <i className="fas fa-cocktail" />
      </button>
      <input
        type="image"
        data-testid="explore-bottom-btn"
        title="Explore"
        src={ exploreIcon }
        alt="explore button"
        onClick={ () => history.push('/explore') }
      />
      <input
        type="image"
        data-testid="food-bottom-btn"
        title="Foods"
        src={ foodIcon }
        alt="foods button"
        onClick={ () => history.push('/foods') }
      />
    </footer>
  );
}

Footer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Footer;
