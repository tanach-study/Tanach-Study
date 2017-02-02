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
        <div className="section">
          <form className="tsblue-form">
            <input type="text" placeholder="first name" required />
            <input type="text" placeholder="last name" required />
            <input type="text" placeholder="email" required />
            <a className="btn tsblue">Sign Up</a>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;
