import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './MishnaStudyHomePage/MishnaStudyHomePage.jsx';
import Parts from './Parts/Parts.jsx';
import Masechtot from './Masechtot/Masechtot.jsx';
import Perakim from './Perakim/Perakim.jsx';
import Mishnayot from './Mishnayot/Mishnayot.jsx';
// import AllTeachers from './Teachers/AllTeachers.jsx';
// import Teacher from './Teachers/Teacher.jsx';

function MishnaStudy(props) {
  return (
    <div className='body'>
      <Switch>
        <Redirect from='/mishna-study/mishna/introduction/introduction/1/:part' to='/mishna-study/perek/introduction/introduction/1?part=:part' />
        <Redirect from='/mishna-study/mishna/introduction/' to='/mishna-study/perek/introduction/introduction/1' />
        <Redirect from='/mishna-study/masechet/introduction/' to='/mishna-study/perek/introduction/introduction/1' />
        <Route exact path='/mishna-study/mishna/:seder/:masechet/:perek/:mishna' component={Mishnayot} />
        <Route exact path='/mishna-study/perek/:seder/:masechet/:perek' component={Perakim} />
        <Route exact path='/mishna-study/masechet/:seder/:masechet' component={Masechtot} />
        <Route exact path='/mishna-study/parts' component={Parts} />
        <Route exact path='/mishna-study' component={HomePage} />
      </Switch>
    </div>
  );
}

export default MishnaStudy;
