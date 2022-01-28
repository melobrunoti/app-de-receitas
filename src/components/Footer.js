import React from 'react';

import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import foodIcon from '../images/mealIcon.svg';

import './Footer.css';

function Footer() {
  return (
    <footer data-testid="footer">
      <button type="button" data-testid="drinks-bottom-btn" title="Drinks">
        <img src={ drinkIcon } alt="drinks button" />
      </button>
      <button type="button" data-testid="explore-bottom-btn" title="Explore">
        <img src={ exploreIcon } alt="explore button" />
      </button>
      <button type="button" data-testid="food-bottom-btn" title="Foods">
        <img src={ foodIcon } alt="foods button" />
      </button>
    </footer>
  );
}

export default Footer;
