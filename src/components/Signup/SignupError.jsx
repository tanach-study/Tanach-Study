import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SignupError = props => {
  return (
    <div>
      <h2 className='card-title'>Hmm Something's Wrong...</h2>
      <p>Looks like there was an error signing you up to our list - we apologize! Here's why:</p>
      <br/>
      <p>{props.message || "Unknown error"}</p>
      <br/>
      <p>How about you <span className='blue-text clickable' onClick={props.resetForm}>try again?</span> If the problem persists, feel free to reach out to us <Link to='/contact'>to let us know.</Link></p>
    </div>
  )
}

export default SignupError;
