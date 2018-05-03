import React from 'react';
import Nach from './Nach.jsx';
import Torah from './Torah.jsx';

import gematriya from '../../../lib/gematriya.js';
import tanach from '../../../public/tanach/tanach.json';

function Tanach(props) {
  const { sefer, show, part } = props || '';

  const seferText = tanach[sefer] || {};
  const hebrewText = seferText.hebrew || [];
  const englishText = seferText.english || [];

  const toPass = {};
  let Text;

  if (part === 'torah') {
    Text = Torah;
    toPass.parasha = props.parasha;
    toPass.sefer = sefer;
    toPass.startChapter = props.startChapter;
    toPass.startVerse = props.startVerse;
    toPass.endChapter = props.endChapter;
    toPass.endVerse = props.endVerse;
  } else {
    Text = Nach;
    toPass.perek = props.perek;
  }

  return (
    <Text
      hebrew={hebrewText}
      english={englishText}
      show={show}
      {...toPass}
    />
  );
}

export default Tanach;
