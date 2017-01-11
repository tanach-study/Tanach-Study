import React from 'react';
import { Link } from 'react-router';
import styles from './Slider.css';

const Slider = props => {
  const imageComps = props.images.map((image, i) => <img src={image.url} alt=""/>)
  return (
    <div className="slider">

      <div className={`${styles['modal']} card z-depth-5 hide-on-small-only`}>
        <h1 className="header center teal-text text-lighten-2">Tanach Study</h1>
        <div className="row center">
          <h5 className="header col s12 light">Fusing modern technologies<br/>with ancient texts</h5>
        </div>
        <div className="row center">
          <Link to="/signup" className="btn-large waves-effect waves-light teal lighten-1 hoverable">Sign Up Now!</Link>
        </div>
      </div>

      <div className="image-container">
        {imageComps[props.index]}
        }
      </div>

    </div>
  );
}

/*
        <img src={props.images[props.index].url} alt=""/>
 <ul className="slides">
        <li>
          <img src="/assets/images/background1.jpg" alt="Unsplashed background img 1" />
        </li>
        <li>
          <img src="/assets/images/background2.jpg" alt="Unsplashed background img 2" />
        </li>
      </ul>
      */

export default Slider;
