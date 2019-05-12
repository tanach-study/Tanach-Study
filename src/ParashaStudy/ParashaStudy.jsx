import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './ParashaStudyHomePage/ParashaStudyHomePage.jsx';
import Parts from './Parts/Parts.jsx';
import Sefarim from './Sefarim/Sefarim.jsx';
import Perakim from './Perakim/Perakim.jsx';
import AllTeachers from './Teachers/AllTeachers.jsx';
import Teacher from './Teachers/Teacher.jsx';

function ParashaStudy(props) {
  return (
    <div className='body'>
      <Switch>
        <Route exact path='/parasha-study/teachers/:id' component={Teacher} />
        <Route exact path='/parasha-study/teachers' component={AllTeachers} />
        <Route exact path='/parasha-study/perakim/:sefer/:perek' component={Perakim} />
        <Route exact path='/parasha-study/sefarim/:sefer' component={Sefarim} />
        <Route exact path='/parasha-study/parts' component={Parts} />
        <Route exact path='/parasha-study' component={HomePage} />
      </Switch>
    </div>
  );
}

export default ParashaStudy;
