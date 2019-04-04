import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MishnaItem.css';

const MishnaItem = (props) => {
  const { perek, seder, masechet, mishna } = props;
  const mishnaName = mishna === 0 ? 'Introduction' : `Mishna ${mishna}`;
  const url = `/mishna-study/mishna/${seder}/${masechet}/${perek}/${mishna}`;
  return (
    <div className='col l4 m6 s12'>
      <Link to={url} className={styles['perek-link']}>
        <div className='card hoverable full-width'>
          <div className='card-content'>
            <p>{mishnaName}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MishnaItem;
