import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import fetchApiFoodsWithFilters, { fetchApiDrinksWithFilters } from '../services/api';

function SearchBar() {
  const { setSearchBarData } = useContext(RecipesContext);
  const [radioSearch, setRadioSearch] = useState('ingredient');
  const [searchInput, setSearchInput] = useState('');
  const { pathname } = useLocation();
  // https://v5.reactrouter.com/web/api/Hooks

  async function chooseApi() {
    if (pathname.includes('foods')) {
      const response = await fetchApiFoodsWithFilters(radioSearch, searchInput);
      setSearchBarData(response);
    } else {
      const response = await fetchApiDrinksWithFilters(radioSearch, searchInput);
      setSearchBarData(response);
    }
  }

  function handleSearch() {
    if (radioSearch === 'firstLetter' && searchInput.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      chooseApi();
    }
  }

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        onChange={ ({ target }) => setSearchInput(target.value) }
      />
      <div>
        <label htmlFor="ingredient">
          <input
            data-testid="ingredient-search-radio"
            id="ingredient"
            type="radio"
            value="ingredient"
            checked={ radioSearch === 'ingredient' }
            onChange={ (e) => { setRadioSearch(e.target.value); } }
          />
          Ingredient
        </label>
        <label htmlFor="name">
          <input
            data-testid="name-search-radio"
            id="name"
            type="radio"
            value="name"
            checked={ radioSearch === 'name' }
            onChange={ (e) => { setRadioSearch(e.target.value); } }
          />
          Name
        </label>
        <label htmlFor="firstLetter">
          <input
            data-testid="first-letter-search-radio"
            id="firstLetter"
            type="radio"
            value="firstLetter"
            checked={ radioSearch === 'firstLetter' }
            onChange={ (e) => { setRadioSearch(e.target.value); } }
          />
          First Letter
        </label>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ () => handleSearch() }
        >
          Search
        </button>
      </div>
    </div>
  );
}
export default SearchBar;
