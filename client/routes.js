
import React from 'react';
//import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import MoviesPage from './components/movies/MoviesPage';
import MovSys from './components/movies/movsys';
import AboutPage from './components/about/AboutPage';
import Header from './components/common/Header'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default (
    <Router>
        <Header/>
        <Route exact path='/' component={App}/>
        <Route path='/movies' component={MoviesPage}/>
        <Route path='/fav' component={MovSys}/>
    </Router>
);    