import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fecthNationalities, fetchFoodApi } from '../services/api';
import Card from '../components/Card';

function ExploreFoodsNationality() {
  const [nationalities, setNationalities] = useState([]);
  const [filter, setFilter] = useState([]);
  const { pathname } = useLocation();
  const nationalitiesLimiter = 11;

  useEffect(() => {
    (async () => {
      const response = await fecthNationalities();
      return setNationalities(response);
    })();
  }, []);

  const handleFilter = async ({ target }) => {
    const responseMeals = await fetchFoodApi();
    if (target.innerText === 'All') {
      return setFilter(responseMeals);
    }
    const arrFilter = responseMeals.filter((r) => (
      r.strArea === target.innerText
    ));
    return setFilter(arrFilter);
  };

  return (
    <div>
      <Header pageName="Explore Nationalities" searchVisible />
      <select data-testid="explore-by-nationality-dropdown">
        <option
          data-testid="All-option"
          onClick={ (e) => handleFilter(e) }
        >
          All
        </option>
        {(nationalities.length > 0) && nationalities.slice(0, nationalitiesLimiter)
          .map((n) => (
            <option
              key={ n }
              data-testid={ `${n}-option` }
              onClick={ (e) => handleFilter(e) }
            >
              {n.strArea}
            </option>
          ))}
      </select>
      <div>
        { (filter.length > 0)
        && <Card cards={ handleFilter } path={ pathname } MAX_RENDER={ 12 } />}
      </div>
      <Footer />
    </div>);
}

export default ExploreFoodsNationality;
