import React, { Component } from 'react';
import { Link } from 'react-router';
import Lightbox from 'react-images';
import Slider from './Slider/Slider.jsx';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
      images: [
                {
                  src: 'http://localhost:3000/assets/images/background1.jpg',
                  thumbnail: 'http://localhost:3000/assets/images/background1.jpg',
                  caption: 'This is a caption. A caption is a line of text that describes a picture; this one describes the picture directly above you.'
                },
                {
                  src: 'http://localhost:3000/assets/images/background2.jpg',
                  thumbnail: 'http://localhost:3000/assets/images/background2.jpg',
                  caption: 'background 2'
                },
                {
                  src: 'http://localhost:3000/assets/images/background3.jpg',
                  thumbnail: 'http://localhost:3000/assets/images/background3.jpg',
                  caption: 'background 3'
                }
              ],
    }
  }


  openLightbox (index, e) {
    e.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext () {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  gotoImage (index) {
    this.setState({
      currentImage: index,
    });
  }

  handleClickImage () {
    if (this.state.currentImage === this.props.images.length - 1) return;
    this.gotoNext();
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    init(jQuery);
  }

  renderGallery () {
    const images = this.state.images;
    if (!images) return;
    const gallery = images.map((obj, i) =>
        <a
          href={obj.src}
          key={i}
          onClick={(e) => this.openLightbox(i, e)}
        >
          <img src={obj.thumbnail} />
        </a>
    );


    return (
      <div>
        {gallery}
      </div>
    );
  }

// <img src="/assets/images/logo.png" alt="Logo" />
          // {this.renderGallery()}
          //   <Lightbox
          //     images={this.state.images}
          //     currentImage={this.state.currentImage}
          //     backdropClosesModal={true}
          //     isOpen={this.state.lightboxIsOpen}
          //     onClickPrev={this.gotoPrevious.bind(this)}
          //     onClickNext={this.gotoNext.bind(this)}
          //     onClose={this.closeLightbox.bind(this)}
          //   />


  render() {
    return(
      <div>
        <div id="index-banner" className="hide-on-med-and-up">
          <div className="section no-pad-top">
            <div className="container">
              <h1 className="header center teal-text text-lighten-2">Tanach Study</h1>
              <div className="row center">
                <h5 className="header col s12 light">Fusing the most modern of technologies with the most ancient of texts</h5>
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
                  <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                  <h5 className="center">Torah Content</h5>

                  <p className="light">Create and build your own identity by studying the entire Tanach firsthand. We teach the depth of “peshat” by: <br/>    - Studying the grammar and meaning of the words <br/>    - Context of each pasuk<br/>    - Structure of every paragraph</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text"><i className="material-icons">headset</i></h2>
                  <h5 className="center">Tech Based, <br/> Easy to Use Platform</h5>

                  <p className="light">Study with the program or at your own pace. <br/> We provide many options for studying </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text"><i className="material-icons">desktop_mac</i></h2>
                  <h5 className="center">Mode of Study</h5>
                  <p className="light">Audio based daily classes. Weekly and monthly live (and recorded) guest lectures. Text based thematic developments. Every book. Every chapter. Every verse.</p>
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
          <div className="parallax"><img src="/assets/images/background2.jpg" alt="Unsplashed background img 2" /></div>
        </div>

        <div className="container">
          <div className="section">

            <div className="row">
              <div className="col s12 center">
                <h4>Sefarim</h4>
                <div className="center-align light">
                    <Link to="/sefarim/yehoshua"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Yehoshua</div></div></Link>
                    <Link to="/sefarim/shofetim"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Shofetim</div></div></Link>
                    <Link to="/sefarim/shemuel1"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Shemuel 1</div></div></Link>
                    <Link to="/sefarim/shemuel2"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Shemuel 2</div></div></Link>
                    <Link to="/sefarim/melachim1"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Melachim 1</div></div></Link>
                    <Link to="/sefarim/melachim2"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Melachim 2</div></div></Link>
                    <Link to="/sefarim/yeshayahu"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Yeshayahu</div></div></Link>
                    <Link to="/sefarim/yirmiyahu"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Yirmiyahu</div></div></Link>
                    <Link to="/sefarim/yehezkel"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Yehezkel</div></div></Link>
                    <Link to="/sefarim/hoshea"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Hoshea</div></div></Link>
                    <Link to="/sefarim/yoel"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Yoel</div></div></Link>
                    <Link to="/sefarim/amos"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Amos</div></div></Link>
                    <Link to="/sefarim/ovadiah"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Ovadiah</div></div></Link>
                    <Link to="/sefarim/yonah"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Yonah</div></div></Link>
                    <Link to="/sefarim/michah"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Michah</div></div></Link>
                    <Link to="/sefarim/nahum"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Nahum</div></div></Link>
                    <Link to="/sefarim/habakuk"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Habakuk</div></div></Link>
                    <Link to="/sefarim/sephania"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Sephania</div></div></Link>
                    <Link to="/sefarim/hagai"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Hagai</div></div></Link>
                    <Link to="/sefarim/zecharia"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Zecharia</div></div></Link>
                    <Link to="/sefarim/malachi"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Malachi</div></div></Link>
                    <Link to="/sefarim/divrehayamim1"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Divre Hayamim 1</div></div></Link>
                    <Link to="/sefarim/divrehayamim2"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Divre Hayamim 2</div></div></Link>
                    <Link to="/sefarim/tehillim"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Tehillim</div></div></Link>
                    <Link to="/sefarim/mishle"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Mishle</div></div></Link>
                    <Link to="/sefarim/iyov"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Iyov</div></div></Link>
                    <Link to="/sefarim/shirhashirim"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Shir Hashirim</div></div></Link>
                    <Link to="/sefarim/ruth"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Ruth</div></div></Link>
                    <Link to="/sefarim/eicha"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Eicha</div></div></Link>
                    <Link to="/sefarim/kohelet"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Kohelet</div></div></Link>
                    <Link to="/sefarim/esther"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Esther</div></div></Link>
                    <Link to="/sefarim/daniel"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect hoverable">Sefer Daniel</div></div></Link>
                    <Link to="/sefarim/ezra"><div className="col s12 m6 l3 offset-l3"><div className="card red lightn-2 btn waves-effect waves-red">Sefer Ezra</div></div></Link>
                    <Link to="/sefarim/nehemya"><div className="col s12 m6 l3"><div className="card red lightn-2 btn waves-effect waves-red">Sefer Nehemya</div></div></Link>
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
          <div className="parallax">
<img src="/assets/images/background3.jpg" alt="Unsplashed background img 3" />
          </div>
        </div>

        <footer className="page-footer teal">
          <div className="footer-copyright">
            <div className="container">
            Made by <a className="brown-text text-lighten-3" href="http://joeyp.nyc">Joey Pinhas</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default HomePage;
