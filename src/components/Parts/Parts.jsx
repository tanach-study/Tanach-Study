import React, { Component } from 'react';

import PartList from './PartList.jsx';

import data from './parts.json';

function Parts (props) {
  return (
    <div className='container'>
      <div className='section center'>
        <h4>Sefarim</h4>
        <PartList title='Torah' parts={data.torah} />
        <PartList title={'Nevi\'im'} parts={data.neviim} />
        <PartList title='Ketuvim' parts={data.ketuvim} />
      </div>
    </div>
  );
}

export default Parts;
