import React from 'react';

import gematriya from '../../../lib/gematriya.js';

function Torah(props) {
  const { hebrew, english, sefer, parasha } = props;
  const { startChapter, startVerse, endChapter, endVerse } = props || null;

  const { show } = props;


  const heb = [];
  const eng = [];
  const par = [];
  for (let i = startChapter - 1; i < endChapter; i++) {
    const hebrewChapter = hebrew[i] || [];
    const englishChapter = english[i] || [];

    heb.push(<b key={`torah-text-hebrew-perek-${sefer}-${parasha}-${i}`}>פרק {gematriya(i + 1)}</b>);
    eng.push(<b key={`torah-text-english-perek-${sefer}-${parasha}-${i}`}>Perek {i + 1}</b>);
    par.push((
      <div key={`torah-text-parallel-perek-${sefer}-${parasha}-${i}`}>
        <div className='row valign-wrapper hide-on-small-only'>
          <div className='col l6 m12 s12 left-align valign'><b>Perek {i + 1}</b></div>
          <div className='col l6 m12 s12 rtl right-align valign'><b>פרק {gematriya(i + 1)}</b></div>
        </div>
        <div className='hide-on-med-and-up'>
          <div className='row center-align rtl'><b>פרק {gematriya(i + 1)}</b></div>
          <div className='row center-align'><b>Perek {i + 1}</b></div>
        </div>
      </div>
    ));

    const startPassuk = (i + 1 === startChapter && startVerse > 1) ? startVerse : 1;
    const endPassuk = (i === endChapter - 1 && endVerse < hebrewChapter.length) ? endVerse : hebrewChapter.length;
    for (let j = startPassuk - 1; j < endPassuk; j++) {
      heb.push(<p key={`torah-text-hebrew-passuk-${sefer}-${parasha}-${i}-${j}`}><b>{gematriya(j + 1)}. </b>{hebrewChapter[j]}</p>);
      eng.push(<p key={`torah-text-english-passuk-${sefer}-${parasha}-${i}-${j}`}><b>{j + 1}. </b>{englishChapter[j]}</p>);
      par.push((
        <div key={`torah-text-parallel-passuk-${sefer}-${parasha}-${i}-${j}`}>
          <div className='row valign-wrapper hide-on-small-only'>
            <div className='col l6 m12 s12 left-align valign'><p><b>{j + 1}. </b>{englishChapter[j]}</p></div>
            <div className='col l6 m12 s12 rtl right-align valign'><p><b>{gematriya(j + 1)}. </b>{hebrewChapter[j]}</p></div>
          </div>
          <div className='hide-on-med-and-up'>
            <div className='row center-align rtl'><p><b>{gematriya(j + 1)}. </b>{hebrewChapter[j]}</p></div>
            <div className='row center-align'><p><b>{j + 1}. </b>{englishChapter[j]}</p></div>
          </div>
        </div>
      ));
    }
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

export default Torah;
