import React, { Component } from 'react';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
    }
  }

  doSubmit(e) {
    // stop default form action
    e.preventDefault();
    // tell parent that we're fetching
    this.props.fetching(true);
    // get the data from state
    const email = this.state.email;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    // TODO: validate data
    // make the call
    fetch(`${API_URL}/signup`, {
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
        const obj = {
          email: resp.email,
          fname: resp.first_name,
          lname: resp.last_name,
        };
        this.props.response(false, obj);
      } else {
        this.props.response(true, resp);
      }
    })
    .catch(err => {
      this.props.response(true, err.message);
    });
  }

  render() {
    return (
      <form className='tsblue-form'>
        <input type='text' name='firstName' placeholder='First Name' required autoFocus value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })} />
        <input type='text' name='lastName' placeholder='Last Name' required value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} />
        <input type='email' name='email' placeholder='Email' required value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
        <button type='submit' className='btn tsblue' onClick={(e) => this.doSubmit(e)}>Sign Up!</button>
      </form>
    );
  }
}

export default SignupForm;
