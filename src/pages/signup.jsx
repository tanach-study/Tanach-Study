import React from 'react';

import Layout from '../layouts/main.jsx';
import SignupComponent from '../components/Signup/Signup.jsx';

const Signup = ({ location }) => (
  <Layout location={location}>
    <SignupComponent />
  </Layout>
);

export default Signup;
