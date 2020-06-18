import React from 'react';

import Layout from '../layouts/main.jsx';

const IndexPage = () => {
  if (typeof window !== 'undefined') {
    if (window.location.hostname !== 'localhost') {
      return window.location.replace('https://tanachstudy.com');
    }
  }
  return (
    <Layout>
      <p>Welcome home!</p>
    </Layout>
  );
};

export default IndexPage;
