/* eslint react/jsx-filename-extension: [1, { extensions: ['.js', '.jsx'] }] */
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import 'whatwg-fetch';
import ReactGA from 'react-ga';

import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker.js';

ReactGA.initialize('UA-53814701-1');

// https://github.com/ReactTraining/react-router/issues/4278#issuecomment-299692502
const withTracker = (WrappedComponent) => {
  const trackPage = (page) => {
    ReactGA.set({ page });
    ReactGA.pageview(page);
  };

  const HOC = (props) => {
    const page = props.location.pathname + props.location.search;
    trackPage(page);

    return (
      <WrappedComponent {...props} />
    );
  };

  return HOC;
};

ReactDOM.render(
  <BrowserRouter>
    <Route component={withTracker(App)} />
  </BrowserRouter>,
  document.querySelector('#root-container'),
);

registerServiceWorker();
