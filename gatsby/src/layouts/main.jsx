import React from 'react';
import PropTypes from 'prop-types';

import 'materialize-css/dist/css/materialize.min.css';
import './styles.global.css';
import './icons.css';

import Navigation from '../components/Navigation/Navigation.jsx';
import Footer from '../components/Footer/Footer.jsx';

import { programs, ProgramContext } from '../app-context.js';

function Layout(props) {
  const { children, location } = props;
  const { pathname } = location || {};
  const routePath = pathname || '';
  let program;
  if (routePath.includes('tanach-study')) {
    program = programs.tanachstudy;
  } else if (routePath.includes('mishna-study')) {
    program = programs.mishnastudy;
  } else if (routePath.includes('parasha-plus-study')) {
    program = programs.parashastudyplus;
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
    <ProgramContext.Provider value={program}>
      <Navigation program={program} />
      <div className='body'>
        <main>{children}</main>
      </div>
      <Footer program={program} />
    </ProgramContext.Provider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
