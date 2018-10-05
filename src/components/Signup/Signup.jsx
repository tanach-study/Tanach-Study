import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignupContainer from './SignupContainer.jsx';
import SignupForm from './SignupForm.jsx';
import SignupSuccess from './SignupSuccess.jsx';
import SignupError from './SignupError.jsx';

import Spinner from '../Spinner/Spinner.jsx';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
      isFetching: false;
      isError: false;
      didFetch: false;
      email: null;
    };
    this.setResponse = this.setResponse.bind(this);
    this.setFetchingStatus = this.setFetchingStatus.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  setResponse(isError, message) {
    if (isError) {
      this.setState({ 
        isError: true,
        errorMessage: message,
        isFetching: false,
      });
    } else {
      this.setState({ 
        isError: false,
        errorMessage: message,
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
    const { errorMessage, isFetching, isError, didFetch } = this.state;

    // if we're currently fetching data, display a spinner
    if (isFetching) {
      return <Spinner />;
    } else {
      // isFetching is always flase here
      // if we haven't done a fetch yet, we want to display the form
      if (!didFetch) {
        return (
          <SignupContainer 
            showHeader={true}
            child={<SignupForm 
              response={this.setResponse}
              fetching={this.setFetchingStatus}
            />}
          />
        );
      } else {
        // did a fetch already, so we need to update state
        if (isError) {
          return (
            <SignupContainer 
              showHeader={true}
              child={<SignupError
                message={this.state.errorMessage}
                resetForm={this.resetForm}
              />}
            />
          );
        } else {
          // no error, we have a successful submission
          return (
            <SignupContainer 
              showHeader={true}
              child={<SignupSuccess
                email={this.state.email}
              />}
            />
          );
        }
      }
    }
  }
}

export default Signup;
