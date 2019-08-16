import React from 'react';

import Layout from '../../layouts/main.jsx';

import PartsComponent from '../../components/TanachStudy/Parts/Parts.jsx';

function Parts(props) {
  const { location } = props;
  return (
    <Layout location={location}>
      <PartsComponent />
    </Layout>
  );
}

export default Parts;
