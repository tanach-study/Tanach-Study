import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Sefarim from './components/Sefarim/Sefarim.jsx';
import Perakim from './components/Perakim/Perakim.jsx';
import Videos from './components/Videos/Videos.jsx';
import Signup from './components/Signup/Signup.jsx';

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='/sefarim/:sefer' component={Sefarim} />
    <Route path='/perakim/:sefer/:perek' component={Perakim} />
    <Route path='/videos' component={Videos} />
    <Route path='/signup' component={Signup} />
  </Route>
);
