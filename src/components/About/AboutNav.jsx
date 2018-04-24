import React from 'react';
import { Link } from 'react-router-dom';

import styles from './About.css';

function AboutNav (props) {
  return (
    <div>
      <ul className='tabs center hide-on-small-only'>
        <li className={`tab ${props.path === '/about/mission' ? styles['active-li'] : ''}`}>
          <Link to='/about/mission' className={`tsblue-text ${props.path === '/about/mission' ? styles['active-link'] : '' }`}>Our Mission</Link>
        </li>
        <li className={`tab ${props.path === '/about/practices' ? styles['active-li'] : ''}`}>
          <Link to='/about/practices' className={`tsblue-text ${props.path === '/about/practices' ? styles['active-link'] : '' }`}>Core Practices</Link>
        </li>
        <li className={`tab ${props.path === '/about/history' ? styles['active-li'] : ''}`}>
          <Link to='/about/history' className={`tsblue-text ${props.path === '/about/history' ? styles['active-link'] : '' }`}>History</Link>
        </li>
        <li className={`tab ${props.path === '/about/faqs' ? styles['active-li'] : ''}`}>
          <Link to='/about/faqs' className={`tsblue-text ${props.path === '/about/faqs' ? styles['active-link'] : '' }`}>FAQ's</Link>
        </li>
      </ul>
      <ul className='row hide-on-med-and-up'>
        <li className={`tab col s10 offset-s1 tsblue btn ${styles['mobile-li']}`}>
          <Link to='/about/mission' className={`white-text col s10 offset-s1 ${props.path === '/about/mission' ? styles['mobile-link'] : ''}`}>Our Mission</Link>
        </li>
        <li className={`tab col s10 offset-s1 tsblue btn ${styles['mobile-li']}`}>
          <Link to='/about/practices' className={`white-text col s10 offset-s1 ${props.path === '/about/practices' ? styles['mobile-link'] : ''}`}>Core Practices</Link>
        </li>
        <li className={`tab col s10 offset-s1 tsblue btn ${styles['mobile-li']}`}>
          <Link to='/about/history' className={`white-text col s10 offset-s1 ${props.path === '/about/history' ? styles['mobile-link'] : ''}`}>History</Link>
        </li>
        <li className={`tab col s10 offset-s1 tsblue btn ${styles['mobile-li']}`}>
          <Link to='/about/faqs' className={`white-text col s10 offset-s1 ${props.path === '/about/faqs' ? styles['mobile-link'] : ''}`}>FAQ's</Link>
        </li>
      </ul>
    </div>
  );
}

export default AboutNav;
