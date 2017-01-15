import React, { Component } from 'react';

const Testimonials = props => {

  const testimonials = props.testimonials.map((testimonial, i) => {
    const rand = Math.floor(Math.random() * 3);
    let alignClass;
    switch (rand) {
      case 0:
        alignClass = 'caption left-align valign';
        break;
      case 1:
        alignClass = 'caption center-align valign';
        break;
      case 2:
        alignClass = 'caption right-align valign';
        break;
    }
    return (
      <li key={i}>
        <div className={alignClass}>
          <p className="grey-text text-darken-2">{testimonial.Testimonial}</p>
          <p className="grey-text text-lighten-1">{testimonial.Name}</p>
        </div>
      </li>
    );
  })

  return (
    <div className="slider valign-wrapper" id="testimonial-slider">
      <ul className="slides">
        {testimonials}
      </ul>
    </div>
  );
}

export default Testimonials;
