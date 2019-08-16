import React from 'react';

import Layout from '../../layouts/main.jsx';
import HomePage from '../../components/MishnaStudy/MishnaStudyHomePage/MishnaStudyHomePage.jsx';

function MishnaStudy(props) {
  const { location } = props;
  return (
    <Layout location={location}>
      <HomePage />
    </Layout>
  );
}

export default MishnaStudy;
