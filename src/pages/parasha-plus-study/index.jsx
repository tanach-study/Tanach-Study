import React from 'react';

import Layout from '../../layouts/main.jsx';
// import HomePage from '../../components/ParashaStudyPlus/ParashaStudyPlusHomePage/ParashaStudyPlusHomePage.jsx';
import PartsComponent from '../../components/ParashaStudyPlus/Parts/Parts.jsx';

function ParashaStudyPlus(props) {
  const { location } = props;
  return (
    <Layout location={location}>
      <PartsComponent />
    </Layout>
  );
}

export default ParashaStudyPlus;
