
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import MoviesPage from './components/movies/MoviesPage';
import MovSys from './components/movies/movsys';
import AboutPage from './components/about/AboutPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="movies" component={MoviesPage}></Route>
    <Route path="fav" component={MovSys} />
  </Route>
);