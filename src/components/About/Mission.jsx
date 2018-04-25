import React from 'react';

function Mission (props) {
  return (
    <div>
      <h3 className='left-align'>Our Mission</h3>
      <div className='row valign-wrapper hide-on-small-only'>
        <div className='col l3 m4 s12 valign'>
          <img src='https://cdn.tanachstudy.com/assets/images/mission.jpg' alt='mission compass direction' className='responsive-img'/>
        </div>
        <div className='col l9 m8 s12 valign'>
          <p>Our mission is to create a platform for all serious students to easily study the entire Tanach (Torah, Nevi’im and Ketuvim) in a comprehensible fashion.</p>
          <p>We seek to generate an experience that allows our members to become intimately familiar with the text, framework, and storyline of the Tanach.</p>
          <p>Our emergent objectives are to increase knowledge of our ancestral Jewish history, to strengthen our sense of awe and love of God, and reinforce our personal and national Jewish identity.</p>
        </div>
      </div>
      <div className='row hide-on-med-and-up'>
        <div className='col l3 m4 s12'>
          <img src='https://cdn.tanachstudy.com/assets/images/mission.jpg' alt='mission compass direction' className='responsive-img'/>
        </div>
        <div className='col l9 m8 s12'>
          <p>Our mission is to create a platform for all serious students to easily study the entire Tanach (Torah, Nevi’im and Ketuvim) in a comprehensible fashion.</p>
          <p>We seek to generate an experience that allows our members to become intimately familiar with the text, framework, and storyline of the Tanach.</p>
          <p>Our emergent objectives are to increase knowledge of our ancestral Jewish history, to strengthen our sense of awe and love of God, and reinforce our personal and national Jewish identity.</p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
