import React from 'react';

import Layout from '../../layouts/main.jsx';
import HomePage from '../../components/TanachStudy/TanachStudyHomePage/TanachStudyHomePage.jsx';

function TanachStudy(props) {
  const { location } = props;
  return (
    <Layout location={location}>
      <HomePage />
    </Layout>
  );
}

export default TanachStudy;
