import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SignupSuccess = props => {
  return (
    <div className='container'>
      <div className='section center'>
        <div className='row'>
          <div className='col l8 m10 s12 offset-l2 offset-m1'>
            <div className='card'>
              <div className='card-content'>
                <h2 className='card-title'>Thank You For Registering!</h2>
                <p>You should receive a welcome email within the next few minutes, and you will begin to recieve all of our emails.</p>
                <p>Until then, why don't you check out <Link to='/parts'>our amazing classes,</Link> or watch <Link to='/videos'>one of our phenomenal videos?</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupSuccess;
