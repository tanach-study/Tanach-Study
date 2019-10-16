import React, { Component } from 'react';
import { Link } from 'gatsby';

import styles from './ProgramNavigation.module.css';

class ProgramNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const links = [
      {
        to: '/tanach-study',
        img: 'https://cdn.tanachstudy.com/assets/images/logo.png',
        alt: 'Tanach Study Logo',
      },
      {
        to: '/parasha-study',
        img: 'https://cdn.tanachstudy.com/assets/images/parasha-study-logo.png',
        alt: 'Parasha Study Logo',
      },
      {
        to: '/parasha-plus-study',
        img: 'https://cdn.tanachstudy.com/assets/images/parasha-study-plus-logo.png',
        alt: 'Parasha Study Plus Logo',
      },
      {
        to: '/mishna-study',
        img: 'https://cdn.tanachstudy.com/assets/images/mishna-study-logo.png',
        alt: 'Mishna Study Logo',
      },
      {
        to: '/haftara-study',
        img: 'https://cdn.tanachstudy.com/assets/images/haftara-study-logo.png',
        alt: 'Haftara Study Logo',
      },
      {
        to: '/moadim-study',
        img: 'https://cdn.tanachstudy.com/assets/images/moadim-study-logo.png',
        alt: 'Moadim Study Logo',
      },
    ];

    const active = styles['nav-list-item-selected'];
    const mappedLinks = links.map(l => (
      <li key={l.to} className={styles['nav-list-item']}>
        <Link
          to={l.to}
          className={styles['nav-link']}
          activeClassName={active}
          partiallyActive
        >
          <img src={l.img} alt={l.alt} />
        </Link>
      </li>
    ));

    return (
      <nav className={`${styles['program-navigation']}`}>
        <ul className='valign-wrapper'>
          {mappedLinks}
        </ul>
      </nav>
    );
  }
}

export default ProgramNavigation;
