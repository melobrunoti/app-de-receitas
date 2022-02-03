import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Foods from './pages/Foods';
import Login from './pages/Login';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import ExploreFoodIngredients from './pages/ExploreFoodIngredients';
import ExploreFoodsNationality from './pages/ExploreFoodsNationality';
import DetailsFoods from './pages/DetailsFood';
import DetailsDrinks from './pages/DetailsDrinks';
import InProgressFoods from './pages/InProgressFood';
import InProgressDrinks from './pages/InProgressDrinks';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/foods/:id" component={ DetailsFoods } />
      <Route exact path="/foods/:id/in-progress" component={ InProgressFoods } />
      <Route exact path="/drinks/:id" component={ DetailsDrinks } />
      <Route exact path="/drinks/:id/in-progress" component={ InProgressDrinks } />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route
        exact
        path="/explore/foods/ingredients"
        component={ ExploreFoodIngredients }
      />
      <Route
        exact
        path="/explore/drinks/ingredients"
        component={ ExploreDrinksIngredients }
      />
      <Route
        exact
        path="/explore/foods/nationalities"
        component={ ExploreFoodsNationality }
      />
      <Route path="/favorite-recipes" component={ FavoriteRecipes } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/foods" component={ Foods } />
      <Route path="/profile" component={ Profile } />
    </Switch>

  );
}

export default App;
