import React, { Component } from 'react';
import { Link } from 'react-router';

class Donate extends Component {
  constructor(props) {
    super(props);
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
            <div className="col l6 m6 s12 push-s12">
              <script src="https://donorbox.org/widget.js" type="text/javascript"></script><iframe src="https://donorbox.org/embed/support-tanach-study" height="700px" width="100%" style={styling} seamless="seamless" id="dbox-form-embed" name="donorbox" frameBorder="0" scrolling="no"></iframe>
            </div>
            <div className="col l6 m6 s12">
              <div className="col-content">
                <h4>Become a Contributor</h4>
                <p>Yes, it’s a free program, but we couldn’t do it without your support.</p>
                <p>Whatever you can help out with is greatly appreciated.</p>
                <p>Special thanks to those who enrolled in the monthly sponsorship.</p>
                <p>For further inquiries – please <Link to="/contact">contact us here.</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Donate;
