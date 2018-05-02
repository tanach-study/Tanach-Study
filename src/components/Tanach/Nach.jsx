import React from 'react';

import gematriya from '../../../lib/gematriya.js';

function Nach(props) {
  const { hebrew, english, perek, show } = props;

  const hebrewChapter = hebrew[parseInt(perek, 10) - 1] || [];
  const englishChapter = english[parseInt(perek, 10) - 1] || [];

  const heb = hebrewChapter.map((passuk, i) => <p key={i}><b>{gematriya(i + 1)}. </b>{passuk}</p>);
  const eng = englishChapter.map((passuk, i) => <p key={i}><b>{i + 1}. </b>{passuk}</p>);
  const par = [];
  for (let i = 0; i < hebrewChapter.length && i < englishChapter.length; i++) {
    par.push(
      <div key={i}>
        <div className='row valign-wrapper hide-on-small-only'>
          <div className='col l6 m12 s12 left-align valign'><p><b>{i + 1}. </b>{englishChapter[i]}</p></div>
          <div className='col l6 m12 s12 rtl right-align valign'><p><b>{gematriya(i + 1)}. </b>{hebrewChapter[i]}</p></div>
        </div>
        <div className='hide-on-med-and-up'>
          <div className='row center-align rtl'><p><b>{gematriya(i + 1)}. </b>{hebrewChapter[i]}</p></div>
          <div className='row center-align'><p><b>{i + 1}. </b>{englishChapter[i]}</p></div>
        </div>
      </div>
    );
  }
  if (show === 'heb') {
    return (
      <div className='right-align rtl' id='hebText'>
        {heb}
      </div>
    );
  } else if (show === 'par') {
    return (
      <div id='parText'>
        {par}
      </div>
    );
  } else if (show === 'eng') {
    return (
      <div className='left-align' id='engText'>
        {eng}
      </div>
    );
  }
}

export default Nach;
