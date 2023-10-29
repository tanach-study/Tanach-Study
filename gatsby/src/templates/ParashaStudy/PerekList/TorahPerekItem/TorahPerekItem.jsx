import React from 'react';
import { Link } from 'gatsby';

import { perekLink } from '../PerekItem.module.css';

function toTitleCase(str) {
  const x = str.replace('-', ' ');
  return x.replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase());
}

const TorahPerekItem = (props) => {
  const { sefer, perek } = props;
  const parashaName = `Parashat ${toTitleCase(String(perek))}`;
  const url = `/parasha-study/perakim/${sefer}/${perek}`;

  return (
    <div className='col l4 m6 s12'>
      <Link to={url} className={perekLink}>
        <div className='card hoverable full-width'>
          <div className='card-content'>
            <p>{parashaName}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TorahPerekItem;
