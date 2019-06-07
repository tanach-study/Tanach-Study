import React from 'react';

import Layout from '../../layouts/main.jsx';
import HomePage from '../../components/ParashaStudy/ParashaStudyHomePage/ParashaStudyHomePage.jsx';
// import Parts from './Parts/Parts.jsx';
// import Sefarim from './Sefarim/Sefarim.jsx';
// import Perakim from './Perakim/Perakim.jsx';

function ParashaStudy(props) {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export default ParashaStudy;
/*
        <Route exact path='/tanach-study/perakim/:sefer/:perek' component={Perakim} />
        <Route exact path='/tanach-study/sefarim/:sefer' component={Sefarim} />
        <Route exact path='/tanach-study/parts' component={Parts} />
*/
