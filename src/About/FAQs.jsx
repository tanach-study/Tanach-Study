import React from 'react';
import { Link } from 'react-router-dom';

function FAQs(props) {
  return (
    <div className='section'>
      <h3 className='left-align'>FAQ&apos;s</h3>
      <div className='faq'>
        <p><b>1) What does Tanach Study wish to accomplish?</b></p>
        <p>
          Our goal is to teach as many people as possible the basic understanding of Tanach, through
          a modern, web-based platform.
        </p>
      </div>
      <div className='faq'>
        <p><b>2) Does Tanach Study learn on Shabbat and holidays?</b></p>
        <p>
          Since we use a web-based platform, our program pauses for these days, but we encourage all
          of our members to review their studies on these days.
        </p>
      </div>
      <div className='faq'>
        <p><b>3) Who are the teachers in the Tanach Study program?</b></p>
        <p>
          The teachers in our program are world-renowned scholars, widely regarded as the tops in
          the field of Tanach study. The full list of our teachers can be found
          <Link to='/teachers'>&nbsp;here.</Link>
        </p>
      </div>
      <div className='faq'>
        <p><b>4) Where can I listen to Tanach Study recordings?</b></p>
        <p>
          All of our recordings can be accessed right here on our website, from any device -
          computer, tablet, or smartphone. Additionally, we provide a
          <a href='https://itunes.apple.com/us/podcast/tanach-study/id930200652' target='blank'>
            &nbsp;podcast&nbsp;
          </a>
          for convenience.
        </p>
      </div>
      <div className='faq'>
        <p><b>5) Where can I listen to the monthly classes and guest lecturers?</b></p>
        <p>All of our classes from guest lecturers can be found
          <a href='https://www.youtube.com/channel/UC0b52aDc7f8VTtxT-Ktfb6Q' target='blank'>
            &nbsp;on our YouTube page.
          </a>
        </p>
      </div>
      <div className='faq'>
        <p><b>6) Does it cost me anything to participate in the program?</b></p>
        <p>
          Absolutely not! Tanach Study is a free program for anyone and everyone to utilize, but
          feel free to <Link to='/donate'>support our cause by making a donation!</Link>
        </p>
      </div>
      <div className='faq'>
        <p>
          <b>
            7) If I can&apos;t keep up with learning a chapter a day, do you recommend still joining
            ?
          </b>
        </p>
        <p>
          Absolutely! If you find the daily program too difficult to follow, feel free to go at your
          own pace and learn how ever much you want.
        </p>
      </div>
      <div className='faq'>
        <p><b>8) How long are the daily recordings?</b></p>
        <p>Between 15 and 30 minutes each - perfect for car rides or subway trips.</p>
      </div>
      <div className='faq'>
        <p><b>9) What if I have a question on a perek that I learned?</b></p>
        <p>
          Ask us! Feel free to <Link to='/contact'>reach out to us</Link>; we love discussing
          Tanach!
        </p>
      </div>
      <div className='faq'>
        <p><b>10) Why are some book greyed out?</b></p>
        <p>
          As a daily learning program, any parts of Tanach that we haven&apos;t yet gotten to will
          be unavailable.
        </p>
      </div>
      <div className='faq'>
        <p><b>11) How can I get involved on the backside of Tanach Study?</b></p>
        <p>
          Thank you for your interest! Please <Link to='/contact'>contact us</Link> and let us know
          how you can help!
        </p>
      </div>
      <div className='faq'>
        <p><b>12) How can I sign up?</b></p>
        <p>Check out our <Link to='/signup'>sign up page</Link>.</p>
      </div>
      <div className='faq'>
        <p><b>13) Still have a question?</b></p>
        <p>
          Please <Link to='/contact'>reach out to us</Link> with any other question you may have!
        </p>
      </div>
    </div>
  );
}

export default FAQs;
