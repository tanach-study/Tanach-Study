import React, { Component } from 'react';

class Slider extends Component {
  constructor(props) {
    super(props);
    const slides = this.props.slides.map((slide, i) => {
      return (
        <li key={i}>
          <img src={slide.url} alt=""/>
          <div className="caption left-align">
            <h5>{slide.captionLeft}</h5>
          </div>
          <div className="caption right-align">
            <h5>{slide.captionRight}</h5>
          </div>
        </li>
      )
    });
    this.state = {
      activeIndex: 0,
      allSlides: slides || [],
      bgImage: '',
    }
  }

  updateState(key, value) {
    this.setState({
      [key]: value,
    });
  }

  render() {
    return (
      <ul className="slides">
        {this.state.allSlides[this.state.activeIndex]}
      </ul>
    );
  }
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
