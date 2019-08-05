import React from 'react';
import { Link } from 'gatsby';

function SignupSuccess(props) {
  const message = { props };
  const { fname, email } = message || {};
  const greeting = message ? `Welcome, ${fname}!` : 'Thank You For Registering!';
  return (
    <div>
      <h2 className='card-title'>{greeting}</h2>
      {message && (
        <p>This message confirms that the email <b>{email}</b> has been added to our list.</p>
      )}
      <br />
      <p>You should receive a welcome email within the next few minutes, and you will begin to&nbsp;
        recieve all of our emails.
      </p>
      <br />
      <p>Until then, why don&apos;t you check out&nbsp;
        <Link to='/parts'>our amazing classes,</Link>&nbsp;
        or watch&nbsp;
        <a href='https://www.youtube.com/channel/UC0b52aDc7f8VTtxT-Ktfb6Q/videos'>
          one of our phenomenal videos?
        </a>
      </p>
    </div>
  );
}

export default SignupSuccess;
