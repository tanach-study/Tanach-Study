import React from 'react';
import { Link } from 'react-router-dom';

import styles from './About.css';

function AboutNav (props) {
  return (
    <ul className='tabs center'>
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
  );
}

export default AboutNav;
