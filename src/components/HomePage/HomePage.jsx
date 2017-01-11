import React, { Component } from 'react';
import { Link } from 'react-router';
// import Lightbox from 'react-images';
import Slider from './Slider/Slider.jsx';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          url: '/assets/images/background1.jpg',
          passuk_heb: 'Passuk 1 in English',
          passuk_eng: 'passuk 2 in Hebrew',
        },
        {
          url: '/assets/images/background2.jpg',
          passuk_heb: 'Passuk 1 in English',
          passuk_eng: 'passuk 2 in Hebrew',
        },
      ],
      currentIndex: 0,
    }
  }

  updateState(key, value) {
    this.setState({
      [key]: value,
    });
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    setInterval(this.startSlider.bind(this), 3000)
  }

  componentDidMount() {
    init(jQuery);
  }

  startSlider() {
    const curr = this.state.currentIndex;
    if (curr + 1 >= this.state.images.length) {
      this.updateState('currentIndex', 0);
    } else {
      this.updateState('currentIndex', curr+1);
    }
  }

  render() {
    return(
      <div>
        <div id="index-banner" className="hide-on-med-and-up">
          <div className="section no-pad-top">
            <div className="container">
              <h1 className="header center teal-text text-lighten-2">Tanach Study</h1>
              <div className="row center">
                <h5 className="header col s12 light">Fusing modern technologies<br/>with ancient texts</h5>
              </div>
              <div className="row center">
                <Link to="/signup" className="btn-large waves-effect waves-light teal lighten-1 hoverable">Sign Up Now!</Link>
              </div>
            </div>
          </div>
        </div>

        <Slider images={this.state.images} index={this.state.currentIndex} />


        <div className="container">
          <div className="section">

            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center teal-text text-lighten-2"><i className="material-icons">headset</i></h2>
                  <h5 className="center">Mode of Study</h5>

                  <p className="light center-align">A free digital Tanach study program that is all-encompassing and geared towards English-speaking communities around the world.</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center teal-text text-lighten-2"><span>&#128214;</span></h2>
                  <h5 className="center">Torah Content</h5>

                  <p className="light center-align">We offer you an  experience that allows you to become intimately familiar with the text, framework, and storyline of the Tanach. Every Sefer. Every Perek. Every Pasuk.</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center teal-text text-lighten-2"><span>&#10017;</span></h2>
                  <h5 className="center">Build Identity</h5>
                  <p className="light center-align">To increase knowledge of your ancestral Jewish history, to strengthen your sense of awe and love of God, and reinforce your personal and national Jewish identity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">
                <h5 className="header col s12 light"></h5>
              </div>
            </div>
          </div>
          <div className=""><img src="/assets/images/collage.png" alt="Collage of all educators" /></div>
        </div>


        <div className="parallax-container white black-text">
          <div className="row hide-on-small-only">
            <div className="col l2 offset-l1 m3 offset-m1"><p><br/>"testimonial #1 testimonial #1 testimonial #1 testimonial #1 testimonial #1 testimonial #1"</p></div>
            <div className="col l2 offset-l1 m3 offset-m1"><p><br/><br/><br/>"testimonial #2 testimonial #2 testimonial #2 testimonial #2 testimonial #2 testimonial #2"</p></div>
            <div className="col l2 offset-l1 m3 offset-m1"><p><br/>"testimonial #3 testimonial #3 testimonial #3 testimonial #3 testimonial #3 testimonial #3"</p></div>
            <div className="col l2 m3 offset-m2 hide-on-med-and-down"><p><br/><br/><br/><br/><br/><br/>"testimonial #4 testimonial #4 testimonial #4 testimonial #4 testimonial #4 testimonial #4"</p></div>
          </div>
          <div className="row hide-on-med-and-up">
            <div className="col s12"><p>"testimonial #1 testimonial #1 testimonial #1 testimonial #1 testimonial #1 testimonial #1"</p></div>
            <div className="col s12"><p>"testimonial #2 testimonial #2 testimonial #2 testimonial #2 testimonial #2 testimonial #2"</p></div>
            <div className="col s12"><p>"testimonial #3 testimonial #3 testimonial #3 testimonial #3 testimonial #3 testimonial #3"</p></div>
          </div>
        </div>

        <footer className="page-footer teal">
          <div className="footer-copyright">
            <div className="container">
            Created by <a className="brown-text text-lighten-3" href="http://joeyp.nyc">Joey Pinhas</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default HomePage;
