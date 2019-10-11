import React from 'react';

import Layout from '../../layouts/main.jsx';
// import HomePage from '../../components/MishnaStudy/MishnaStudyHomePage/MishnaStudyHomePage.jsx';
import PartsComponent from '../../components/MishnaStudy/Parts/Parts.jsx';

function MishnaStudy(props) {
  const { location } = props;
  return (
    <Layout location={location}>
      <PartsComponent />
    </Layout>
  );
}

export default MishnaStudy;
