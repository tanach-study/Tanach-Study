import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './TanachStudyHomePage/TanachStudyHomePage.jsx';
import Parts from './Parts/Parts.jsx';
import Sefarim from './Sefarim/Sefarim.jsx';
import Perakim from './Perakim/Perakim.jsx';

function TanachStudy(props) {
  const redirects = [
    { f: '/tanach-study/perakim/bereshit/:perek', t: '/parasha-study/perakim/bereshit/:perek' },
    { f: '/tanach-study/perakim/shemot/:perek', t: '/parasha-study/perakim/shemot/:perek' },
    { f: '/tanach-study/perakim/vayikra/:perek', t: '/parasha-study/perakim/vayikra/:perek' },
    { f: '/tanach-study/perakim/bemidbar/:perek', t: '/parasha-study/perakim/bemidbar/:perek' },
    { f: '/tanach-study/perakim/devarim/:perek', t: '/parasha-study/perakim/devarim/:perek' },
    { f: '/tanach-study/sefarim/bereshit', t: '/parasha-study/sefarim/bereshit' },
    { f: '/tanach-study/sefarim/shemot', t: '/parasha-study/sefarim/shemot' },
    { f: '/tanach-study/sefarim/vayikra', t: '/parasha-study/sefarim/vayikra' },
    { f: '/tanach-study/sefarim/bemidbar', t: '/parasha-study/sefarim/bemidbar' },
    { f: '/tanach-study/sefarim/devarim', t: '/parasha-study/sefarim/devarim' },
  ];
  const mappedRedirects = redirects.map(({ f, t }) => <Redirect from={f} to={t} />);
  return (
    <div className='body'>
      <Switch>
        {mappedRedirects}
        <Route exact path='/tanach-study/perakim/:sefer/:perek' component={Perakim} />
        <Route exact path='/tanach-study/sefarim/:sefer' component={Sefarim} />
        <Route exact path='/tanach-study/parts' component={Parts} />
        <Route exact path='/tanach-study' component={HomePage} />
      </Switch>
    </div>
  );
}

export default TanachStudy;
