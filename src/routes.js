import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={App} />
  </Route>
);
