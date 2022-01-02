import React from 'react';
import { Link } from 'gatsby';

import { dafLink } from './DafItem.module.css';

const TalmudDafItem = (props) => {
  const { daf, seder, masechet } = props;
  const url = `/talmud-study/dapim/${seder}/${masechet}/${daf}`;
  return (
    <div className='col l4 m6 s12'>
      <Link to={url} className={dafLink}>
        <div className='card hoverable full-width'>
          <div className='card-content'>
            <p>{`Daf ${daf}`}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TalmudDafItem;
