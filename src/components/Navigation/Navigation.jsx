import React, { Component } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';

import styles from './Navigation.module.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideMobile: true,
    };
  }

  toggleMobileNav() {
    const { hideMobile } = this.state;
    this.setState({
      hideMobile: !hideMobile,
    });
  }

  render() {
    const { hideMobile } = this.state;
    const mobileNavClass = classNames({
      [styles['mobile-nav-container']]: true,
      'hide-on-large-only': true,
      hide: hideMobile,
    });
    return (
      <nav className={`white ${styles.tsnav} valign-wrapper`}>
        <div
          className={`${styles['mobile-activator']} hide-on-large-only tsblue-text valign`}
          onClick={() => this.toggleMobileNav()}
        >
          <i className='material-icons'>menu</i>
        </div>
        <ul className={`${styles['desktop-nav']} hide-on-med-and-down`}>
          <li><a href='https://tanachstudy.com'>Home</a></li>
          <li><a href='https://tanachstudy.com/about'>About</a></li>
          <li><Link to='/signup'>Sign Up</Link></li>
          <li><a href='https://tanachstudy.com/donate'>Donate</a></li>
          <li><a href='https://tanachstudy.com/contact'>Contact</a></li>
        </ul>

        <div className={mobileNavClass}>
          <div className='row full-height'>
            <div className='col m5 s8 full-height white' onClick={() => this.toggleMobileNav()}>
              <ul className={`${styles['mobile-nav']} tsblue-text`}>
                <li><a href='https://tanachstudy.com'>Home</a></li>
                <li><a href='https://tanachstudy.com/about'>About</a></li>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><a href='https://tanachstudy.com/donate'>Donate</a></li>
                <li><a href='https://tanachstudy.com/contact'>Contact</a></li>
              </ul>
            </div>
            <div
              className={`col m7 s4 full-height pointer ${styles['mobile-nav-outside']}`}
              onClick={() => this.toggleMobileNav()}
            />
          </div>
        </div>


      </nav>
    );
  }
}

export default Navigation;
