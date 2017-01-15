import React from 'react';
import styles from './PerekItem.css';

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter) {
    return letter.toUpperCase();
  })
}


const PerekItem = (props) => {
  const part = camelize(props.sefer.part_name);
  return (
    <div onClick={props.click} className="card hoverable">
      <div className="card-content">
        <div>
          <div className="left-align">
            <p>Perek {props.perek.perek_id}</p>
          </div>
          <div className="center-align">
            <audio src={`http://cdn.tanachstudy.com/archives/${part}/${props.sefer.book_name.charAt(0).toUpperCase() + props.sefer.book_name.slice(1)}/${props.sefer.book_name}-${props.perek.perek_id}.mp3`} controls></audio>
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
