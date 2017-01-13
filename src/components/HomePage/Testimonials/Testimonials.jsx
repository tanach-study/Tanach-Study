import React, { Component } from 'react';

const Testimonials = props => {
  const testimonials = props.testimonials.map((testimonial, i) => {
    return (
      <li key={i}>
        <div className="caption center-align valign">
          <p>{testimonial.Testimonial}</p>
          <p className="">{testimonial.Name}</p>
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
