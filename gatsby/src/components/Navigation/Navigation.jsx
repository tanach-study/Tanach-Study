import React, { Component } from 'react';

import { active, mobileActivator, navImageLink, navImage, navList, tsnav } from './Navigation.module.css';

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
    return (
      <nav className={`white ${tsnav} ${isMobileActive ? active : ''}`}>
        <a className={navImageLink} href='https://tanachstudy.com'>
          <img className={navImage} src='https://cdn.tanachstudy.com/assets/images/logo.png' alt='Tanach Study' />
        </a>
        <ul className={`${navList} ${isMobileActive ? active : ''}`}>
          <li><a href='https://tanachstudy.com'>Home</a></li>
          <li><a href='https://tanachstudy.com/about'>About</a></li>
          <li><a href='https://tanachstudy.com/signup'>Sign Up</a></li>
          <li><a href='https://tanachstudy.com/events'>Events</a></li>
          <li><a href='https://tanachstudy.com/donate'>Donate</a></li>
          <li><a href='https://tanachstudy.com/contact'>Contact</a></li>
        </ul>
        <span className={`${mobileActivator} hide-on-large-only black-text`} onClick={() => this.toggleMobileNav()}>
          <i className='material-icons'>menu</i>
        </span>
      </nav>
    );
  }
}

export default Navigation;
