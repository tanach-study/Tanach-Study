import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './Slider.module.css';

class Slider extends Component {
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
    }, 5000);
    this.setState({ interval });
  }

  componentWillUnmount() {
    const { interval } = this.state;
    clearInterval(interval);
  }

  advanceSlide() {
    const { activeIndex } = this.state;
    const { slides, left, right } = this.props;
    const next = (activeIndex + 1) % slides.length;
    const { captionLeft } = slides[next];
    const { captionRight } = slides[next];
    left(captionLeft);
    right(captionRight);
    this.setState({ activeIndex: next });
  }

  render() {
    const { slides } = this.props;
    const { activeIndex } = this.state;
    const mappedSlides = slides.map((slide, i) => {
      const style = {
        backgroundImage: `url(${slide.url})`,
      };
      const slideClass = classNames({
        [styles['slide-item']]: true,
        [styles.active]: activeIndex === i,
        [styles.inactive]: activeIndex !== i,
      });
      return (
        <div key={`homepage-slider-slide-${slide.url}`} className={slideClass} style={style} />
      );
    }, this);
    return (
      <div className={styles.slideshow}>
        {mappedSlides}
      </div>
    );
  }
}

export default Slider;
