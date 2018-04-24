import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Mission from './Mission.jsx';
import Practices from './Practices.jsx';
import History from './History.jsx';
import FAQs from './FAQs.jsx';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='container'>
        <h1 className='center'>About Us</h1>

        <div className='divider'></div>

        <Mission />

        <div className='divider'></div>

        <Practices />

        <div className='divider'></div>

        <History />

        <div className='divider'></div>

        <FAQs />

      </div>
    );
  }
}

export default About;
