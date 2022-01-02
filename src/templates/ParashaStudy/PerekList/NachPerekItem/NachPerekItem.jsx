import React from 'react';
import { Link } from 'gatsby';

import { perekLink } from '../PerekItem.module.css';

const NachPerekItem = (props) => {
  const { sefer, perek } = props;
  const perekName = perek === 0 ? 'Introduction' : `Perek ${perek}`;
  const url = `/parasha-study/perakim/${sefer}/${perek}`;

  return (
    <div className='col l4 m6 s12'>
      <Link to={url} className={perekLink}>
        <div className='card hoverable full-width'>
          <div className='card-content'>
            <p>{perekName}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NachPerekItem;
