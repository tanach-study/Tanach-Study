import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('/api/sefarim')
    .then(r => r.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <nav className="white" role="navigation">
          <div className="nav-wrapper container">
            <a id="logo-container" href="#" className="brand-logo">Logo</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Donate</a></li>
              <li><a href="#">Nevi'im Rishonim</a></li>
              <li><a href="#">Nevi'im Aharonim</a></li>
              <li><a href="#">Ketuvim</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>

            <ul id="nav-mobile" className="side-nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Donate</a></li>
              <li><a href="#">Nevi'im Rishonim</a></li>
              <li><a href="#">Nevi'im Aharonim</a></li>
              <li><a href="#">Ketuvim</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
            <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          </div>
        </nav>

        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br/><br/>
              <h1 className="header center teal-text text-lighten-2">Tanach Study</h1>
              <div className="row center">
                <h5 className="header col s12 light">A new, modern platform to learn tanach</h5>
              </div>
              <div className="row center">
                <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Sign Up Now!</a>
              </div>
              <br/><br/>

            </div>
          </div>
          <div className="parallax"><img src="/assets/images/background1.jpg" alt="Unsplashed background img 1" /></div>
        </div>


        <div className="container">
          <div className="section">

            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                  <h5 className="center">Torah Content</h5>

                  <p className="light">Create and build your own identity by studying the entire Tanach firsthand. We teach the depth of “peshat” by studying the grammar and meaning of the words, context of each pasuk, and structure of every paragraph.</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                  <h5 className="center">Tech Based Platform yields Ease of Use</h5>

                  <p className="light">Study with the program or at your own pace. Your choice: Daily email, website or podcast</p>
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
                <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
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
          <div className="parallax"><img src="/assets/images/background3.jpg" alt="Unsplashed background img 3" /></div>
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

export default App;
