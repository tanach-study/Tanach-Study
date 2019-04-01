import React from 'react';
import { Link } from 'react-router-dom';

function TanachStudyHomePage(props) {
  return (
    <main className='container'>
      <section className='section center'>
        <p>Currently, Tanach Study is studying Yehoshua Perek 1.</p>
        <Link to='/tanach-study/1'>Click here to go to today&#39;s part</Link>
      </section>
      <section className='section center'>
        <Link to='/tanach-study/parts'>
          <button className='btn tsblue'>Study a Perek</button>
        </Link>
      </section>
    </main>
  );
}

export default TanachStudyHomePage;
