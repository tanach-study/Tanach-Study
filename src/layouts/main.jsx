import React from 'react';
import PropTypes from 'prop-types';

import 'materialize-css/dist/css/materialize.min.css';
import './styles.global.css';
import './icons.css';
import { programs } from '../app-context.js';

import ProgramNavigation from '../components/ProgramNavigation/ProgramNavigation.jsx';
import Navigation from '../components/Navigation/Navigation.jsx';
import Footer from '../components/Footer/Footer.jsx';

function Layout(props) {
  const { children, location } = props;
  const { pathname } = location || {};
  const routePath = pathname || '';
  let program;
  if (routePath.includes('tanach-study')) {
    program = programs.tanachstudy;
  } else if (routePath.includes('mishna-study')) {
    program = programs.mishnastudy;
  } else if (routePath.includes('parasha-study')) {
    program = programs.parashastudy;
  } else if (routePath.includes('haftara-study')) {
    program = programs.haftarastudy;
  } else if (routePath.includes('moadim-study')) {
    program = programs.moadimstudy;
  } else {
    program = programs.tanachstudy;
  }
  return (
    <React.Fragment>
      <ProgramNavigation />
      <Navigation />
      <div className='body'>
        <main>{children}</main>
      </div>
      <Footer program={program} />
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
