import React from 'react';

function InProgressDrinkCard({ card, ingredients }) {
  const { strDrink, strDrinkThumb } = card[0];
  return (
    <div>
      <img src={ strDrinkThumb } alt={ strDrink } />
      <h2>{strDrink}</h2>
      <ul>
        ingredients.map(())
      </ul>
    </div>
  );
}

export default InProgressDrinkCard;
