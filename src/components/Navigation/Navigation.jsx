import React, { Component } from 'react';

class Navigation extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <nav className="white" role="navigation">
          <div className="nav-wrapper container">
            <a id="logo-container" href="#" className="brand-logo">Logo
            </a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Donate</a></li>
              <li><a href="#">Nevi'im Rishonim</a></li>
              <li><a href="#">Nevi'im Aharonim</a></li>
              <li><a href="#">Ketuvim</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Upcoming Events</a></li>
            </ul>

            <ul id="nav-mobile" className="side-nav">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Donate</a></li>
              <li><a href="#">Nevi'im Rishonim</a></li>
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
