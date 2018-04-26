import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm/SignupForm.jsx';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: null,
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='container'>
        <div className='section center'>
          <div className='row'>
            <div className='col l8 m10 s12 offset-l2 offset-m1'>
              <div className='card'>
                <div className='card-content'>
                  <h2>Join Our Mailing List!</h2>
                  <p>Become a part of the movement that is reshaping the study of Tanach by signing up below!</p>
                  <p>We <b>never</b> use your email for anything other than daily emails and event notifications. If you have any questions feel free to <Link to='/contact'>contact us</Link> at your leisure.</p>
                </div>
              </div>
            </div>
            <div className='col l8 m10 s12 offset-l2 offset-m1'>
            <div className='red-text error'>{this.state.errorMsg}</div>
              <div className='card'>
                <div className='card-content'>
                  <SignupForm error={(msg) => this.setState({ errorMsg: msg })}/>
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
