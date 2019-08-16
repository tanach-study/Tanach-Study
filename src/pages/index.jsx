import React from 'react';

import Layout from '../layouts/main.jsx';
import HomePage from '../components/HomePage/HomePage.jsx';

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <HomePage />
  </Layout>
);

export default IndexPage;
