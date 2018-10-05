import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SignupSuccess = props => {
  // const greeting = props.message ? `Welcome ${props.message}` : 'Thank You For Registering!';
  return (
    <div>
      <h2 className='card-title'>Thank You For Registering!</h2>
      {props.message && <p>This message confirms that you have successfully registered the email <b>{props.message}</b> to our list.</p>}
      <br/>
      <p>You should receive a welcome email within the next few minutes, and you will begin to recieve all of our emails.</p>
      <br/>
      <p>Until then, why don't you check out <Link to='/parts'>our amazing classes,</Link> or watch <a href='https://www.youtube.com/channel/UC0b52aDc7f8VTtxT-Ktfb6Q/videos'>one of our phenomenal videos?</a></p>
    </div>
  )
}

export default SignupSuccess;
