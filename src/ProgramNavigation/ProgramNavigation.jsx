import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './ProgramNavigation.css';

class ProgramNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <nav className={`${styles['program-navigation']} valign-wrapper`}>
        <ul className=''>
          <li><Link to='/tanach-study'>Tanach Study</Link></li>
          <li><Link to='/mishna-study'>Mishna Study</Link></li>
          <li><Link to='/moadim-study'>Moadim Study</Link></li>
          <li><Link to='/haftara-study'>Haftara Study</Link></li>
        </ul>
      </nav>
    );
  }
}

export default ProgramNavigation;
