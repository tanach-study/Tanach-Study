import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Donate extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const styling = {
      maxWidth: '500px',
      minWidth: '310px',
    }

    return (
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col l8 m8 s12 push-l2 push-m2">
              <div className="card">
                <div className="card-content center">
                  <h4>Become a Contributor</h4>
                  <p>Yes, it’s a free program, but we couldn’t do it without your support.</p>
                  <p>Whatever you can help out with is greatly appreciated.</p>
                  <p>Special thanks to those who enrolled in the monthly sponsorship.</p>
                  <p>For further inquiries – please <Link to="/contact">contact us here.</Link></p>
                  <br/>
                  <i>Tanach Study is a registered 501(c)(3) organization.</i>
                </div>
              </div>
            </div>
            <div className="col l8 m8 s12 push-l2 push-m2 center">
              <script src="https://donorbox.org/widget.js" type="text/javascript"></script><iframe src="https://donorbox.org/embed/support-tanach-study" height="1000px" width="100%" style={styling} seamless="seamless" id="dbox-form-embed" name="donorbox" frameBorder="0" scrolling="no"></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Donate;
