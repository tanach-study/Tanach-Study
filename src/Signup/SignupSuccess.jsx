import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SignupSuccess = props => {
  const message = props.message || {};
  const greeting = props.message ? `Welcome, ${message.fname}!` : 'Thank You For Registering!';
  return (
    <div>
      <h2 className='card-title'>{greeting}</h2>
      {props.message && <p>This message confirms that the email <b>{message.email}</b> has been added to our list.</p>}
      <br/>
      <p>You should receive a welcome email within the next few minutes, and you will begin to recieve all of our emails.</p>
      <br/>
      <p>Until then, why don't you check out <Link to='/parts'>our amazing classes,</Link> or watch <a href='https://www.youtube.com/channel/UC0b52aDc7f8VTtxT-Ktfb6Q/videos'>one of our phenomenal videos?</a></p>
    </div>
  )
}

export default SignupSuccess;
