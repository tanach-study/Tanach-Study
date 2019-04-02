import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './MishnaStudyHomePage/MishnaStudyHomePage.jsx';
import Parts from './Parts/Parts.jsx';
import Masechtot from './Masechtot/Masechtot.jsx';
// import Perakim from './Perakim/Perakim.jsx';
// import AllTeachers from './Teachers/AllTeachers.jsx';
// import Teacher from './Teachers/Teacher.jsx';

function MishnaStudy(props) {
  return (
    <div className='body'>
      <Switch>
        <Route exact path='/mishna-study/masechtot/:seder/:masechet' component={Parts} />
        <Route exact path='/mishna-study/parts' component={Parts} />
        <Route exact path='/mishna-study' component={HomePage} />
      </Switch>
    </div>
  );
}

export default MishnaStudy;
