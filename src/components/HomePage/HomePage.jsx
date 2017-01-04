import React, { Component } from 'react';
import { Link } from 'react-router';
// import Lightbox from 'react-images';
import Slider from './Slider/Slider.jsx';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    init(jQuery);
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
                <a href="/signup" className="btn-large waves-effect waves-light teal lighten-1 hoverable">Sign Up Now!</a>
              </div>
            </div>
          </div>
        </div>

        <Slider />


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
                  <h2 className="center teal-text text-lighten-2"><i className="material-icons">flash_on</i></h2>
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
          <div className="parallax"><img src="/assets/images/collage.png" alt="Collage of all educators" /></div>
        </div>

        <div className="container">
          <div className="section">

            <div className="row">
              <div className="col s12 center">
                <h4>Sefarim</h4>
                <div className="center-align light">
                    <Link to="/sefarim/yehoshua"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Yehoshua</div></div></Link>
                    <Link to="/sefarim/shofetim"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Shofetim</div></div></Link>
                    <Link to="/sefarim/shemuel1"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Shemuel 1</div></div></Link>
                    <Link to="/sefarim/shemuel2"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Shemuel 2</div></div></Link>
                    <Link to="/sefarim/melachim1"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Melachim 1</div></div></Link>
                    <Link to="/sefarim/melachim2"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Melachim 2</div></div></Link>
                    <Link to="/sefarim/yeshayahu"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Yeshayahu</div></div></Link>
                    <Link to="/sefarim/yirmiyahu"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Yirmiyahu</div></div></Link>
                    <Link to="/sefarim/yehezkel"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Yehezkel</div></div></Link>
                    <Link to="/sefarim/hoshea"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Hoshea</div></div></Link>
                    <Link to="/sefarim/yoel"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Yoel</div></div></Link>
                    <Link to="/sefarim/amos"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Amos</div></div></Link>
                    <Link to="/sefarim/ovadiah"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Ovadiah</div></div></Link>
                    <Link to="/sefarim/yonah"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Yonah</div></div></Link>
                    <Link to="/sefarim/michah"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Michah</div></div></Link>
                    <Link to="/sefarim/nahum"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Nahum</div></div></Link>
                    <Link to="/sefarim/habakuk"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Habakuk</div></div></Link>
                    <Link to="/sefarim/sephania"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Sephania</div></div></Link>
                    <Link to="/sefarim/hagai"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Hagai</div></div></Link>
                    <Link to="/sefarim/zecharia"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Zecharia</div></div></Link>
                    <Link to="/sefarim/malachi"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Malachi</div></div></Link>
                    <Link to="/sefarim/divrehayamim1"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Divre Hayamim 1</div></div></Link>
                    <Link to="/sefarim/divrehayamim2"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Divre Hayamim 2</div></div></Link>
                    <Link to="/sefarim/tehillim"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Tehillim</div></div></Link>
                    <Link to="/sefarim/mishle"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Mishle</div></div></Link>
                    <Link to="/sefarim/iyov"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Iyov</div></div></Link>
                    <Link to="/sefarim/shirhashirim"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Shir Hashirim</div></div></Link>
                    <Link to="/sefarim/ruth"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Ruth</div></div></Link>
                    <Link to="/sefarim/eicha"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Eicha</div></div></Link>
                    <Link to="/sefarim/kohelet"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Kohelet</div></div></Link>
                    <Link to="/sefarim/esther"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Esther</div></div></Link>
                    <Link to="/sefarim/daniel"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Daniel</div></div></Link>
                    <Link to="/sefarim/ezra"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Ezra</div></div></Link>
                    <Link to="/sefarim/nehemya"><div className="col s12 m6 l4 offset-l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Nehemya</div></div></Link>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="parallax-container black">
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
