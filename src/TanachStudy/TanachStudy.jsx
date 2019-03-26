import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './TanachStudyHomePage/TanachStudyHomePage.jsx';
import Parts from '../Parts/Parts.jsx';
import Sefarim from '../Sefarim/Sefarim.jsx';
import Perakim from '../Perakim/Perakim.jsx';
import AllTeachers from '../Teachers/AllTeachers.jsx';
import Teacher from '../Teachers/Teacher.jsx';

function TanachStudy(props) {
  return (
    <div className='body'>
      <Switch>
        <Route exact path='/teachers/:id' component={Teacher} />
        <Route exact path='/teachers' component={AllTeachers} />
        <Route exact path='/perakim/:sefer/:perek' component={Perakim} />
        <Route exact path='/sefarim/:sefer' component={Sefarim} />
        <Route exact path='/parts' component={Parts} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default TanachStudy;
