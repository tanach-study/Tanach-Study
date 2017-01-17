import React from 'react';
import { Link } from 'react-router';
import styles from './Slider.css';

const Slider = props => {
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

      <ul className="slides">
        <li>
          <img src="/assets/images/ts_bg_1.JPG" alt="Unsplashed background img 1" />
        </li>
        <li>
          <img src="/assets/images/ts_bg_2.png" alt="Unsplashed background img 2" />
        </li>
        <li>
          <img src="/assets/images/ts_bg_3.JPG" alt="Unsplashed background img 3" />
        </li>
      </ul>

    </div>
  );
}

/*
  const imageComps = props.images.map((image, i) => <img src={image.url} alt=""/>)
        <img src={props.images[props.index].url} alt=""/>
 <div className="image-container">
        {imageComps[props.index]}
        }
      </div>
      */

export default Slider;
