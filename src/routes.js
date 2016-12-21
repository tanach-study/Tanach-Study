import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Sefarim from './components/Sefarim/Sefarim.jsx';
import Videos from './components/Videos/Videos.jsx';

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='/sefarim/:sefer' component={Sefarim} />
    <Route path='/videos' component={Videos} />
  </Route>
);
