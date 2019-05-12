import React from 'react';

import gematriya from '../../lib/gematriya.js';

function Text(props) {
  const { hebrew, english, perek, show } = props || {};
  const perekIndex = parseInt(perek, 10) - 1;

  const heb = [];
  const eng = [];
  const par = [];
  const hebrewChapter = hebrew[perekIndex] || [];
  const englishChapter = english[perekIndex] || [];

  heb.push(<b key={`hebrew-perek-${perek}`}>פרק {gematriya(perekIndex + 1)}</b>);
  eng.push(<b key={`english-perek-${perek}`}>Perek {perekIndex + 1}</b>);
  par.push((
    <div key={`parallel-perek-${perek}`}>
      <div className='row valign-wrapper hide-on-small-only'>
        <div className='col l6 m12 s12 left-align valign'>
          <b>Perek {perekIndex + 1}</b>
        </div>
        <div className='col l6 m12 s12 rtl right-align valign'>
          <b>פרק {gematriya(perekIndex + 1)}</b>
        </div>
      </div>
      <div className='hide-on-med-and-up'>
        <div className='row center-align rtl'>
          <b>פרק {gematriya(perekIndex + 1)}</b>
        </div>
        <div className='row center-align'>
          <b>Perek {perekIndex + 1}</b>
        </div>
      </div>
    </div>
  ));

  for (let j = 0; j < hebrewChapter.length; j++) {
    heb.push((
      <p key={`hebrew-mishna-${perek}-${j}`}>
        <b>{gematriya(j + 1)}. </b>{hebrewChapter[j]}
      </p>
    ));
    eng.push((
      <p key={`english-mishna-${perek}-${j}`}>
        <b>{j + 1}. </b>{englishChapter[j]}
      </p>
    ));
    par.push((
      <div key={`parallel-mishna-${perek}-${j}`}>
        <div className='row valign-wrapper hide-on-small-only'>
          <div className='col l6 m12 s12 left-align valign'>
            <p><b>{j + 1}. </b>{englishChapter[j]}</p>
          </div>
          <div className='col l6 m12 s12 rtl right-align valign'>
            <p><b>{gematriya(j + 1)}. </b>{hebrewChapter[j]}</p>
          </div>
        </div>
        <div className='hide-on-med-and-up'>
          <div className='row center-align rtl'>
            <p><b>{gematriya(j + 1)}. </b>{hebrewChapter[j]}</p>
          </div>
          <div className='row center-align'>
            <p><b>{j + 1}. </b>{englishChapter[j]}</p>
          </div>
        </div>
      </div>
    ));
  }

  if (show === 'heb') {
    return (
      <div className='right-align rtl' id='hebText'>
        {heb}
      </div>
    );
  }
  if (show === 'par') {
    return (
      <div id='parText'>
        {par}
      </div>
    );
  }
  if (show === 'eng') {
    return (
      <div className='left-align' id='engText'>
        {eng}
      </div>
    );
  }
}

export default Text;
