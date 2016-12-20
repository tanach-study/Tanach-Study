import React    from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import routes from './routes';

// mount a new router with the routes from the other file at #root-container
ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.querySelector('#root-container')
);
