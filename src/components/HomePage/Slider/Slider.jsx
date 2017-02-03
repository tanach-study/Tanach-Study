import React, { Component } from 'react';
import classNames from 'classnames';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
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
    }, 50000)
  }

  advanceSlide() {
    const curr = this.state.activeIndex;
    const numSlides = this.props.slides.length;
    let next = curr + 1;
    if (next >= numSlides) next = 0;
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
        <div key={i} className={slideClass} style={style}>
          <div className="caption left-align">
            <h5>{slide.captionLeft}</h5>
          </div>
          <div className="caption right-align">
            <h5>{slide.captionRight}</h5>
          </div>
        </div>
      )
    });
    return (
      <div className="slideshow">
        {slides}
      </div>
    );
  }
}

export default Slider;
