import React from 'react';

import Layout from '../../layouts/main.jsx';
import HomePage from '../../components/HaftaraStudy/HaftaraStudyHomePage/HaftaraStudyHomePage.jsx';

function HaftaraStudy(props) {
  const { location } = props;
  return (
    <Layout location={location}>
      <HomePage />
    </Layout>
  );
}

export default HaftaraStudy;
