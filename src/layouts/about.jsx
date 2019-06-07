import React from 'react';
import PropTypes from 'prop-types';

import MainLayout from './main.jsx';
import AboutNav from '../components/About/AboutNav.jsx';

const AboutLayout = ({ children }) => (
  <MainLayout>
    <div className='container'>
      <h1 className='center'>About Us</h1>

      <AboutNav />
      {children}
    </div>
  </MainLayout>
);

AboutLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AboutLayout;
