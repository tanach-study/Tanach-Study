import React from 'react';
import Nach from './Nach.jsx';
import Torah from './Torah.jsx';

import gematriya from '../../../lib/gematriya.js';
import tanach from '../../../lib/tanach.json';

function Tanach(props) {
  const { sefer, perek, show, part } = props;
  const seferText = tanach[sefer] || {};
  const hebrewText = seferText.hebrew || [];
  const englishText = seferText.english || [];
  const hebrewChapter = hebrewText[parseInt(perek, 10) - 1] || [];
  const englishChapter = englishText[parseInt(perek, 10) - 1] || [];

  const Text = part && part === 'torah' ? Nach : Torah;

  return (
    <Text
      hebrew={hebrewChapter}
      english={englishChapter}
      show={show}
    />
  );
}

export default Tanach;
