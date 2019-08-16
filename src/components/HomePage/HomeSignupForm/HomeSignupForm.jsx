import React, { Component } from 'react';

import { ProgramContext } from '../../../app-context.js';

class HomeSignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
    };
  }

  updateState(key, value) {
    this.setState({
      [key]: value,
    });
  }

  doSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    const { firstName } = this.state;
    const { lastName } = this.state;
    fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        email,
        firstName,
        lastName,
      }),
    })
      .then(r => r.json())
      .then((resp) => {
        if (resp.status == 'OK') {
        // browserHistory.push('/signup/success/');
        } else {
          this.props.error(resp);
        // browserHistory.push('/signup/error')
        }
      })
      .catch((err) => {
        console.log(err);
        this.props.error(err.message);
      });
  }

  render() {
    return (
      <form className='tsblue-form'>
        <input type='text' name='firstName' placeholder='First Name' required value={this.state.firstName} onChange={e => this.updateState('firstName', e.target.value)} />
        <input type='text' name='lastName' placeholder='Last Name' required value={this.state.lastName} onChange={e => this.updateState('lastName', e.target.value)} />
        <input type='email' name='email' placeholder='Email' required value={this.state.email} onChange={e => this.updateState('email', e.target.value)} />
        <ProgramContext.Consumer>
          {theme => (
            <button type='submit' className={`btn ${theme.backgroundClass}`} onClick={e => this.doSubmit(e)}>Sign Up!</button>
          )}
        </ProgramContext.Consumer>
      </form>
    );
  }
}

export default HomeSignupForm;
