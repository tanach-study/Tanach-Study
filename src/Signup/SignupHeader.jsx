import React from 'react';
import { Link } from 'react-router-dom';

function SignupHeader(props) {
  return (
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
    </div>
  )
}

export default SignupHeader;
