import React from 'react';

const Slider = props => {
  return (
    <div className="slider">
      <ul className="slides">
        <li>
          <img src="/assets/images/background1.jpg" alt="Unsplashed background img 1" />
          <div className="caption left-align">
            <h3>This is our big Tagline!</h3>
            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
          </div>
        </li>
        <li>
          <img src="/assets/images/background2.jpg" alt="Unsplashed background img 2" />
          <div className="caption left-align">
            <h3>This is our second big Tagline!</h3>
            <h5 className="light grey-text text-lighten-3">Here's our second small slogan.</h5>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Slider;
