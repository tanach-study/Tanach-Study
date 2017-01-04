import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    init(jQuery);
  }

  render() {
    return (
      <nav className="white" role="navigation">
          <Link to="/" id="logo-container" className="brand-logo">
            <img className="responsive-img" src="/assets/images/logo.png" alt="Tanach Study Logo"/>
          </Link>
          <div className="nav-wrapper container">
            <ul className="right hide-on-med-and-down">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/parts">Study a Perek</Link></li>
              <li><Link to="/videos">Videos</Link></li>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="#">Contact Us</Link></li>
            </ul>

            <ul id="nav-mobile" className="side-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/parts">Study a Perek</Link></li>
              <li><Link to="/videos">Videos</Link></li>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="#">Contact Us</Link></li>
            </ul>
            <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          </div>
        </nav>
    )
  }
}

export default Navigation;
