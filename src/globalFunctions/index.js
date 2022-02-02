const foodOrDrink = async (foodApi, drinkApi, state, path) => {
  if (path.includes('foods')) {
    const response = await foodApi();
    return state(response);
  }
  const response = await drinkApi();
  return state(response);
};

export const ingredients = (obj) => {
  const ingredientsArr = [];
  const measurArr = [];
  const result = [];
  Object.entries(obj).forEach((key) => {
    if (key[0].includes('strIngredient') && key[1]) ingredientsArr.push(key[1]);
  });

  Object.entries(obj).forEach((key) => {
    if (key[0].includes('strMeasure') && key[1]) measurArr.push(key[1]);
  });
  ingredientsArr.forEach((ingredient, i) => result.push(ingredient + measurArr[i]));
  return result;
};

export default foodOrDrink;
