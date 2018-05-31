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
import SignupSuccess from './Signup/SignupSuccess/SignupSuccess.jsx';
import SignupError from './Signup/SignupError/SignupError.jsx';
import AllTeachers from './Teachers/AllTeachers.jsx';
import Teacher from './Teachers/Teacher.jsx';


function App(props) {
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
          <Redirect from='/parasha' to='/perakim/bemidbar/behaalotecha' />
          <Route path='/' component={HomePage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
