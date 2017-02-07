import React from 'react';

const Footer = props => {
  return (
    <footer className="tsblue page-footer">
      <div className="container">
      <div className="footer-copyright">
        Created by <a className="brown-text text-lighten-3" href="http://joeyp.nyc">Joey Pinhas</a>
        <div className="right-align white-text">
          <a href="https://www.facebook.com/tanachstudy"><i className="material-icons">facebook</i></a>
          <a href="https://www.instagram.com/tanach_study"><i className="material-icons">instagram</i></a>
          <a href="https://www.youtube.com/channel/UC0b52aDc7f8VTtxT-Ktfb6Q/feed"><i className="material-icons">youtube</i></a>
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
