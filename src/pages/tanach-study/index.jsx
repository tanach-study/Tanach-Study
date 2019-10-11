import React from 'react';

import Layout from '../../layouts/main.jsx';
// import HomePage from '../../components/TanachStudy/TanachStudyHomePage/TanachStudyHomePage.jsx';
import PartsComponent from '../../components/TanachStudy/Parts/Parts.jsx';

function TanachStudy(props) {
  const { location } = props;
  return (
    <Layout location={location}>
      <PartsComponent />
    </Layout>
  );
}

export default TanachStudy;
