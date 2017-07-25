import React    from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';
import 'whatwg-fetch';

// mount a new router with the routes from the other file at #root-container
ReactDOM.render(
  <BrowserRouter>
    <Route path='/' component={App} />
  </BrowserRouter>,
  document.querySelector('#root-container')
);
