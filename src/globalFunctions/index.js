const foodOrDrink = async (foodApi, drinkApi, state, path) => {
  if (path.includes('foods')) {
    const response = await foodApi();
    return state(response);
  }
  const response = await drinkApi();
  return state(response);
};

export default foodOrDrink;
