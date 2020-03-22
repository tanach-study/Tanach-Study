import React from 'react';

import Metadata from '../../Metadata/Metadata.jsx';
import PartList from './PartList.jsx';

import data from './parts.json';

function Parts(props) {
  return (
    <React.Fragment>
      <Metadata
        title='Sections'
        description='Parasha breakdown by sefer and section'
        template='Parasha Study Plus'
        image=''
        pathname=''
      />
      <div className='container'>
        <div className='section center'>
          <h4>Sefarim</h4>
          <PartList title='Sundays: Archaeology' parts={data.archaeology} />
          <PartList title='Mondays: Literary Analysis' parts={data.analysis} />
          <PartList title='Tuesdays: HaRambam' parts={data.harambam} />
          <PartList title='Wednesdays: Ramban' parts={data.ramban} />
          <PartList title='Thursdays: Rasag' parts={data.rasag} />
          <PartList title='Thursdays: Midrash' parts={data.midrash} />
          <PartList title='Fridays: Haftara' parts={data.haftara} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Parts;
