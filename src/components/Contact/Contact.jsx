import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  updateState(key, value) {
    this.setState({
      [key]: value,
    });
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    init(jQuery);
  }

  render() {
    return (
      <div className="container">
        <div className="section center">
          <div className="row valign-wrapper">
            <div className="col l6 m6 s12 valign">
              <div className="card">
                <div className="card-content">
                  <h4 className="header">Contact Information</h4>
                  <div>Tanach Study</div>
                  <div>718 Avenue S Brooklyn, NY, 11223</div>
                  <div>info@tanachstudy.com</div>
                  <br/>
                  <i>Tanach Study is a registered 501(c)(3) organization.</i>
                </div>
              </div>
            </div>
            <div className="col l6 m6 s12 valign">
              <div className="card">
                <div className="card-content">
                  <h4 className="header">Send Us a Message!</h4>
                  <form className="tsblue-form">
                    <input type="text" placeholder="Name" required />
                    <input type="text" placeholder="Email" required />
                    <input type="text" placeholder="Subject" required />
                    <input type="text" placeholder="Message" required />
                    <a className="btn tsblue">Send Us a Message</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
