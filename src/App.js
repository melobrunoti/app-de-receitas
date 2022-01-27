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
import DoneRecipes from './pages/DoneRecipes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/drinks" component={ Drinks } />
        <Route path="/explore" component={ Explore } />
        <Route path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route path="/drinks" component={ Drinks } />
        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/foods" component={ Foods } />
        <Route path="/login" component={ Login } />
        <Route path="/profile" component={ Profile } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
