import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignupHeader from './SignupHeader.jsx';
import SignupForm from './SignupForm.jsx';
import SignupSuccess from './SignupSuccess.jsx';
import SignupError from './SignupError.jsx';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isFetching: false;
      isError: false;
    };
    this.setResponse = this.setResponse.bind(this);
    this.setFetchingStatus = this.setFetchingStatus.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  _getContent(component) {
    return (
      <div className='container'>
        <div className='section center'>
          <SignupHeader />
          <div className='row'>
            <div className='col l8 m10 s12 offset-l2 offset-m1'>
              <div className='card'>
                <div className='card-content'>
                  {component}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  setResponse(isError, message) {
    if (isError) {
      this.setState({ 
        isError: true,
        message: message,
        isFetching: false,
      });
    } else {
      this.setState({ 
        isError: false,
        message: message,
        isFetching: false,
      });
    }
  }

  setFetchingStatus(bool) {
    this.setState({ 
      isFetching: bool,
    });
  }

  render() {
    const { message, isFetching, isError } = this.state;
    if (!isFetching && !isError) {
      return this._getContent(<SignupForm response={this.setResponse} fetching={this.setFetchingStatus} />);
    } else if (message && !isFetching) {
      return this._getContent(<SignupForm error={msg => this.setState({ errorMsg: msg })} />);

    }
  }
}

export default Signup;
