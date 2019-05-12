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

function getParasha() {
  const today = new Date();
  const month = today.getMonth(); // 0-11
  const date = today.getDate(); // 1-31

  const OCTOBER = 9;
  const NOVEMBER = 10;
  const DECEMBER = 11;

  let parasha = '';

  if (month === OCTOBER) {
    if (date < 6) { // bereshit is september 30 - october 6, inclusive
      parasha = 'bereshit';
    } else if (date < 13) { // noah is october 7-13, inclusive
      parasha = 'noah';
    } else if (date < 20) { // lech lecha is october 14-20, inclusive
      parasha = 'lech-lecha';
    } else if (date < 28) { // vayera is october 21-27, inclusive
      parasha = 'vayera';
    } else if (date < 32) { // haye sarah is october 28 - november 3, inclusive
      parasha = 'haye-sarah';
    }
  } else if (month === NOVEMBER) {
    if (date < 3) { // haye sarah is october 28 - november 3, inclusive
      parasha = 'haye-sarah';
    } else if (date < 10) { // toledot is november 4-10, inclusive
      parasha = 'toledot';
    } else if (date < 17) { // vayetze is november 11-17, inclusive
      parasha = 'vayetze';
    } else if (date < 24) { // vayishlah is november 18-24, inclusive
      parasha = 'vayishlah';
    } else if (date < 31) { // vayeshev is november 25 - december 1, inclusive
      parasha = 'vayeshev';
    }
  } else if (month === DECEMBER) {
    if (date < 1) { // vayeshev is november 25 - december 1, inclusive
      parasha = 'vayeshev';
    } else if (date < 8) { // toledot is december 2-8, inclusive
      parasha = 'miketz';
    } else if (date < 15) { // vayigash is december 9-15, inclusive
      parasha = 'vayigash';
    } else if (date < 22) { // vayhi is december 16-22, inclusive
      parasha = 'vayhi';
    } else if (date < 29) { // shemot is december 23-29, inclusive
      parasha = 'shemot';
    } else if (date < 32) { // vaera is december 30 - january 5, inclusive
      parasha = 'vaera';
    }
  }
  return parasha;
}

export default ParashaStudy;
