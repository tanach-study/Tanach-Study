import React from 'react';

import Layout from '../../layouts/main.jsx';
import HomePage from '../../components/ParashaStudyPlus/ParashaStudyPlusHomePage/ParashaStudyPlusHomePage.jsx';

function ParashaStudyPlus(props) {
  const { location } = props;
  return (
    <Layout location={location}>
      <HomePage />
    </Layout>
  );
}

export default ParashaStudyPlus;
