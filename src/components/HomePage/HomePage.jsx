import React, { Component } from 'react';
import { Link } from 'react-router';
import Slider from './Slider/Slider.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';
import testimonials from '../../../public/testimonials.json';
import styles from './Slider/Slider.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
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
      ],
      currentIndex: 0,
      testimonials: testimonials,
    }
  }

  updateState(key, value) {
    this.setState({
      [key]: value,
    });
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    // const interval = setInterval(this.startSlider.bind(this), 3000);
    // this.updateState('interval', interval);
  }

  componentDidMount() {
    init(jQuery);
  }

  // componentWillUnmount() {
  //   clearInterval(this.state.interval);
  // }

  // startSlider() {
  //   const curr = this.state.currentIndex;
  //   if (curr + 1 >= this.state.images.length) {
  //     this.updateState('currentIndex', 0);
  //   } else {
  //     this.updateState('currentIndex', curr+1);
  //   }
  // }
          // <div className={`${styles['modal']} card z-depth-5 hide-on-small-only`}></div>

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
            <Slider slides={this.state.images} index={this.state.currentIndex} />
          </div>
        </div>

        <div className="slider hide-on-small-only">
          <div className="full-width row">
            <div className="col l4 m3">{/* This is where passuk 1 will go*/}</div>
            <div className="col l4 m6">
                <div className="card">
                  <div className="card-content center">
                    <h1 className="header tsblue-text">Tanach Study</h1>
                    <h5 className="header col s12 light">Fusing modern technologies<br/>with ancient texts</h5>
                    <Link to="/signup" className="btn-large waves-effect waves-light tsblue hoverable">Sign Up Now!</Link>
                  </div>
                </div>
              </div>
            <div className="col l4 m3">{/* This is where passuk 2 will go*/}</div>
            <Slider slides={this.state.images} index={this.state.currentIndex} />
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


        <div className="center">
          <img src="/assets/images/collage.png" alt="Collage of all educators" className="responsive-img" />
        </div>


        <div className="white container">
          <Testimonials testimonials={this.state.testimonials}/>
        </div>
      </div>
    );
  }
}

export default HomePage;



/*
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

testimonials: [
        {
          text: `The classes amaze me how history continuously repeats itself.  The people sinned, hashem turned his back on his people, other nations would wage war against us, And Israel would come back to Hashem.  I feel, even in today's times, we are going through the same cycle.`,
          author: `Martin Hanan`,
          title: `Property Manager`,
        },
        {
          text: `Tanach Study offers all the benefits of learning in the best University in Israel, minus the jet lag! The world class teachers, cutting edge techniques and relevant lessons are what makes this first rate program so unique. Our community is very fortunate to have this wonderful academic experience available to us. `,
          author: `Vivien Hidary`,
          title: `Teacher at Allegra Franco Teachers Seminary`,
        },
        {
          text: `Every morning I wake up and eagerly reach for my phone to see if the next perek from tanachstudy has been sent. It's the highlight of my day ... Learning my history and my heritage brings me closer to knowing my identity!`,
          author: `Cindy Chabot`,
          title: ``,
        },
        {
          text: `Tanakh Study inspired me to see the  Tanakh as more than a story, and now I see it as a guide to me life, with warnings and tips for how to navigate the world.`,
          author: `Danielle Ashkenazie`,
          title: `Yeshivah of Flatbush SGO president`,
        },
        {
          text: `Easy, Simple, and convenient! There's no reason why not to learn tanach everyday!`,
          author: `Ezra Shaya`,
          title: `Rabbi at Sephardic Rabbinical College`,
        },
        {
          text: `From daily email reminders to audio recording of both the ta’amim and perekim in detail. I encourage all my friends to sign on and will continue to do so.`,
          author: `Moshe Enayatian`,
          title: `National Sales Director DILAMANI`,
        },
        {
          text: `Tanach Study is something I look forward to each and every day. The variety of teachers makes it even more interesting. I am learning things I never learned before.`,
          author: `Jack Shammah`,
          title: `Principal at Best Silver Inc.`,
        },
        {
          text: `This program is perfect for people interested in learning ALL of Tanakh for the first time. I love that the teachers not only present a literal explanation of the text, but also give some additional insights from other sources to elucidate some points.`,
          author: `Dr. Joelle Saad-Lessler`,
          title: `Associate Industry Professor of Economics, Stevens Institute of Technology School of Business`,
        },
        {
          text: `I value the variety of teachers and approaches, who still all remain consistent with the mission of the organization - broadening Torah learning, increasing knowledge of our Jewish history, heightening our Yirat Shamayim and Ahavat Hashem, and strengthening our personal as well as our national identity. The ability to move sequentially, pasuq by pasuq, helps deepen my familiarity with the text. `,
          author: `Gitta Jaroslawicz-Neufeld`,
          title: `Director of Education, Allegra Franco School of Educational Leadership`,
        },
        {
          text: `I have gained a better understanding of many different parts of nevvim and ketuvim…. You can accomplish a lot by learning a little each day. Commit yourself and you will see the results.`,
          author: `Abraham Cohen`,
          title: ``,
        },
        {
          text: `It sets the tone for the rest of my day. The speakers are clear, concise and very easy to listen to. With devoting just ten minutes of my time while driving to work, I gain a great sense of accomplishment for the day ahead.`,
          author: `Ikey Chera`,
          title: `Principal at Crown Acquisitions Inc.`,
        },
        {
          text: `Every occasion in which I have had the privilege of teaching the Tanach study group, I am inspired by the warmth, curiosity, and excitement that I encounter. This group of Tanakh enthusiasts are deeply committed to Tanakh learning, and have succeeded in forging a unique atmosphere of passion for text and interpretation. `,
          author: `Dr. Yael Zeigler`,
          title: `Lecturer in Bible at Herzog Academic College; Author of "Promises to Keep: The Oath in Biblical Narrative"`,
        },
        {
          text: `Learning Tanach helps one connect deeper with ones religion, people and the land of Israel.  Its one of the most uplifting and bonding experiences... I think Audio with text is wonderful. The additional classes taped on video is also amazing and even better.`,
          author: `Kamy Eliassi`,
          title: `Torahversity`,
        },
        {
          text: `It starts my day.. I have also used it to study with my grandkids. It's also enriching to have teachers, rabbis and laymen teaching from different backgrounds.`,
          author: `Brenda Felman`,
          title: `Biology and Tanakh Teacher`,
        },
        {
          text: ``,
          author: ``,
          title: ``,
        },
        {
          text: ``,
          author: ``,
          title: ``,
        },
        {
          text: ``,
          author: ``,
          title: ``,
        },
      ],
      */
