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
    const { location } = this.props;
    const { pathname } = location;

    const links = [
      {
        to: '/tanach-study',
        img: 'https://cdn.tanachstudy.com/assets/images/logo.png',
        alt: 'Tanach Study Logo',
        activate: !(pathname.includes('/mishna-study')
          || pathname.includes('/haftara-study')
          || pathname.includes('/parasha-study')
          || pathname.includes('/moadim-study')),
      },
      {
        to: '/parasha-study',
        img: 'https://cdn.tanachstudy.com/assets/images/parasha-study-logo.png',
        alt: 'Parasha Study Logo',
        activate: pathname.includes('/parasha-study'),
      },
      {
        to: '/mishna-study',
        img: 'https://cdn.tanachstudy.com/assets/images/mishna-study-logo.png',
        alt: 'Mishna Study Logo',
        activate: pathname.includes('/mishna-study'),
      },
      {
        to: '/haftara-study',
        img: 'https://cdn.tanachstudy.com/assets/images/haftara-study-logo.png',
        alt: 'Haftara Study Logo',
        activate: pathname.includes('/haftara-study'),
      },
      {
        to: '/moadim-study',
        img: 'https://cdn.tanachstudy.com/assets/images/moadim-study-logo.png',
        alt: 'Moadim Study Logo',
        activate: pathname.includes('/moadim-study'),
      },
    ];

    const active = styles['nav-list-item-selected'];
    const mappedLinks = links.map(l => (
      <li key={l.to} className={`${l.activate ? active : ''} ${styles['nav-list-item']}`}>
        <Link to={l.to} className={styles['nav-link']}>
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
