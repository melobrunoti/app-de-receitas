async function fetchApiFoodsWithFilters(radioFilter, endpoint) {
  const urlByIngredient = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${endpoint}`;
  const urlByName = `https://www.themealdb.com/api/json/v1/1/search.php?s=${endpoint}`;
  const urlByFirstLetter = `https://www.themealdb.com/api/json/v1/1/search.php?f=${endpoint}`;

  if (radioFilter === 'ingredient') {
    const result = await fetch(urlByIngredient).then((response) => response.json());
    return result.meals;
  }
  if (radioFilter === 'name') {
    const result = await fetch(urlByName).then((response) => response.json());
    return result.meals;
  }
  if (radioFilter === 'firstLetter') {
    const result = await fetch(urlByFirstLetter).then((response) => response.json());
    return result.meals;
  }
}

export async function fetchApiDrinksWithFilters(radioFilter, endpoint) {
  const urlByIngredient = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${endpoint}`;
  const urlByName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${endpoint}`;
  const urlByFirstLetter = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${endpoint}`;

  if (radioFilter === 'ingredient') {
    const result = await fetch(urlByIngredient).then((response) => response.json());
    return result.drinks;
  }
  if (radioFilter === 'name') {
    const result = await fetch(urlByName).then((response) => response.json());
    return result.drinks;
  }
  if (radioFilter === 'firstLetter') {
    const result = await fetch(urlByFirstLetter).then((response) => response.json());
    return result.drinks;
  }
}

export async function fetchFoodApi() {
  const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const result = await fetch(URL).then((response) => response.json());
  return result.meals;
}

export async function fetchDrinksApi() {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const result = await fetch(URL).then((response) => response.json());
  return result.drinks;
}

export async function fetchFoodCategories() {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const result = await fetch(URL).then((response) => response.json());
  return result.meals;
}

export async function fetchDrinksCategories() {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const result = await fetch(URL).then((response) => response.json());
  return result.drinks;
}

export async function fetchByCategory(endpoint, path) {
  const FOODS_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${endpoint}`;
  const DRINKS_URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${endpoint}`;
  if (path.includes('foods')) {
    const result = await fetch(FOODS_URL).then((response) => response.json());
    return result.meals;
  }
  const result = await fetch(DRINKS_URL).then((response) => response.json());
  return result.drinks;
}

export async function fetchById(endpoint, path) {
  const FOODS_URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${endpoint}`;
  const DRINKS_URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${endpoint}`;

  if (path.includes('foods')) {
    try {
      const result = await fetch(FOODS_URL).then((response) => response.json());
      return result.meals;
    } catch (err) {
      return (err);
    }
  }
  try {
    const result = await fetch(DRINKS_URL).then((response) => response.json());
    return result.drinks;
  } catch (err) {
    return (err);
  }
}

export async function fecthRandomFoods() {
  const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const result = await fetch(URL).then((response) => response.json());
  return result.meals;
}

export async function fecthRandomDrinks() {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const result = await fetch(URL).then((response) => response.json());
  return result.drinks;
}

export async function fecthIngredientsFoods() {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const result = await fetch(URL).then((response) => response.json());
  return result.meals;
}

export async function fecthIngredientsDrinks() {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  const result = await fetch(URL).then((response) => response.json());
  return result.drinks;
}

export async function fecthNationalities() {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  const result = await fetch(URL).then((response) => response.json());
  return result.meals;
}

export async function fetchMealsNationalities(endpoint) {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${endpoint}`;
  const result = await fetch(URL).then((response) => response.json());
  return result.meals;
}

export async function fetchFilterIgredients(endpoint, path) {
  const URL_FOOD = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${endpoint}`;
  const URL_DRINK = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${endpoint}`;
  if (path.includes('/foods')) {
    const resultFood = await fetch(URL_FOOD).then((response) => response.json());
    return resultFood.meals;
  }
  const resultDrink = await fetch(URL_DRINK).then((response) => response.json());
  return resultDrink.drinks;
}

export default fetchApiFoodsWithFilters;
