import PropTypes from 'prop-types';
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';

import './Footer.css';

function Footer(props) {
  const { history } = props;
  return (
    <footer data-testid="footer">
      <section className="footer-section">
        <button
          type="button"
          data-testid="drinks-bottom-btn"
          className="footer-drink"
          onClick={ () => history.push('/drinks') }
        >
          {/* <FontAwesomeIcon icon="cocktail" className="footer-icons" /> */}
          <Icon icon="bx:bxs-drink" className="footer-icons" />
        </button>
        <button
          type="button"
          data-testid="explore-bottom-btn"
          onClick={ () => history.push('/explore') }
        >
          {/* <FontAwesomeIcon icon="compass" className="footer-icons" /> */}
          <Icon icon="bx:bx-compass" className="footer-icons" />
        </button>
        <button
          type="button"
          data-testid="food-bottom-btn"
          onClick={ () => history.push('/foods') }
        >
          {/* <FontAwesomeIcon icon="utensils" className="footer-icons" /> */}
          <Icon icon="emojione-monotone:fork-and-knife" className="footer-icons" />
        </button>
      </section>
    </footer>
  );
}

Footer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Footer;
