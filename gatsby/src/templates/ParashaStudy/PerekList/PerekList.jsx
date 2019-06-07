import React from 'react';
import TorahPerekItem from './TorahPerekItem/TorahPerekItem.jsx';

const PerekList = (props) => {
  const { sefer, units } = props;
  const mapped = units.map(unit => (
    <TorahPerekItem
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
