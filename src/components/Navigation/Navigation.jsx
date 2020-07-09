import React, { Component } from 'react';

import classNames from 'classnames';

import styles from './Navigation.module.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileActive: false,
    };
  }

  toggleMobileNav() {
    const { isMobileActive } = this.state;
    this.setState({
      isMobileActive: !isMobileActive,
    });
  }

  render() {
    const { isMobileActive } = this.state;
    const mobileNavClass = classNames({
      [styles.tsnav]: true,
      [styles.active]: isMobileActive,
    });
    const navListClass = classNames({
      [styles['nav-list']]: true,
      [styles.active]: isMobileActive,
    });
    return (
      <nav className={`white ${mobileNavClass}`}>
        <a className={styles['nav-image-link']} href='https://tanachstudy.com'>
          <img className={styles['nav-image']} src='https://cdn.tanachstudy.com/assets/images/logo.png' alt='Tanach Study' />
        </a>
        <ul className={navListClass}>
          <li><a href='https://tanachstudy.com'>Home</a></li>
          <li><a href='https://tanachstudy.com/about'>About</a></li>
          <li><a href='https://tanachstudy.com/signup'>Sign Up</a></li>
          <li><a href='https://tanachstudy.com/events'>Events</a></li>
          <li><a href='https://tanachstudy.com/donate'>Donate</a></li>
          <li><a href='https://tanachstudy.com/contact'>Contact</a></li>
        </ul>
        <span className={`${styles['mobile-activator']} hide-on-large-only black-text`} onClick={() => this.toggleMobileNav()}>
          <i className='material-icons'>menu</i>
        </span>
      </nav>
    );
  }
}

export default Navigation;
