import React from 'react';
import styles from './PerekItem.css';

const PerekItem = (props) => {
  return (
    <div onClick={props.click} className="card hoverable">
      <div className="card-content">
        <div>
          <div className="left-align">
            <p>Perek {props.perek.perek_id}</p>
          </div>
          <div className="center-align">
            <audio src="" controls></audio>
          </div>
          <p className="right-align">
            <img src="/assets/images/facebook.png" alt="facebook"/>
            <img src="/assets/images/twitter.png" alt="facebook"/>
            <i className="material-icons">share</i>
            <i className="material-icons">file_download</i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PerekItem;
