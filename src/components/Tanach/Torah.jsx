import React from 'react';

import gematriya from '../../../lib/gematriya.js';

function Torah(props) {
  const hebArr = props.hebrew;
  const engArr = props.english;

  const { parasha } = props || {};
  const { show } = props;

  const { startChapter, startVerse, endChapter, endVerse } = parasha || null;

  let gen = Date.now();

  const heb = [];
  const eng = [];
  hebArr.forEach((perek, i) => {
    const perekNum = startChapter != null ? startChapter + i : i + 1;
    const passukNum = i === 0 && startVerse != null ? startVerse : 1;

    heb.push(<b key={gen++}>פרק {gematriya(perekNum)}</b>)
    perek.forEach((passuk, j) => heb.push(<p key={gen++}><b>{gematriya(passukNum + j)}. </b>{passuk}</p>));
  });
  engArr.forEach((perek, i) => {
    const perekNum = startChapter != null ? startChapter + i : i + 1;
    const passukNum = i === 0 && startVerse != null ? startVerse : 1;

    eng.push(<b key={gen++}>Perek {perekNum}</b>)
    perek.forEach((passuk, j) => eng.push(<p key={gen++}><b>{passukNum + j}. </b>{passuk}</p>));
  });
  let par = [];
  for (let i = 0; i < hebArr.length && i < engArr.length; i++) {
    const perekNum = startChapter != null ? startChapter + i : i + 1;
    const passukNum = i === 0 && startVerse != null ? startVerse : 1;

    let currHeb = hebArr[i];
    let currEng = engArr[i];
    par.push(
      <div key={gen++}>
        <div className='row valign-wrapper hide-on-small-only'>
          <div className='col l6 m12 s12 left-align valign'><b>Perek {perekNum}</b></div>
          <div className='col l6 m12 s12 rtl right-align valign'><b>פרק {gematriya(perekNum)}</b></div>
        </div>
        <div className='hide-on-med-and-up'>
          <div className='row center-align rtl'><b>פרק {gematriya(perekNum)}</b></div>
          <div className='row center-align'><b>Perek {perekNum}</b></div>
        </div>
      </div>
    );
    for(let j = 0; j < currHeb.length && i < currEng.length; j++) {
      par.push(
        <div key={gen++}>
          <div className='row valign-wrapper hide-on-small-only'>
            <div className='col l6 m12 s12 left-align valign'><p><b>{passukNum + j}. </b>{currEng[j]}</p></div>
            <div className='col l6 m12 s12 rtl right-align valign'><p><b>{gematriya(passukNum + j)}. </b>{currHeb[j]}</p></div>
          </div>
          <div className='hide-on-med-and-up'>
            <div className='row center-align rtl'><p><b>{gematriya(passukNum + j)}. </b>{currHeb[j]}</p></div>
            <div className='row center-align'><p><b>{passukNum + j}. </b>{currEng[j]}</p></div>
          </div>
        </div>
      );
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
