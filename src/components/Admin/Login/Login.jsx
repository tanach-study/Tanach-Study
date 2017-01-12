import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  updateState(key, value) {
    this.setState({
      [key]: value,
    });
  }

  doLogin() {
    const email = this.state.email;
    const password = this.state.password;
    this.updateState('email', '');
    this.updateState('password', '');
    fetch('/api/users/login', {
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    .then(r => r.json())
    .then(data => {
      localStorage.setItem('adminUserToken', data.token);
      localStorage.setItem('timeLoggedIn', Date.now());
      this.props.updateAdminState('isLoggedIn', true);
      browserHistory.push('/admin/dashboard')
    })
    .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="container">
        <div className="section">
          <div className="card small center center-align">
            <div className="card-content valign">
              <input type="text" placeholder="email" value={this.state.email} onChange={(e) => this.updateState('email', e.target.value)} />
              <input type="password" placeholder="password" value={this.state.password} onChange={(e) => this.updateState('password', e.target.value)} />
              <a className="waves-effect waves-light btn" onClick={() => this.doLogin()}>Login</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
