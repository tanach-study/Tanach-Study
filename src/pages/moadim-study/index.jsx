import React from 'react';

import Layout from '../../layouts/main.jsx';
import HomePage from '../../components/MoadimStudy/MoadimStudyHomePage/MoadimStudyHomePage.jsx';

function MoadimStudy(props) {
  const { location } = props;
  return (
    <Layout location={location}>
      <HomePage />
    </Layout>
  );
}

export default MoadimStudy;
