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

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container">
        <div className="section">
          <form>
            <input type="text" placeholder="first name" required />
            <input type="text" placeholder="last name" required />
            <input type="text" placeholder="email" required />
            <a className="btn">Sign Up</a>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup;
