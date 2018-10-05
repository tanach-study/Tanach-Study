import React, { Component } from 'react';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      list1: false,
      list2: false,
      list3: false,
      list4: false,
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
        <div className='row'>
          <p className='center-align'>Please select which lists you's like to subscribe to:</p>
        </div>
        <div className='row'>
          <div className='col l3 m3 s6'>
            <input type='checkbox' id='list1' checked={this.state.list1} onChange={(e) => this.setState({ list1: !this.state.list1 })} />
            <label htmlFor='list1'>Daily Torah</label>
          </div>
          <div className='col l3 m3 s6'>
            <input type='checkbox' id='list2' checked={this.state.list2} onChange={(e) => this.setState({ list2: !this.state.list2 })} />
            <label htmlFor='list2'>Daily Nach</label>
          </div>
          <div className='col l3 m3 s6'>
            <input type='checkbox' id='list3' checked={this.state.list3} onChange={(e) => this.setState({ list3: !this.state.list3 })} />
            <label htmlFor='list3'>Events Only</label>
          </div>
          <div className='col l3 m3 s6'>
            <input type='checkbox' id='list4' checked={this.state.list4} onChange={(e) => this.setState({ list4: !this.state.list4 })} />
            <label htmlFor='list4'>MishnaStudy</label>
          </div>
        </div>
        <button type='submit' className='btn tsblue' onClick={(e) => this.doSubmit(e)}>Sign Up!</button>
      </form>
    );
  }
}

export default SignupForm;
