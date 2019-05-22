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
import ParashaStudy from './ParashaStudy/ParashaStudy.jsx';
import MishnaStudy from './MishnaStudy/MishnaStudy.jsx';

import { programs, ProgramContext } from './app-context.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programs,
    };
  }

  render() {
    const { programs: progs } = this.state;
    const { location } = this.props;
    const { pathname } = location;

    const section = pathname.split('/')[1].replace('-', '');
    return (
      <ProgramContext.Provider value={progs[section] || progs['tanachstudy']}>
        <Route path='/' component={ProgramNavigation} />
        <ProgramContext.Consumer>
          {program => <Navigation program={program} />}
        </ProgramContext.Consumer>
        <div className='body'>
          <Switch>
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/donate' component={Donate} />
            <Route path='/about' component={About} />
            <Redirect from='/parasha' to='/parasha-study/parasha' />
            <Route path='/tanach-study' component={TanachStudy} />
            <Route path='/parasha-study' component={ParashaStudy} />
            <Route path='/mishna-study' component={MishnaStudy} />
            <Redirect from='/parts' to='/tanach-study/parts' />
            <Redirect from='/teachers/:id' to='/tanach-study/teachers/:id' />
            <Redirect from='/teachers' to='/tanach-study/teachers' />
            <Redirect from='/perakim/:sefer/:perek' to='/tanach-study/perakim/:sefer/:perek' />
            <Redirect from='/sefarim/:sefer' to='/tanach-study/sefarim/:sefer' />
            <Redirect from='/teachers' to='/tanach-study/teachers' />
            <Route path='/' component={HomePage} />
          </Switch>
        </div>
        <ProgramContext.Consumer>
          {program => <Footer program={program} />}
        </ProgramContext.Consumer>
      </ProgramContext.Provider>
    );
  }
}

export default App;
