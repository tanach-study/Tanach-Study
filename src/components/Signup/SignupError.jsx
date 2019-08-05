import React from 'react';
import { Link } from 'gatsby';

function SignupError(props) {
  const { message, resetForm } = props;
  return (
    <div>
      <h2 className='card-title'>Hmm Something&apos;s Wrong...</h2>
      <p>Looks like there was an error signing you up to our list - we apologize! Here&apos;s why:</p>
      <br />
      <p>{message || 'Unknown error'}</p>
      <br />
      <p>How about you&nbsp;
        <span className='blue-text clickable' onClick={resetForm}>
          try again?
        </span>
        &nbsp;If the problem persists, feel free to reach out to us&nbsp;
        <Link to='/contact'>to let us know.</Link>
      </p>
    </div>
  );
}

export default SignupError;
