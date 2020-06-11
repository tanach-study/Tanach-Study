import React from 'react';
import DafItem from './DafItem.jsx';

const DafList = (props) => {
  const { dapim, seder, masechet } = props;
  const mapped = dapim.map((daf) => (
    <DafItem
      daf={daf}
      masechet={masechet}
      seder={seder}
      key={`seder-${seder}-masechet-${masechet}-daf-${daf}-listitem`}
    />
  ));
  return (
    <div className='row'>
      {mapped}
    </div>
  );
};

export default DafList;
