import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <nav className="white" role="navigation">
          <Link to="/" id="logo-container" className="brand-logo">
            <img className="responsive-img" src="/assets/images/logo.png" alt="Tanach Study Logo"/>
          </Link>
          <div className="nav-wrapper container">
            <ul className="right hide-on-med-and-down">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Donate</a></li>
              <li><Link to="/sefarim/yehoshua">Nevi'im Rishonim</Link></li>
              <li><a href="#">Nevi'im Aharonim</a></li>
              <li><a href="#">Ketuvim</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Upcoming Events</a></li>
            </ul>

            <ul id="nav-mobile" className="side-nav">
              <li><Link to="/">Home</Link></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Donate</a></li>
              <li><Link to="/sefarim/yehoshua">Nevi'im Rishonim</Link></li>
              <li><a href="#">Nevi'im Aharonim</a></li>
              <li><a href="#">Ketuvim</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Upcoming Events</a></li>
            </ul>
            <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          </div>
        </nav>
    )
  }
}

export default Navigation;
