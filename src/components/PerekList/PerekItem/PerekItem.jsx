import React from 'react';
import styles from './PerekItem.css';

const PerekItem = (props) => {
  return (
    <div onClick={props.click} className="card hoverable">
      <div className="card-content">
        <div>
          <p className="left-align">Perek {props.perek.perek_id}</p>
          <p className="right-align"><i className="material-icons">file_download</i></p>
        </div>
      </div>
    </div>
  );
}

export default PerekItem;
