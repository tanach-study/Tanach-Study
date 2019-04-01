import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Navigation.css';

import { ProgramContext } from '../app-context.js';

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
    const { program } = this.props;
    const prog = program || {};
    const { linkPrefix } = prog;
    const lp = linkPrefix ? `/${linkPrefix}` : '/tanach-study';
    return (
      <nav className={`white ${styles.tsnav} valign-wrapper`}>
        <div
          className={`${styles['mobile-activator']} hide-on-large-only tsblue-text valign`}
          onClick={() => this.toggleMobileNav()}
        >
          <i className='material-icons'>menu</i>
        </div>
        <ul className={`${styles['desktop-nav']} hide-on-med-and-down`}>
          <li><Link to={`${lp}`}>Home</Link></li>
          <li><Link to={`${lp}/parts`}>Study</Link></li>
          <li><Link to='/signup'>Sign Up</Link></li>
          <li>
            <a
              href='https://www.youtube.com/channel/UC0b52aDc7f8VTtxT-Ktfb6Q/videos'
              target='blank'
            >
              Videos
            </a>
          </li>
          <li><Link to='/donate'>Donate</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li><Link to='/about'>About Us</Link></li>
        </ul>

        <div className={mobileNavClass}>
          <div className='row full-height'>
            <div className='col m5 s8 full-height white' onClick={() => this.toggleMobileNav()}>
              <ul className={`${styles['mobile-nav']} tsblue-text`}>
                <li><Link to={`${lp}`}>Home</Link></li>
                <li><Link to={`${lp}/parts`}>Study</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li>
                  <a
                    href='https://www.youtube.com/channel/UC0b52aDc7f8VTtxT-Ktfb6Q/videos'
                    target='blank'
                  >
                    Videos
                  </a>
                </li>
                <li><Link to='/donate'>Donate</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
                <li><Link to='/about'>About Us</Link></li>
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
