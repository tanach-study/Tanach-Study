import React from 'react';

import Layout from '../../layouts/main.jsx';
import PartsComponent from '../../components/TalmudStudy/Parts/Parts.jsx';

function TalmudStudy(props) {
  const { location } = props;
  return (
    <Layout location={location}>
      <PartsComponent />
    </Layout>
  );
}

export default TalmudStudy;
