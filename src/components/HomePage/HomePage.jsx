import React, { Component } from 'react';
import { Link } from 'react-router';
import Slider from './Slider/Slider.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';
import testimonials from '../../../public/testimonials.json';
import SignupForm from '../Signup/SignupForm/SignupForm.jsx';

class HomePage extends Component {
  constructor(props) {
    super(props);
    const images  = [
      {
        url: '/assets/images/ts_bg_1.JPG',
        captionRight: 'Passuk 1 in Hebrew',
        captionLeft: 'Passuk 1 in English',
      },
      {
        url: '/assets/images/ts_bg_2.png',
        captionRight: 'Passuk 2 in Hebrew',
        captionLeft: 'Passuk 2 in English',
      },
      {
        url: '/assets/images/ts_bg_3.JPG',
        captionRight: 'Passuk 3 in Hebrew',
        captionLeft: 'Passuk 3 in English',
      },
    ];
    this.state = {
      images: images,
      currentIndex: 0,
      testimonials: testimonials,
      leftCaptionDiv: images[0].captionLeft,
      rightCaptionDiv: images[0].captionRight,
      errorMsg: null,
    }
  }

  updateState(key, value) {
    this.setState({
      [key]: value,
    });
  }

  componentWillMount() {
  }

  componentDidMount() {
    init(jQuery);
    window.scrollTo(0, 0);
  }

  render() {
    return(
      <div>
        <div className="hide-on-med-and-up">
          <div className="section no-pad-top">
            <div className="container">
              <h1 className="header center tsblue-text">Tanach Study</h1>
              <div className="row center">
                <h5 className="header col s12 light">Fusing modern technologies<br/>with ancient texts</h5>
              </div>
              <div className="row center">
                <Link to="/signup" className="btn-large waves-effect waves-light teal lighten-1 hoverable">Sign Up Now!</Link>
              </div>
            </div>
            <Slider
              slides={this.state.images}
              index={this.state.currentIndex}
              left={(v) => this.updateState('leftCaptionDiv', v)}
              right={(v) => this.updateState('rightCaptionDiv', v)}
            />
          </div>
        </div>

        <div className="slider hide-on-small-only">
          <div className="full-width row">
            <div className="col l4 m3">{this.state.leftCaptionDiv}</div>
            <div className="col l4 m6">
                <div className="card">
                  <div className="card-content center">
                    <h1 className="header tsblue-text">Tanach Study</h1>
                    <h5 className="header col s12 light">Fusing modern technologies<br/>with ancient texts</h5>
                    <Link to="/signup" className="btn-large waves-effect waves-light tsblue hoverable">Sign Up Now!</Link>
                  </div>
                </div>
              </div>
            <div className="col l4 m3">{this.state.rightCaptionDiv}</div>
            <Slider
              slides={this.state.images}
              index={this.state.currentIndex}
              left={(v) => this.updateState('leftCaptionDiv', v)}
              right={(v) => this.updateState('rightCaptionDiv', v)}
            />
          </div>
        </div>

        <div className="container">
          <div className="section">

            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center tsblue-text"><i className="material-icons">headset</i></h2>
                  <h5 className="center">Mode of Study</h5>

                  <p className="light center-align">A free digital Tanach study program that is all-encompassing and geared towards English-speaking communities around the world.</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center tsblue-text"><span>&#128214;</span></h2>
                  <h5 className="center">Torah Content</h5>

                  <p className="light center-align">We offer you an  experience that allows you to become intimately familiar with the text, framework, and storyline of the Tanach. Every Sefer. Every Perek. Every Pasuk.</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center tsblue-text"><span>&#10017;</span></h2>
                  <h5 className="center">Build Identity</h5>
                  <p className="light center-align">To increase knowledge of your ancestral Jewish history, to strengthen your sense of awe and love of God, and reinforce your personal and national Jewish identity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="center collage-container">
          <img src="/assets/images/collage.png" alt="Collage of all educators" className="responsive-img" />
          <div className="in-memory white-text hide-on-small-only">
            Guest lecturers sponsored in loving memory of <a href="http://www.rabbilabaton.com/" target="blank" className="in-memory-link tsblue-text">Rabbi Dr. Ezra Labaton A"H</a>
          </div>
          <div className="hide-on-med-and-up"><i>Guest lecturers sponsored in loving memory of <a href="http://www.rabbilabaton.com/" target="blank" className="in-memory-link tsblue-text">Rabbi Dr. Ezra Labaton A"H</a></i></div>
        </div>

        <div className="section row">
          <div className="col l1 m1 s1 right-align"><i className="material-icons">format_quote</i></div>
          <div className="col l10 m10 s10 valign-wrapper testimonial-container" style={{height: '400px'}}>
            <Testimonials testimonials={this.state.testimonials}/>
          </div>
          <div className="col l1 m1 s1"><i className="material-icons">format_quote</i></div>
        </div>

        <div className="section">
          <div className="center full-width">
            <h4>Tanach Study Around the World</h4>
            <img src="/assets/images/analytics.png" alt="" className="responsive-img"/>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="card">
              <div className="card-content center">
                <h2>Sign Up Today!</h2>
                <div className="red-text error">{this.state.errorMsg}</div>
                <SignupForm error={(msg) => this.updateState('errorMsg', msg)} />
              </div>
            </div>
          </div>
        </div>

        <div><i className="tsicons">scroll</i></div>

      </div>
    );
  }
}

export default HomePage;
