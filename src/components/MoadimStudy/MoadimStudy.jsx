import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './MoadimStudyHomePage/MoadimStudyHomePage.jsx';

function MoadimStudy(props) {
  return (
    <div className='body'>
      <Switch>
        <Route path='/moadim-study' component={HomePage} />
      </Switch>
    </div>
  );
}

export default MoadimStudy;
