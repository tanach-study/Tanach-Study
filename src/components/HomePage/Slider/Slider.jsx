import React from 'react';
import styles from './Slider.css';

const Slider = props => {
  return (
    <div className="slider">

      <div className={`${styles['modal']} card z-depth-5 hide-on-small-only`}>
        <h1 className="header center teal-text text-lighten-2">Tanach Study</h1>
        <div className="row center">
          <h5 className="header col s12 light">Fusing the most modern of technologies with the most ancient of texts</h5>
        </div>
        <div className="row center">
          <a href="/signup" className="btn-large waves-effect waves-light teal lighten-1 hoverable">Sign Up Now!</a>
        </div>
      </div>

      <ul className="slides">
        <li>
          <img src="/assets/images/background1.jpg" alt="Unsplashed background img 1" />
        </li>
        <li>
          <img src="/assets/images/background2.jpg" alt="Unsplashed background img 2" />
        </li>
      </ul>
    </div>
  );
}

export default Slider;
