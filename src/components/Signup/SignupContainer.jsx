import React from 'react';
import { Link } from 'gatsby';

function SignupContainer(props) {
  const { child } = props;
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
        </div>
        <div className='row'>
          <div className='col l8 m10 s12 offset-l2 offset-m1'>
            <div className='card'>
              <div className='card-content'>
                <h3>WhatsApp</h3>
                <p>In addition to periodic emails, we are proud to offer our classes via easily accessible WhatsApp chats. If you'd like to join one of our chats, please check out <Link to='/whatsapp'>our page with links to all the chats.</Link></p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col l8 m10 s12 offset-l2 offset-m1'>
            <div className='card'>
              <div className='card-content'>
                {child}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupContainer;
