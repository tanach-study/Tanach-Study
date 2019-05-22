import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HaftaraStudyHomePage/HaftaraStudyHomePage.jsx';

function HaftaraStudy(props) {
  return (
    <div className='body'>
      <Switch>
        <Route path='/haftara-study' component={HomePage} />
      </Switch>
    </div>
  );
}

export default HaftaraStudy;
