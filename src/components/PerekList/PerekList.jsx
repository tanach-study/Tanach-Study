import React from 'react';
import NachPerekItem from './NachPerekItem/NachPerekItem.jsx';
import TorahPerekItem from './TorahPerekItem/TorahPerekItem.jsx';

const PerekList = (props) => {
  const PerekItem = props.sefer.part_name === 'torah' ? TorahPerekItem : NachPerekItem;
  const mapped = props.perakim.map((perek, i) =>
    <PerekItem
      perek={perek}
      sefer={props.sefer}
      key={i}
      index={i}
      click={props.click}
    />)
  return (
    <div className='row'>
      {mapped}
    </div>
  );
}

export default PerekList;
