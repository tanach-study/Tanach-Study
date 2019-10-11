import React from 'react';

import Layout from '../../layouts/main.jsx';
// import HomePage from '../../components/ParashaStudy/ParashaStudyHomePage/ParashaStudyHomePage.jsx';

import PartsComponent from '../../components/ParashaStudy/Parts/Parts.jsx';

function ParashaStudy(props) {
  const { location } = props;
  return (
    <Layout location={location}>
      <PartsComponent />
    </Layout>
  );
}

export default ParashaStudy;
