import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <FontAwesomeIcon icon="cocktail" className="footer-icons" />
      </button>
      <button
        type="button"
        data-testid="explore-bottom-btn"
        onClick={ () => history.push('/explore') }
      >
        <FontAwesomeIcon icon="compass" className="footer-icons" />
      </button>
      <button
        type="button"
        data-testid="food-bottom-btn"
        onClick={ () => history.push('/foods') }
      >
        <FontAwesomeIcon icon="utensils" className="footer-icons" />
      </button>
    </footer>
  );
}

Footer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Footer;
