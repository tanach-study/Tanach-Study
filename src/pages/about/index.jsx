import React, { Component } from 'react';

import Mission from './mission.jsx';

class About extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Mission />
    );
  }
}

export default About;
