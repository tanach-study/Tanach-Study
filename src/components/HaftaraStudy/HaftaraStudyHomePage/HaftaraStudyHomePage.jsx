import React from 'react';
import { Link } from 'gatsby';

function HaftaraStudyHomePage(props) {
  return (
    <main className='container'>
      <section className='section center'>
        <h3>Welcome to Haftara Study!</h3>
        <p>
          Stay tuned for the upcoming launch of Haftara Study! Until then, we
          encourage you to check out our other programs, or to sign up for our
          emails!
        </p>
      </section>
      <div className='divider' />
      <section className='section center'>
        <Link to='/signup'>
          <button className='btn hsorange'>Click here to sign up!</button>
        </Link>
      </section>
    </main>
  );
}

export default HaftaraStudyHomePage;
