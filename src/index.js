import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import 'whatwg-fetch';

import App from './App.jsx';

ReactGA.initialize('UA-53814701-1');

// https://github.com/ReactTraining/react-router/issues/4278#issuecomment-299692502
const withTracker = (WrappedComponent) => {
  const trackPage = (page) => {
    ReactGA.set({ page });
    ReactGA.pageview(page);
  };

  const HOC = (props) => {
    const { location } = props;
    const page = location.pathname + location.search;
    trackPage(page);

    /* eslint-disable react/jsx-filename-extension */
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
/* eslint-enable react/jsx-filename-extension */
