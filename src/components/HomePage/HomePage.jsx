import React, { Component } from 'react';
import { Link } from 'gatsby';
import Slider from './Slider/Slider.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';
import testimonials from './Testimonials/testimonials.json';

import { ProgramContext } from '../../app-context.js';

import styles from './HomePage.module.css';

const images  = [
  {
    url: 'https://cdn.tanachstudy.com/assets/images/ts_bg_1.jpg',
    captionRight: 'וְעַד יָם הָעֲרָבָה יָם-הַמֶּלַח מִזְרָחָה',
    captionLeftDisabled: 'And unto the sea of the Arabah, even the Salt Sea, eastward',
  },
  {
    url: 'https://cdn.tanachstudy.com/assets/images/ts_bg_2.png',
    captionRight: 'הִנֵּה דָוִד, בְּמִדְבַּר עֵין גֶּדִי... עַל-פְּנֵי, צוּרֵי הַיְּעֵלִים',
    captionLeftDisabled: 'Behold, David is in the wilderness of En-gedi... upon the rocks of'
    + 'the wild goats',
  },
  {
    url: 'https://cdn.tanachstudy.com/assets/images/ts_bg_3.jpg',
    captionRight: 'אֲשֶׁר-שָׁם, צִפֳּרִים יְקַנֵּנוּ;    חֲסִידָה, בְּרוֹשִׁים בֵּיתָהּ',
    captionLeftDisabled: 'Wherein the birds make their nests; as for the stork, the fir-trees'
    + 'are her house',
  },
];

class HomePage extends Component {
  constructor(props) {
    super(props);

    for (let i = testimonials.length; i > 0; i--) {
      const j = Math.floor((Math.random() * i));
      const temp = testimonials[i - 1];
      testimonials[i - 1] = testimonials[j];
      testimonials[j] = temp;
    }

    this.state = {
      currentSlide: 0,
    };
  }

  render() {
    const { currentSlide } = this.state;

    return (
      <ProgramContext.Consumer>
        {theme => (
          <div>
            <div className='hide-on-med-and-up'>
              <div className='section no-pad-top'>
                <div className='container'>
                  <h1 className={`header center ${theme.textClass}`}>Tanach Study</h1>
                  <div className='row center'>
                    <h5 className='header col s12 light'>
                      Fusing modern technologies<br />with ancient texts
                    </h5>
                  </div>
                  <div className='row center'>
                    <Link
                      to='/signup'
                      className={`
                        btn-large waves-effect waves-light ${theme.backgroundClass} hoverable
                      `}
                    >
                      Sign Up Now!
                    </Link>
                  </div>
                </div>
                <Slider
                  slides={images}
                  index={currentSlide}
                  update={v => this.setState({ currentSlide: v })}
                />
              </div>
            </div>

            <div className='slider hide-on-small-only'>
              <div className='full-width full-height row'>
                <div className={`col l4 m3 full-height ${styles['slider-caption']}`}>
                  <div className={styles['left-caption']}>{images[currentSlide].captionLeft}</div>
                </div>
                <div className='col l4 m6'>
                  <div className='card'>
                    <div className='card-content center'>
                      <h1 className={`header ${theme.textClass}`}>Tanach Study</h1>
                      <h5 className='header col s12 light'>
                        Fusing modern technologies<br />with ancient texts
                      </h5>
                      <Link
                        to='/signup'
                        className={`
                          btn-large waves-effect waves-light ${theme.backgroundClass} hoverable
                        `}
                      >
                        Sign Up Now!
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={`col l4 m3 full-height ${styles['slider-caption']}`}>
                  <div className={styles['right-caption']}>{images[currentSlide].captionRight}</div>
                </div>
                <Slider
                  slides={images}
                  index={currentSlide}
                  update={v => this.setState({ currentSlide: v })}
                />
              </div>
            </div>

            <div className='container'>
              <div className='section'>

                <div className='row'>
                  <div className='col s12 m4'>
                    <div className={styles['icon-block']}>
                      <h2 className={`center ${theme.textClass}`}>
                        <i className={`${styles['material-icons']} material-icons`}>headset</i>
                      </h2>
                      <h5 className='center'>Mode of Study</h5>

                      <p className='light center-align'>
                        A free digital Tanach study program that is all-encompassing and geared
                        towards English-speaking communities around the world.
                      </p>
                    </div>
                  </div>

                  <div className='col s12 m4'>
                    <div className={styles['icon-block']}>
                      <h2 className={`center ${theme.textClass}`}>
                        <span
                          className={`${theme.textClass} tsicons icon-scroll`}
                        />
                      </h2>
                      <h5 className='center'>Torah Content</h5>

                      <p className='light center-align'>
                        We offer you an  experience that allows you to become intimately familiar
                        with the text, framework, and storyline of the Tanach. Every Sefer. Every
                        Perek. Every Pasuk.
                      </p>
                    </div>
                  </div>

                  <div className='col s12 m4'>
                    <div className={styles['icon-block']}>
                      <h2 className={`center ${theme.textClass}`}>
                        <span
                          className={`${theme.textClass} tsicons icon-star`}
                        />
                      </h2>
                      <h5 className='center'>Build Identity</h5>
                      <p className='light center-align'>
                        To increase knowledge of your ancestral Jewish history, to strengthen your
                        sense of awe and love of God, and reinforce your personal and national
                        Jewish identity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className={`center ${styles['collage-container']}`}>
              <a
                href='https://www.youtube.com/channel/UC0b52aDc7f8VTtxT-Ktfb6Q/videos'
                target='blank'
              >
                <img
                  src='https://cdn.tanachstudy.com/assets/images/collage.png'
                  alt='Collage of all educators'
                  className='responsive-img hoverable'
                />
              </a>

              <div className={`${styles['in-memory']} white-text hide-on-small-only`}>
                Guest lecturers sponsored in loving memory of&nbsp;
                <a
                  href='http://www.rabbilabaton.com/'
                  target='blank'
                  className={`${styles['in-memory-link']} ${theme.textClass}`}
                >
                  Rabbi Dr. Ezra Labaton A&apos;H
                </a>
              </div>
              <div className='hide-on-med-and-up'>
                <i>Guest lectures sponsored in loving memory of
                  <a
                    href='http://www.rabbilabaton.com/'
                    target='blank'
                    className={`${styles['in-memory-link']} ${theme.textClass}`}
                  >
                    Rabbi Dr. Ezra Labaton A&apos;H
                  </a>
                </i>
              </div>
            </div>


            <div className='section row' style={{ height: '400px' }}>
              <h4 className='header center'>Testimonials</h4>
              <div className='col l1 m1 s1 right-align full-height'>
                <i className='material-icons'>format_quote</i>
              </div>
              <div
                className={`
                  col l10 m10 s10 ${styles['testimonial-container']} full-height valign-wrapper`
                }
              >
                <Testimonials testimonials={testimonials} />
              </div>
              <div className='col l1 m1 s1 full-height'>
                <i className='material-icons'>format_quote</i>
              </div>
            </div>

            <div className='section'>
              <div className='center full-width'>
                <h4>Tanach Study Around the World</h4>
                <img
                  src='https://cdn.tanachstudy.com/assets/images/analytics.png'
                  alt=''
                  className='responsive-img'
                />
              </div>
            </div>
          </div>
        )}
      </ProgramContext.Consumer>
    );
  }
}

export default HomePage;
