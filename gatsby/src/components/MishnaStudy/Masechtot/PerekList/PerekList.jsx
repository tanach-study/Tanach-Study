import React from 'react';
import PerekItem from './PerekItem.jsx';

const PerekList = (props) => {
  const { perakim, seder, masechet } = props;
  const mapped = perakim.map(perek => (
    <PerekItem
      perek={perek}
      seder={seder}
      masechet={masechet}
      key={`seder-${seder}-masechet-${masechet}-perek-${perek}-listitem`}
    />));
  return (
    <div className='row'>
      {mapped}
    </div>
  );
};

export default PerekList;
