import React from 'react';
import { Link } from 'gatsby';

import styles from './About.module.css';

function AboutNav(props) {
  const links = [
    {
      link: '/about/mission',
      text: 'Our Mission',
    },
    {
      link: '/about/practices',
      text: 'Core Practices',
    },
    {
      link: '/about/history',
      text: 'History',
    },
    {
      link: '/about/faqs',
      text: 'FAQ\'s',
    },
    {
      link: '/about/yerushalmi',
      text: 'Yerushalmi',
    },
  ];

  const desktopLinks = links.map((l) => {
    const { link, text } = l;
    const active = styles['active-link'];
    return (
      <li key={`AboutNav-links-desktop-li-${link}`} className='tab'>
        <Link to={link} className='tsblue-text' activeClassName={active}>{text}</Link>
      </li>
    );
  });

  const mobileLinks = links.map((l) => {
    const { link, text } = l;
    const liClass = `tab col s10 offset-s1 tsblue btn ${styles['mobile-li']}`;
    const aClass = 'white-text col s10 offset-s1';
    const active = styles['mobile-link'];
    return (
      <li key={`AboutNav-links-mobile-li-${link}`} className={liClass}>
        <Link to={link} className={aClass} activeClassName={active}>{text}</Link>
      </li>
    );
  });
  return (
    <div>
      <ul className='tabs center hide-on-small-only'>
        {desktopLinks}
      </ul>
      <ul className='row hide-on-med-and-up'>
        {mobileLinks}
      </ul>
    </div>
  );
}

export default AboutNav;
