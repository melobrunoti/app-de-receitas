async function fetchApiFoodsWithFilters(radioFilter, endpoint) {
  const urlByIngredient = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${endpoint}`;
  const urlByName = `https://www.themealdb.com/api/json/v1/1/search.php?s=${endpoint}`;
  const urlByFirstLetter = `https://www.themealdb.com/api/json/v1/1/search.php?f=${endpoint}`;

  if (state === 'ingredient') {
    const result = await fetch(urlByIngredient).then((response) => response.json());
    return result.meals;
  }
  if (state === 'name') {
    const result = await fetch(urlByName).then((response) => response.json());
    return result.meals;
  }
  if (state === 'firstLetter') {
    const result = await fetch(urlByFirstLetter).then((response) => response.json());
    return result.meals;
  }
}

export default fetchApiFoodsWithFilters;
