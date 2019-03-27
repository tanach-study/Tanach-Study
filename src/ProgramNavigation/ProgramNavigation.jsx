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
      <nav className={`${styles['program-navigation']}`}>
        <ul className='valign-wrapper'>
          <li className={styles['nav-list-item']}>
            <Link to='/tanach-study' className={styles['nav-link']}>
              <img src='/assets/images/logo.png' alt='Tanach Study Logo' />
            </Link>
          </li>
          <li className={styles['nav-list-item']}>
            <Link to='/mishna-study' className={styles['nav-link']}>
              <img src='/assets/images/logo.png' alt='Mishna Study Logo' />
            </Link>
          </li>
          <li className={styles['nav-list-item']}>
            <Link to='/haftara-study' className={styles['nav-link']}>
              <img src='/assets/images/logo.png' alt='Haftara Study Logo' />
            </Link>
          </li>
          <li className={styles['nav-list-item']}>
            <Link to='/moadim-study' className={styles['nav-link']}>
              <img src='/assets/images/logo.png' alt='Moadim Study Logo' />
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default ProgramNavigation;
