import React, { Component } from 'react';
import SignupContainer from './SignupContainer.jsx';
import SignupForm from './SignupForm.jsx';
import SignupSuccess from './SignupSuccess.jsx';
import SignupError from './SignupError.jsx';

import Spinner from '../Spinner/Spinner.jsx';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isFetching: false,
      isError: false,
      didFetch: false,
    };
    this.setResponse = this.setResponse.bind(this);
    this.setFetchingStatus = this.setFetchingStatus.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  setResponse(isError, message) {
    this.setState({
      isError,
      message,
      isFetching: false,
      didFetch: true,
    });
  }

  setFetchingStatus(bool) {
    this.setState({
      isFetching: bool,
    });
  }

  resetForm() {
    this.setState({
      message: null,
      isFetching: false,
      isError: false,
      didFetch: false,
    });
  }

  render() {
    const { message, isFetching, isError, didFetch } = this.state;

    // if we're currently fetching data, display a spinner
    if (isFetching) {
      return <Spinner />;
    }
    // isFetching is always flase here
    // if we haven't done a fetch yet, we want to display the form
    if (!didFetch) {
      return (
        <SignupContainer
          showHeader
          child={(
            <SignupForm
              response={this.setResponse}
              fetching={this.setFetchingStatus}
            />
          )}
        />
      );
    }
    // did a fetch already, so we need to update state
    if (isError) {
      return (
        <SignupContainer
          showHeader
          child={(
            <SignupError
              message={message}
              resetForm={this.resetForm}
            />
          )}
        />
      );
    }
    // no error, we have a successful submission
    return (
      <SignupContainer
        showHeader
        child={(
          <SignupSuccess
            message={message}
          />
        )}
      />
    );
  }
}

export default Signup;
