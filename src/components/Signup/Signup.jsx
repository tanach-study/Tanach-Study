import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      errorMsg: null,
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

  doSubmit(e) {
    e.preventDefault();
    const email = this.state.email;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    fetch('/api/signup', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        email: email,
        firstName: firstName,
        lastName: lastName,
      })
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.status == 'OK') {
        browserHistory.push('/signup/success/');
      } else {
        this.updateState('errorMsg', resp);
        // browserHistory.push('/signup/error')
      }
    })
    .catch(err => {
      console.log(err);
      this.updateState('errorMsg', err.message);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="section center">
          <div className="row">
            <div className="col l8 m10 s12 offset-l2 offset-m1">
              <div className="card">
                <div className="card-content">
                  <h2>Join Our Mailing List!</h2>
                  <p>Become a part of the movement that is reshaping the study of Tanach by signing up below!</p>
                  <p>We <b>never</b> use your email for anything other than daily emails and event notifications. If you have any questions feel free to <Link to="/contact">contact us</Link> at your leisure.</p>
                </div>
              </div>
            </div>
            <div className="col l8 m10 s12 offset-l2 offset-m1">
            <div className="red-text error">{this.state.errorMsg}</div>
              <div className="card">
                <div className="card-content">
                  <form className="tsblue-form">
                    <input type="text" name="firstName" placeholder="First Name" required autoFocus value={this.state.firstName} onChange={(e) => this.updateState('firstName', e.target.value)} />
                    <input type="text" name="lastName" placeholder="Last Name" required value={this.state.lastName} onChange={(e) => this.updateState('lastName', e.target.value)} />
                    <input type="email" name="email" placeholder="Email" required value={this.state.email} onChange={(e) => this.updateState('email', e.target.value)} />
                    <button type="submit" className="btn tsblue" onClick={(e) => this.doSubmit(e)}>Sign Up!</button>
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

export default Signup;
