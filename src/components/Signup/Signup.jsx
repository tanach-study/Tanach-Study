import React, { Component } from 'react';

class Signup extends Component {
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

  render() {
    return (
      <div>
        <input type="text" placeholder="email" />
      </div>
    )
  }
}

export default Signup;
