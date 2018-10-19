import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import global styles
import './styles.global.css';

import Navigation from './Navigation/Navigation.jsx';
import Footer from './Footer/Footer.jsx';
import HomePage from './HomePage/HomePage.jsx';
import About from './About/About.jsx';
import Parts from './Parts/Parts.jsx';
import Sefarim from './Sefarim/Sefarim.jsx';
import Perakim from './Perakim/Perakim.jsx';
import Donate from './Donate/Donate.jsx';
import Contact from './Contact/Contact.jsx';
import Signup from './Signup/Signup.jsx';
import AllTeachers from './Teachers/AllTeachers.jsx';
import Teacher from './Teachers/Teacher.jsx';

function getParasha() {
  const today = new Date();
  const month = today.getMonth(); // 0-11
  const date = today.getDate(); // 1-31

  const AUGUST = 7;
  const SEPTEMBER = 8;

  let parasha = '';

  if (month === AUGUST) {
    if (date < 5) { // ekev is july 29 - august 4, inclusive
      parasha = 'ekev';
    } else if (date < 12) { // re'e is august 5-11, inclusive
      parasha = 're\'e';
    } else if (date < 19) { // shofetim is august 12-18, inclusive
      parasha = 'shofetim';
    } else if (date < 26) { // ki tetze is august 19-25, inclusive
      parasha = 'ki-tetze';
    } else if (date < 32) { // ki tavo is august 26 september 1, inclusive
      parasha = 'ki-tavo';
    }
  } else if (month === SEPTEMBER) {
    if (date < 9) { // nitzavim is september 2-8, inclusive
      parasha = 'nitzavim';
    } else if (date < 16) { // vayelech is september 9-15, inclusive
      parasha = 'vayelech';
    } else if (date < 23) { // haazinu is september 16-22, inclusive
      parasha = 'haazinu';
    } else if (date < 32) { // vezot haberacha is september 23-29, inclusive
      parasha = 'vezot-haberacha';
    }
  }
  return parasha;
}

function App(props) {
  const parasha = getParasha();
  return (
    <div>
      <Navigation />
      <div className='body'>
        <Switch>
          <Route exact path='/teachers/:id' component={Teacher} />
          <Route exact path='/teachers' component={AllTeachers} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/donate' component={Donate} />
          <Route exact path='/perakim/:sefer/:perek' component={Perakim} />
          <Route exact path='/sefarim/:sefer' component={Sefarim} />
          <Route exact path='/parts' component={Parts} />
          <Route path='/about' component={About} />
          <Redirect from='/parasha' to={`/perakim/devarim/${parasha}`} />
          <Route path='/' component={HomePage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
