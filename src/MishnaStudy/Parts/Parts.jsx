import React from 'react';

import PartList from './PartList.jsx';

import data from './parts.json';

function Parts(props) {
  return (
    <div className='container'>
      <div className='section center'>
        <h4>Sedarim</h4>
        <PartList title='Introduction' parts={data.introduction} />
        <PartList title='Zeraim' parts={data.zeraim} />
        <PartList title='Moed' parts={data.moed} />
        <PartList title='Nashim' parts={data.nashim} />
        <PartList title='Nezikin' parts={data.nezikin} />
        <PartList title='Kadashim' parts={data.kadashim} />
        <PartList title='Taharot' parts={data.taharot} />
      </div>
    </div>
  );
}

export default Parts;
