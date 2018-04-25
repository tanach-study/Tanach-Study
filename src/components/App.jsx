import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import global styles
import './styles.global.css';

import DocumentMeta from 'react-document-meta';

import Navigation from './Navigation/Navigation.jsx';
import Footer from './Footer/Footer.jsx';
import HomePage from './HomePage/HomePage.jsx';
import About from './About/About.jsx';
import Parts from './Parts/Parts.jsx';
import Sefarim from './Sefarim/Sefarim.jsx';
import Perakim from './Perakim/Perakim.jsx';
import Donate from './Donate/Donate.jsx';
import Contact from './Contact/Contact.jsx';
import Videos from './Videos/Videos.jsx';
import Signup from './Signup/Signup.jsx';
import SignupSuccess from './Signup/SignupSuccess/SignupSuccess.jsx';
import SignupError from './Signup/SignupError/SignupError.jsx';
import AllTeachers from './Teachers/AllTeachers.jsx';
import Teacher from './Teachers/Teacher.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const meta = {
      title: 'Tanach Study',
      description: 'Tanach Study is a web-based platform for learning Tanach, or the 24 books of the Old Testament',
    }
    return (
      <div>
        <Navigation />
          <div className='body'>
            <Switch>
              <Route exact path='/teachers/:id' component={Teacher} />
              <Route exact path='/teachers' component={AllTeachers} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/videos' component={Videos} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/donate' component={Donate} />
              <Route exact path='/perakim/:sefer/:perek' component={Perakim} />
              <Route exact path='/sefarim/:sefer' component={Sefarim} />
              <Route exact path='/parts' component={Parts} />
              <Route path='/about' component={About} />
              <Route path='/' component={HomePage} />
            </Switch>
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
