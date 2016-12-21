import React, { Component } from 'react';
import Lightbox from 'react-images';

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
                  caption: 'This is a caption. A ccaption is a line of text that describes a picture; this one describes the picture directly above you.'
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
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br/><br/>
              <h1 className="header center teal-text text-lighten-2">Tanach Study</h1>
              <div className="row center">
                <h5 className="header col s12 light">Fusing the most modern of technologies with the most ancient of texts</h5>
              </div>
              <div className="row center">
                <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Sign Up Now!</a>
              </div>
              <br/><br/>

            </div>
          </div>
          <div className="parallax"><img src="/assets/images/logo.jpg" alt="Unsplashed background img 1" /></div>
        </div>


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
                <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
              </div>
            </div>
          </div>
          <div className="parallax"><img src="/assets/images/background2.jpg" alt="Unsplashed background img 2" /></div>
        </div>

        <div className="container">
          <div className="section">

            <div className="row">
              <div className="col s12 center">
                <h3><i className="mdi-content-send brown-text"></i></h3>
                <h4>Contact Us</h4>
                <div className="left-align light">
                  <div className="row center">
                    <div className="col s1 card red lightn-2">Sefer Yehoshua</div>
                    <div className="col s1 card red lightn-2">Sefer Shofetim</div>
                    <div className="col s1 card red lightn-2">Sefer Shemuel 1</div>
                    <div className="col s1 card red lightn-2">Sefer Shemuel 2</div>
                    <div className="col s1 card red lightn-2">Sefer Melachim 1</div>
                    <div className="col s1 card red lightn-2">Sefer Melachim 2</div>
                    <div className="col s1 card red lightn-2">Sefer Yeshayahu</div>
                  </div>
                  <div className="row center">
                    <div className="col s1 card red lightn-2">Sefer Yirmiyahu</div>
                    <div className="col s1 card red lightn-2">Sefer Yehezkel</div>
                    <div className="col s1 card red lightn-2">Sefer Hoshea</div>
                    <div className="col s1 card red lightn-2">Sefer Yoel</div>
                    <div className="col s1 card red lightn-2">Sefer Amos</div>
                    <div className="col s1 card red lightn-2">Sefer Ovadiah</div>
                    <div className="col s1 card red lightn-2">Sefer Yonah</div>
                  </div>
                  <div className="row center">
                    <div className="col s1 card red lightn-2">Sefer Michah</div>
                    <div className="col s1 card red lightn-2">Sefer Nahum</div>
                    <div className="col s1 card red lightn-2">Sefer Habakuk</div>
                    <div className="col s1 card red lightn-2">Sefer Sephania</div>
                    <div className="col s1 card red lightn-2">Sefer Hagai</div>
                    <div className="col s1 card red lightn-2">Sefer Zecharia</div>
                    <div className="col s1 card red lightn-2">Sefer Malachi</div>
                  </div>
                  <div className="row center">
                    <div className="col s1 card red lightn-2">Sefer Divre Hayamim 1</div>
                    <div className="col s1 card red lightn-2">Sefer Divre Hayamim 2</div>
                    <div className="col s1 card red lightn-2">Sefer Tehillim</div>
                    <div className="col s1 card red lightn-2">Sefer Mishle</div>
                    <div className="col s1 card red lightn-2">Sefer Iyov</div>
                    <div className="col s1 card red lightn-2">Sefer Shir Hashirim</div>
                    <div className="col s1 card red lightn-2">Sefer Ruth</div>
                  </div>
                  <div className="row center">
                    <div className="col s1 card red lightn-2">Sefer Eicha</div>
                    <div className="col s1 card red lightn-2">Sefer Kohelet</div>
                    <div className="col s1 card red lightn-2">Sefer Esther</div>
                    <div className="col s1 card red lightn-2">Sefer Daniel</div>
                    <div className="col s1 card red lightn-2">Sefer Ezra</div>
                    <div className="col s1 card red lightn-2">Sefer Nehemya</div>
                    <div className="col s1 card red lightn-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">
                <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
              </div>
            </div>
          </div>
          <div className="parallax">
<img src="/assets/images/background3.jpg" alt="Unsplashed background img 3" />
          </div>
        </div>

        <footer className="page-footer teal">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Company Bio</h5>
                <p className="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>

              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Settings</h5>
                <ul>
                  <li><a className="white-text" href="#!">Link 1</a></li>
                  <li><a className="white-text" href="#!">Link 2</a></li>
                  <li><a className="white-text" href="#!">Link 3</a></li>
                  <li><a className="white-text" href="#!">Link 4</a></li>
                </ul>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <li><a className="white-text" href="#!">Link 1</a></li>
                  <li><a className="white-text" href="#!">Link 2</a></li>
                  <li><a className="white-text" href="#!">Link 3</a></li>
                  <li><a className="white-text" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            Made by <a className="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default HomePage;
