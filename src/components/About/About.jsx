import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import Mission from './Mission.jsx';
import Practices from './Practices.jsx';
import History from './History.jsx';
import FAQs from './FAQs.jsx';

import styles from './About.css';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    console.log(this.props.location.pathname)
    return (
      <div className='container'>
        <h1 className='center'>About Us</h1>
        <ul className='tabs center'>
          <li className={`tab ${this.props.location.pathname === '/about/mission' ? styles['active-li'] : ''}`}>
            <Link to='/about/mission' className={`tsblue-text ${this.props.location.pathname === '/about/mission' ? styles['active-link'] : '' }`}>Our Mission</Link>
          </li>
          <li className={`tab ${this.props.location.pathname === '/about/practices' ? styles['active-li'] : ''}`}>
            <Link to='/about/practices' className={`tsblue-text ${this.props.location.pathname === '/about/practices' ? styles['active-link'] : '' }`}>Core Practices</Link>
          </li>
          <li className={`tab ${this.props.location.pathname === '/about/history' ? styles['active-li'] : ''}`}>
            <Link to='/about/history' className={`tsblue-text ${this.props.location.pathname === '/about/history' ? styles['active-link'] : '' }`}>History</Link>
          </li>
          <li className={`tab ${this.props.location.pathname === '/about/faqs' ? styles['active-li'] : ''}`}>
            <Link to='/about/faqs' className={`tsblue-text ${this.props.location.pathname === '/about/faqs' ? styles['active-link'] : '' }`}>FAQ's</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path='/about/mission' component={Mission} />
          <Route exact path='/about/practices' component={Practices} />
          <Route exact path='/about/history' component={History} />
          <Route exact path='/about/faqs' component={FAQs} />
          <Redirect from='/about' to='/about/mission' />
        </Switch>
      </div>
    );
  }
}

export default About;
