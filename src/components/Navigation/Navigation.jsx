import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideMobile: true,
    }
  }

  updateState(key, value) {
    this.setState({
      [key]: value,
    });
  }

  toggleMobileNav() {
    const hidden = this.state.hideMobile;
    this.updateState('hideMobile', !hidden);
  }

  render() {
    const mobileNavClass = classNames({
      'mobile-nav-container': true,
      'hide-on-large-only': true,
      'hide': this.state.hideMobile,
    });
    return (
      <nav className="white tsnav valign-wrapper" role="navigation">
        <div className="mobile-activator hide-on-large-only tsblue-text valign" onClick={() => this.toggleMobileNav()}><i className="material-icons">menu</i></div>
        <div className="row no-margin-bottom full-height full-width hide-on-med-and-down">
          <div className="col l2 m1 s3 offset-l1 offset-m1 offset-s1 full-height">
            <Link to="/" className="full-height valign">
              <img className="full-height" src="/assets/images/logo.png" alt="Tanach Study Logo"/>
            </Link>
          </div>
          <div className="col l7 right-align valign">
            <ul className="right">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/parts">Study a Perek</Link></li>
              <li><Link to="/teachers">Our Teachers</Link></li>
              <li><Link to="/videos">Videos</Link></li>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col l2"></div>
        </div>

        <div className={mobileNavClass}>
          <div className="row full-height">
            <div className="col m5 s8 full-height white">
              <ul className="mobile-nav tsblue-text" onClick={() => this.toggleMobileNav()}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/parts">Study a Perek</Link></li>
                <li><Link to="/teachers">Our Teachers</Link></li>
                <li><Link to="/videos">Videos</Link></li>
                <li><Link to="/donate">Donate</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="col m7 s8 full-height pointer mobile-nav-outside" onClick={() => this.toggleMobileNav()}></div>
          </div>
        </div>


      </nav>
    )
  }
}

export default Navigation;
