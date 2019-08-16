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
    clearInterval(this.state.interval);
  }

  advanceSlide() {
    const next = (this.state.activeIndex + 1) % this.props.slides.length;
    const { captionLeft } = this.props.slides[next];
    const { captionRight } = this.props.slides[next];
    this.props.left(captionLeft);
    this.props.right(captionRight);
    this.setState({ activeIndex: next });
  }

  render() {
    const slides = this.props.slides.map((slide, i) => {
      const style = {
        backgroundImage: `url(${slide.url})`,
      };
      const slideClass = classNames({
        [styles['slide-item']]: true,
        [styles.active]: this.state.activeIndex === i,
        [styles.inactive]: this.state.activeIndex !== i,
      });
      return (
        <div key={`homepage-slider-slide-${i}`} className={slideClass} style={style} />
      );
    }, this);
    return (
      <div className={styles.slideshow}>
        {slides}
      </div>
    );
  }
}

export default Slider;
