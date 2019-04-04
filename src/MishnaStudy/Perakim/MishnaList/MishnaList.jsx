import React from 'react';
import MishnaItem from './MishnaItem.jsx';

const MishnaList = (props) => {
  const { mishnayot, seder, masechet, perek } = props;
  const mapped = mishnayot.map(mishna => (
    <MishnaItem
      seder={seder}
      masechet={masechet}
      perek={perek}
      mishna={mishna}
      key={`seder-${seder}-masechet-${masechet}-perek-${perek}-mishna-${mishna}-listitem`}
    />));
  return (
    <div className='row'>
      {mapped}
    </div>
  );
};

export default MishnaList;
