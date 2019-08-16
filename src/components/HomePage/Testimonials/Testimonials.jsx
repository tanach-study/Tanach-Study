import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './Testimonials.module.css';

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      interval: null,
    };
  }

  componentDidMount() {
    const interval = setInterval(() => {
      this.advanceSlide();
    }, 15000);
    this.setState({ interval });
  }

  componentWillUnmount() {
    const { interval } = this.state;
    clearInterval(interval);
  }

  advanceSlide() {
    const { activeIndex } = this.state;
    const { testimonials } = this.props;
    const curr = activeIndex;
    const numSlides = testimonials.length;
    let next = curr + 1;
    if (next >= numSlides) next = 0;
    this.setState({ activeIndex: next });
  }

  retractSlide() {
    const { activeIndex } = this.state;
    const { testimonials } = this.props;
    const curr = activeIndex;
    const numSlides = testimonials.length;
    let next = curr - 1;
    if (next <= 0) next = numSlides;
    this.setState({ activeIndex: next });
  }

  render() {
    const { activeIndex } = this.state;
    const { testimonials } = this.props;
    const mappedTestimonials = testimonials.map((testimonial, i) => {
      const slideClass = classNames({
        [styles['testimonial-slide-item']]: true,
        valign: true,
        [styles.active]: activeIndex === i,
        [styles.inactive]: activeIndex !== i,
      });
      return (
        <div key={i} className={slideClass}>
          <div className={`${styles.caption} left-align valign`}>
            <p className='grey-text text-darken-2'>{testimonial.Testimonial}</p>
            <p className='grey-text text-lighten-1'>{testimonial.Name}</p>
            <p className='grey-text text-lighten-1'>{testimonial.Title}</p>
          </div>
        </div>
      );
    });

    return (
      <div className={styles.slideshow}>
        {mappedTestimonials}
      </div>
    );
  }
}

export default Testimonials;
