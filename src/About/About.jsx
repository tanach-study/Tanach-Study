import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AboutNav from './AboutNav.jsx';
import Mission from './Mission.jsx';
import Practices from './Practices.jsx';
import History from './History.jsx';
import FAQs from './FAQs.jsx';
import Yerushalmi from './Yerushalmi/Yerushalmi.jsx';

class About extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { location } = this.props;
    return (
      <div className='container'>
        <h1 className='center'>About Us</h1>

        <AboutNav path={location.pathname} />

        <Switch>
          <Route exact path='/about' component={Mission} />
          <Route exact path='/about/mission' component={Mission} />
          <Route exact path='/about/practices' component={Practices} />
          <Route exact path='/about/history' component={History} />
          <Route exact path='/about/faqs' component={FAQs} />
          <Route exact path='/about/yerushalmi' component={Yerushalmi} />
          <Redirect from='/about' to='/about/mission' />
        </Switch>
      </div>
    );
  }
}

export default About;
