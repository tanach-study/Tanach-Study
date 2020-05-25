import React, { Component } from 'react';
import { Link } from 'gatsby';
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
    return (
      <nav className={`white ${mobileNavClass}`}>
        <ul className={styles['nav-list']}>
          <li><a href='https://tanachstudy.com'>Home</a></li>
          <li><a href='https://tanachstudy.com/about'>About</a></li>
          <li><Link to='/signup'>Sign Up</Link></li>
          <li><a href='https://tanachstudy.com/donate'>Donate</a></li>
          <li><a href='https://tanachstudy.com/contact'>Contact</a></li>
        </ul>
        <div className={`${styles['mobile-activator']} hide-on-large-only black-text`} onClick={() => this.toggleMobileNav()}>
          <i className='material-icons'>menu</i>
        </div>
      </nav>
    );
  }
}

export default Navigation;
