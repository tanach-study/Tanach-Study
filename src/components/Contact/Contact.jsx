import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  doSubmit(e) {
    e.preventDefault();
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
                  <div><a href="mailto:info@tanachstudy.com">info@tanachstudy.com</a></div>
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
                    <input type="text" name="name" placeholder="Name" required autoFocus value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    <input type="text" name="email" placeholder="Email" required value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    <input type="text" name="subject" placeholder="Subject" required value={this.state.subject} onChange={(e) => this.setState({ subject: e.target.value })} />
                    <input name="message" placeholder="Message" required value={this.state.message} onChange={(e) => this.setState({ message: e.target.value })} />
                    <button type="submit" className="btn tsblue" onClick={(e) => this.doSubmit(e)}>Send Message</button>
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
