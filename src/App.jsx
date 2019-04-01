import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import global styles
import './styles.global.css';

import ProgramNavigation from './ProgramNavigation/ProgramNavigation.jsx';
import Navigation from './Navigation/Navigation.jsx';
import Footer from './Footer/Footer.jsx';
import HomePage from './HomePage/HomePage.jsx';
import About from './About/About.jsx';
import Donate from './Donate/Donate.jsx';
import Contact from './Contact/Contact.jsx';
import Signup from './Signup/Signup.jsx';

// import program conmponents
import TanachStudy from './TanachStudy/TanachStudy.jsx';
import MishnaStudy from './MishnaStudy/MishnaStudy.jsx';

import { programs, ProgramContext } from './app-context.js';

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programs,
    };
  }

  render() {
    const parasha = getParasha();
    const { programs: progs } = this.state;
    const { location } = this.props;
    const { pathname } = location;

    const section = pathname.split('/')[1].replace('-', '');
    return (
      <ProgramContext.Provider value={progs[section]}>
        <ProgramNavigation />
        <ProgramContext.Consumer>
          {program => <Navigation program={program} />}
        </ProgramContext.Consumer>
        <div className='body'>
          <Switch>
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/donate' component={Donate} />
            <Route path='/about' component={About} />
            <Redirect from='/parasha' to={`/tanach-study/perakim/bereshit/${parasha}`} />
            <Route path='/tanach-study' component={TanachStudy} />
            <Route path='/mishna-study' component={MishnaStudy} />
            <Redirect from='/parts' to='/tanach-study/parts' />
            <Redirect from='/perakim' to='/tanach-study/perakim' />
            <Redirect from='/sefarim' to='/tanach-study/sefarim' />
            <Redirect from='/teachers' to='/tanach-study/teachers' />
            <Route path='/' component={HomePage} />
          </Switch>
        </div>
        <Footer />
      </ProgramContext.Provider>
    );
  }
}

export default App;
