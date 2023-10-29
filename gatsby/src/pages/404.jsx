import React from 'react';
import { navigate } from "gatsby";

import Layout from '../layouts/main.jsx';

function goBack() {
  navigate(-1);
}

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <div className='container'>
      <div className='section center'>
        <h3>This page doesn't exist</h3>
        <p>Sorry about that!</p>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
