import React from 'react';

function Footer() {
  return (
    <footer data-testid="footer">
      <button type="button" data-testid="drinks-bottom-btn">DRINKS</button>
      <button type="button" data-testid="explore-bottom-btn">EXPLORE</button>
      <button type="button" data-testid="food-bottom-btn">FOODS</button>
    </footer>
  );
}

export default Footer;
