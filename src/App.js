import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Foods from './pages/Foods';
import Login from './pages/Login';
import Profile from './pages/Profile';
import RecipesProvider from './context/RecipesProvider';

function App() {
  return (
    <BrowserRouter>
      <RecipesProvider>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/drinks" component={ Drinks } />
          <Route path="/explore" component={ Explore } />
          <Route path="/favorites-recipes" component={ FavoriteRecipes } />
          <Route path="/drinks" component={ Drinks } />
          <Route path="/foods" component={ Foods } />
          <Route path="/login" component={ Login } />
          <Route path="/profile" component={ Profile } />
        </Switch>
      </RecipesProvider>
    </BrowserRouter>
  );
}

export default App;
