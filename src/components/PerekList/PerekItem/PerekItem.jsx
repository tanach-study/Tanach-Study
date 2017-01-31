import React from 'react';
import styles from './PerekItem.css';

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter) {
    return letter.toUpperCase();
  })
}


const PerekItem = (props) => {
  const part = camelize(props.sefer.part_name);
  let perekName = '';
  perekName = (props.perek.perek_id == 0 ? 'Introduction' : `Perek ${props.perek.perek_id}`);
  return (
    <div onClick={props.click} className="card hoverable">
      <div className="card-content">
        <div className="row">
          <div className="col l4 m4 s4 left-align">
            <div className="col-content">
              <p>{perekName}</p>
            </div>
          </div>
          <div className="col l4 m4 s4 center-align">
            <div className="col-content">
              <audio src={`http://cdn.tanachstudy.com/archives/${part}/${props.sefer.book_name.charAt(0).toUpperCase() + props.sefer.book_name.slice(1)}/${props.sefer.book_name}-${props.perek.perek_id}.mp3`} controls></audio>
            </div>
          </div>
          <div className="col l4 m4 s4 right-align">
            <div className="col-content">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerekItem;

// FOR THE FUTURE
// <img src="/assets/images/facebook.png" alt="facebook"/>
// <img src="/assets/images/twitter.png" alt="facebook"/>
// <i className="material-icons">share</i>
