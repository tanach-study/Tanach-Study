import React from 'react';
import NachPerekItem from './NachPerekItem/NachPerekItem.jsx';

const PerekList = (props) => {
  const { sefer, units } = props;
  const mapped = units.map(unit => (
    <NachPerekItem
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
