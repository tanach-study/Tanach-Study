import React, { Component } from 'react';
import classNames from 'classnames';

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      interval: null,
    }
  }

  updateState(key, value) {
    this.setState({
      [key]: value,
    });
  }

  componentDidMount() {
    const interval = setInterval(() => {
      this.advanceSlide();
    }, 15000);
    this.updateState('interval', interval);
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  advanceSlide() {
    const curr = this.state.activeIndex;
    const numSlides = this.props.testimonials.length;
    let next = curr + 1;
    if (next >= numSlides) next = 0;
    this.updateState('activeIndex', next);
  }

  retractSlide() {
    const curr = this.state.activeIndex;
    const numSlides = this.props.testimonials.length;
    let next = curr - 1;
    if (next <= 0) next = numSlides;
    this.updateState('activeIndex', next);
  }

  render() {
    const testimonials = this.props.testimonials.map((testimonial, i) => {
      const slideClass = classNames({
        'testimonial-slide-item': true,
        valign: true,
        active: this.state.activeIndex == i,
        inactive: this.state.activeIndex != i,
      });
      return (
        <div key={i} className={slideClass}>
          <div className="caption left-align valign">
            <p className="grey-text text-darken-2">{testimonial.Testimonial}</p>
            <p className="grey-text text-lighten-1">{testimonial.Name}</p>
            <p className="grey-text text-lighten-1">{testimonial.Title}</p>
          </div>
        </div>
        );
    });

    return (
      <div className="slideshow">
        {testimonials}
      </div>
    );
  }
}

export default Testimonials;
