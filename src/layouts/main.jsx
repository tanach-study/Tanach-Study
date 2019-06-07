import React from 'react';
import PropTypes from 'prop-types';

import 'materialize-css/dist/css/materialize.min.css';
import './styles.global.css';
import './icons.css';
import { programs } from '../app-context.js';

import ProgramNavigation from '../components/ProgramNavigation/ProgramNavigation.jsx';
import Navigation from '../components/Navigation/Navigation.jsx';
import Footer from '../components/Footer/Footer.jsx';

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
