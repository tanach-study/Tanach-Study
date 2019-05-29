import React from 'react';
import PropTypes from 'prop-types';

import 'materialize-css/dist/css/materialize.min.css';
import './styles.global.css';
import { programs } from '../../../src/app-context.js';

import ProgramNavigation from './ProgramNavigation/ProgramNavigation.jsx';
import Navigation from './Navigation/Navigation.jsx';
import Footer from './Footer/Footer.jsx';

const Layout = ({ children }) => (
  <React.Fragment>
    <ProgramNavigation />
    <Navigation />
    <div className='body'>
      <main>{children}</main>
    </div>
    <Footer program={programs.tanachstudy} />
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
