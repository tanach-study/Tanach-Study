import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './ParashaStudyHomePage/ParashaStudyHomePage.jsx';
import Parts from './Parts/Parts.jsx';
import Sefarim from './Sefarim/Sefarim.jsx';
import Perakim from './Perakim/Perakim.jsx';
import AllTeachers from './Teachers/AllTeachers.jsx';
import Teacher from './Teachers/Teacher.jsx';

function getParasha() {
  const today = new Date();
  const month = today.getMonth(); // 0-11
  const date = today.getDate(); // 1-31

  // const JANUARY = 0;
  // const FEBRUARY = 1;
  // const MARCH = 2;
  // const APRIL = 3;
  // const MAY = 4;
  const JUNE = 5;
  const JULY = 6;
  // const AUGUST = 7;
  // const SEPTEMBER = 8;
  // const OCTOBER = 9;
  // const NOVEMBER = 10;
  // const DECEMBER = 11;

  let parasha = '';

  if (month === JUNE) {
    if (date < 9) {
      parasha = 'bemidbar/bemidbar';
    } else if (date < 16) {
      parasha = 'bemidbar/naso';
    } else if (date < 23) {
      parasha = 'bemidbar/behaalotecha';
    } else if (date < 30) {
      parasha = 'bemidbar/shelah';
    }
  } else if (month === JULY) {
    if (date < 7) {
      parasha = 'bemidbar/korah';
    } else if (date < 14) {
      parasha = 'bemidbar/hukat';
    } else if (date < 21) {
      parasha = 'bemidbar/balak';
    } else if (date < 28) {
      parasha = 'bemidbar/pinehas';
    } else if (date < 32) {
      parasha = 'bemidbar/matot';
    }
  }
  return parasha;
}

function ParashaStudy(props) {
  const parasha = getParasha();
  const redirectTo = `/parasha-study/perakim/${parasha}`;
  return (
    <div className='body'>
      <Switch>
        <Redirect from='/parasha-study/parasha' to={redirectTo} />
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
