import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

import '../styles/Footer.css';
import RecipesContext from '../context/RecipesContext';

function Footer() {
  const { setFilterIgredient } = useContext(RecipesContext);
  return (
    <footer data-testid="footer">
      <section className="footer-section">
        <NavLink
          activeClassName="footer-icon-selected"
          exact
          to="/drinks"
          data-testid="drinks-bottom-btn"
          onClick={ () => setFilterIgredient([]) }
        >
          <Icon icon="bx:bxs-drink" className="footer-icons" />
        </NavLink>

        <NavLink
          activeClassName="footer-icon-selected"
          data-testid="explore-bottom-btn"
          exact
          to="/explore"
        >
          <Icon icon="bx:bx-compass" className="footer-icons explore-icon" />
        </NavLink>

        <NavLink
          activeClassName="footer-icon-selected"
          data-testid="food-bottom-btn"
          exact
          to="/foods"
          onClick={ () => setFilterIgredient([]) }
        >
          <Icon icon="emojione-monotone:fork-and-knife" className="footer-icons" />
        </NavLink>
      </section>
    </footer>
  );
}

export default Footer;
