import React, { Component } from 'react';
import classNames from 'classnames';

class Slider extends Component {
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
    }, 5000);
    this.updateState('interval', interval);
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  advanceSlide() {
    const curr = this.state.activeIndex;
    const numSlides = this.props.slides.length;
    let next = curr + 1;
    if (next >= numSlides) next = 0;
    const captionLeft = this.props.slides[this.state.activeIndex].captionLeft;
    const captionRight = this.props.slides[this.state.activeIndex].captionRight;
    this.props.left(captionLeft);
    this.props.right(captionRight);
    this.updateState('activeIndex', next);
  }

  render() {
    const slides = this.props.slides.map((slide, i) => {
      const style = {
        backgroundImage: `url(${slide.url})`,
      }
      const slideClass = classNames({
        'slide-item': true,
        active: this.state.activeIndex == i,
        inactive: this.state.activeIndex != i,
      });
      return (
        <div key={i} className={slideClass} style={style}></div>
      )
    }, this);
    return (
      <div className="slideshow">
        {slides}
      </div>
    );
  }
}

export default Slider;
