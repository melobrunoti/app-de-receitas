import React from 'react';

function SearchBar() {
  return (
    <div>
      <input
        data-testid="search-input"
        type="text"
      />
      <div>
        <label htmlFor="ingredient-radio">
          <input
            id="ingredient-radio"
            data-testid="ingredient-search-radio"
            type="radio"
          />
          Ingredient
        </label>
        <label htmlFor="name-radio">
          <input
            id="name-radio"
            type="radio"
            data-testid="name-search-radio"
          />
          Name
        </label>
        <label htmlFor="first-letter-radio">
          <input
            id="first-letter-radio"
            data-testid="first-letter-search-radio"
            type="radio"
          />
          First letter
        </label>
        <button
          data-testid="exec-search-btn"
          type="button"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
