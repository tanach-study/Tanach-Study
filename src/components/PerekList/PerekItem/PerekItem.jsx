import React from 'react';
import styles from './PerekItem.css';

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter) {
    return letter.toUpperCase();
  })
}


const PerekItem = (props) => {
  const part = camelize(props.sefer.part_name);
  const perekName = (props.perek.perek_id == 0 ? 'Introduction' : `Perek ${props.perek.perek_id}`);
  let audioURL = null;
  let jsx = null;
  if (props.perek.is_many_parts) {
    const partsBreakdown = props.perek.parts_breakdown.split(',');
    const perekParts = partsBreakdown.map((perekPart, i) => {
      audioURL = `http://cdn.tanachstudy.com/archives/${part}/${props.sefer.book_name.charAt(0).toUpperCase() + props.sefer.book_name.slice(1)}/${props.sefer.book_name}-${props.perek.perek_id}${perekPart}.mp3`;
      return (
        <div key={i} onClick={(e) => props.click(props.perek.perek_id)} className="card hoverable">
          <div className="card-content">
            <div className="row">
              <div className="col l4 m4 s4 left-align">
                <div className="col-content">
                  <p>{`${perekName} Part ${perekPart.toUpperCase()}`}</p>
                </div>
              </div>
              <div className="col l4 m4 s4 center-align">
                <div className="col-content">
                  <audio src={audioURL} controls></audio>
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
    });
    jsx = perekParts;
  } else {
    audioURL = `http://cdn.tanachstudy.com/archives/${part}/${props.sefer.book_name.charAt(0).toUpperCase() + props.sefer.book_name.slice(1)}/${props.sefer.book_name}-${props.perek.perek_id == 0 ? '0-intro' : props.perek.perek_id}.mp3`;
    jsx = (
      <div>
        <div onClick={(e) => props.click(props.perek.perek_id)} className="card hoverable">
          <div className="card-content">
            <div className="row">
              <div className="col l4 m4 s4 left-align">
                <div className="col-content">
                  <p>{perekName}</p>
                </div>
              </div>
              <div className="col l4 m4 s4 center-align">
                <div className="col-content">
                  <audio src={audioURL} controls></audio>
                </div>
              </div>
              <div className="col l4 m4 s4 right-align">
                <div className="col-content">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
  return (
    <div>
      {jsx}
    </div>
  );
}

export default PerekItem;

// FOR THE FUTURE
// <img src="/assets/images/facebook.png" alt="facebook"/>
// <img src="/assets/images/twitter.png" alt="facebook"/>
// <i className="material-icons">share</i>
