import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import fetchApiFoodsWithFilters, { fetchApiDrinksWithFilters } from '../services/api';

import '../styles/searchBar.css';

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
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Digite aqui"
        data-testid="search-input"
        onChange={ ({ target }) => setSearchInput(target.value) }
      />
      <div className="search-filter-container">
        <label htmlFor="ingredient">
          <input
            data-testid="ingredient-search-radio"
            id="ingredient"
            type="radio"
            value="ingredient"
            checked={ radioSearch === 'ingredient' }
            onChange={ (e) => { setRadioSearch(e.target.value); } }
          />
          <p>Ingredient</p>
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
          <p>Name</p>
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
          <p>First Letter</p>
        </label>
      </div>
      <div className="seacrh-btn-container">
        <button
          type="button"
          className="search-btn"
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
