import React from 'react';

import Metadata from '../../Metadata/Metadata.jsx';
import PartList from './PartList.jsx';

import data from './parts.json';

// TODO: remove hardcoded sponsor heading here and make it dynamic
function Parts(props) {
  return (
    <React.Fragment>
      <Metadata
        title='Sedarim'
        description='Sedarim of Mishna'
        template='Mishna Study'
        image=''
        pathname=''
      />
      <div className='container'>
        <div className='section center'>
          <h3>In Loving Memory of Mr. Ovadia Buddy Sutton A&quot;H</h3>
          <h4>Sedarim</h4>
          <PartList title='Zeraim' parts={data.zeraim} />
          <PartList title='Moed' parts={data.moed} />
          <PartList title='Nashim' parts={data.nashim} />
          <PartList title='Nezikin' parts={data.nezikin} />
          <PartList title='Kadashim' parts={data.kadashim} />
          <PartList title='Taharot' parts={data.taharot} />
          <PartList title='Introduction' parts={data.introduction} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Parts;
