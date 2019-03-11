import React from 'react';
import NachPerekItem from './NachPerekItem/NachPerekItem.jsx';
import TorahPerekItem from './TorahPerekItem/TorahPerekItem.jsx';

const PerekList = (props) => {
  const { sefer, perakim, click } = props;
  const PerekItem = sefer.part_name === 'torah' ? TorahPerekItem : NachPerekItem;
  const mapped = perakim.map((perek, i) => (
    <PerekItem
      perek={perek}
      sefer={sefer}
      key={`${sefer}-${perek.perek_id}`}
      index={i}
      click={click}
    />));
  return (
    <div className='row'>
      {mapped}
    </div>
  );
};

export default PerekList;
