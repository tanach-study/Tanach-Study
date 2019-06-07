import React from 'react';
import NachPerekItem from './NachPerekItem/NachPerekItem.jsx';
import TorahPerekItem from './TorahPerekItem/TorahPerekItem.jsx';

const PerekList = (props) => {
  const { sefer, units, part } = props;
  const PerekItem = part === 'torah' ? TorahPerekItem : NachPerekItem;
  const mapped = units.map(unit => (
    <PerekItem
      perek={unit}
      sefer={sefer}
      key={`sefer-${sefer}-perek-${unit}-listitem`}
    />
  ));
  return (
    <div className='row'>
      {mapped}
    </div>
  );
};

export default PerekList;
