import React from 'react';

import AboutLayout from '../../layouts/about.jsx';

function Practices(props) {
  return (
    <AboutLayout>
      <h3 className='left-align'>Core practices of the Tanach Study Experience</h3>
      <div>
        <div className='row hide-on-med-and-up'>
          <div className='col s12'>
            <img
              src='https://cdn.tanachstudy.com/assets/images/practices.jpg'
              alt='practices calendar'
              className='responsive-img'
            />
          </div>
        </div>
        <p>
          The Tanach Study experience will consist of three components - a daily, weekly, and
          monthly - each with different purposes:
        </p>
        <div className='row valign-wrapper hide-on-small-only'>
          <div className='col l9 m8 valign'>
            <h5 className='left-align'><b>Daily</b></h5>
            <p>
              The daily component will introduce the members to Hebrew Masoretic text, an English
              translation, and peshat explanation by a qualified educator in a recording
              approximately 20 minutes in length.
            </p>
            <h5 className='left-align'><b>Weekly</b></h5>
            <p>
              The weekly component will allow for a further development of the ideas studied that
              week by offering a one hour class, which will be recorded and posted online.
            </p>
            <h5 className='left-align'><b>Monthly</b></h5>
            <p>
              The monthly component will allow for further development of the ideas and themes
              studied that month, through an opportunity to meet and learn from a high-level Tanach
              scholar, which will also be recorded and posted online.
            </p>
          </div>
          <div className='col l3 m4 valign'>
            <img
              src='https://cdn.tanachstudy.com/assets/images/practices.jpg'
              alt='practices calendar'
              className='responsive-img'
            />
          </div>
        </div>
        <div className='row hide-on-med-and-up'>
          <div className='col s12'>
            <h5 className='left-align'><b>Daily</b></h5>
            <p>
              The daily component will introduce the members to Hebrew Masoretic text, an English
              translation, and peshat explanation by a qualified educator in a recording
              approximately 20 minutes in length.
            </p>
            <h5 className='left-align'><b>Weekly</b></h5>
            <p>
              The weekly component will allow for a further development of the ideas studied that
              week by offering a one hour class, which will be recorded and posted online.
            </p>
            <h5 className='left-align'><b>Monthly</b></h5>
            <p>
              The monthly component will allow for further development of the ideas and themes
              studied that month, through an opportunity to meet and learn from a high-level Tanach
              scholar, which will also be recorded and posted online.
            </p>
          </div>
        </div>
        <div className='section no-pad-top'>
          <i>
            By peshat we mean the clarification of what happened then with a focus on the past,
            while always being bound by the text itself. If the text is poetic we read it with the
            acuteness of a poem or song.
          </i>
          <i>
            We seek to study the grammar and philological meaning of the words, context of each
            pasuk, and structure of every paragraph.
          </i>
        </div>
      </div>
    </AboutLayout>
  );
}

export default Practices;
