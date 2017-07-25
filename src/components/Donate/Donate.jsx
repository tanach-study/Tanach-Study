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
            <div className="col s12 hide-on-med-and-up card">
              <div className="col-content">
                <h4>Become a Contributor</h4>
                <p>Yes, it’s a free program, but we couldn’t do it without your support.</p>
                <p>Whatever you can help out with is greatly appreciated.</p>
                <p>Special thanks to those who enrolled in the monthly sponsorship.</p>
                <p>For further inquiries – please <Link to="/contact">contact us here.</Link></p>
              </div>
            </div>
            <div className="col l6 m8 s12">
              <script src="https://donorbox.org/widget.js" type="text/javascript"></script><iframe src="https://donorbox.org/embed/support-tanach-study" height="1000px" width="100%" style={styling} seamless="seamless" id="dbox-form-embed" name="donorbox" frameBorder="0" scrolling="no"></iframe>
            </div>
            <div className="col l6 m4 hide-on-small-only card">
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
