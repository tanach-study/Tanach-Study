import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './TanachStudyHomePage/TanachStudyHomePage.jsx';
import Parts from './Parts/Parts.jsx';
import Sefarim from './Sefarim/Sefarim.jsx';
import Perakim from './Perakim/Perakim.jsx';
import AllTeachers from './Teachers/AllTeachers.jsx';
import Teacher from './Teachers/Teacher.jsx';

function TanachStudy(props) {
  return (
    <div className='body'>
      <Switch>
        <Redirect from='/tanach-study/perakim/bereshit/:perek' to='/parasha-study/perakim/bereshit/:perek' />
        <Redirect from='/tanach-study/perakim/shemot/:perek' to='/parasha-study/perakim/shemot/:perek' />
        <Redirect from='/tanach-study/perakim/vayikra/:perek' to='/parasha-study/perakim/vayikra/:perek' />
        <Redirect from='/tanach-study/perakim/bemidbar/:perek' to='/parasha-study/perakim/bemidbar/:perek' />
        <Redirect from='/tanach-study/perakim/devarim/:perek' to='/parasha-study/perakim/devarim/:perek' />

        <Redirect from='/tanach-study/sefarim/bereshit' to='/parasha-study/sefarim/bereshit' />
        <Redirect from='/tanach-study/sefarim/shemot' to='/parasha-study/sefarim/shemot' />
        <Redirect from='/tanach-study/sefarim/vayikra' to='/parasha-study/sefarim/vayikra' />
        <Redirect from='/tanach-study/sefarim/bemidbar' to='/parasha-study/sefarim/bemidbar' />
        <Redirect from='/tanach-study/sefarim/devarim' to='/parasha-study/sefarim/devarim' />

        <Route exact path='/tanach-study/teachers/:id' component={Teacher} />
        <Route exact path='/tanach-study/teachers' component={AllTeachers} />
        <Route exact path='/tanach-study/perakim/:sefer/:perek' component={Perakim} />
        <Route exact path='/tanach-study/sefarim/:sefer' component={Sefarim} />
        <Route exact path='/tanach-study/parts' component={Parts} />
        <Route exact path='/tanach-study' component={HomePage} />
      </Switch>
    </div>
  );
}

export default TanachStudy;
