import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fecthNationalities, fetchFoodApi,
  fetchMealsNationalities } from '../services/api';
import Card from '../components/Card';

function ExploreFoodsNationality() {
  const [nationalities, setNationalities] = useState([]);
  const [filter, setFilter] = useState([]);
  const { pathname } = useLocation();
  // const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fecthNationalities();
      return setNationalities(response);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const responseMeals = await fetchFoodApi();
      setFilter(responseMeals);
    })();
  }, []);

  const handleFilter = async ({ target: { value } }) => {
    console.log(value);
    const responseMeals = await fetchFoodApi();
    if (value === 'All') {
      return setFilter(responseMeals);
    }
    const arrFilter = await fetchMealsNationalities(value);
    console.log(arrFilter);
    return setFilter(arrFilter);
  };

  return (
    <div>
      <Header pageName="Explore Nationalities" searchVisible />
      <select
        data-testid="explore-by-nationality-dropdown"
        onChange={ (e) => handleFilter(e) }
      >
        <option
          data-testid="All-option"
          value="All"
        >
          All
        </option>
        {(nationalities.length > 0) && nationalities
          .map((n) => (
            <option
              key={ n.strArea }
              data-testid={ `${n.strArea}-option` }
              value={ n.strArea }
            >
              {n.strArea}
            </option>
          ))}
      </select>
      <div>
        { (filter && filter.length > 0)
        && <Card cards={ filter } path={ pathname } MAX_RENDER={ 12 } />}
      </div>
      <Footer />
    </div>);
}

export default ExploreFoodsNationality;
