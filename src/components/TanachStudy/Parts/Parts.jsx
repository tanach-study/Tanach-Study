import React from 'react';

import Metadata from '../../Metadata/Metadata.jsx';
import PartList from './PartList.jsx';

import data from './parts.json';

function Parts(props) {
  return (
    <React.Fragment>
      <Metadata
        title='Sefarim'
        description='Sefarim of Nach'
        template='Tanach Study'
        image=''
        pathname=''
      />
      <div className='container'>
        <div className='section center'>
          <h4>Sefarim</h4>
          <PartList title={'Nevi\'im'} parts={data.neviim} />
          <PartList title='Ketuvim' parts={data.ketuvim} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Parts;
