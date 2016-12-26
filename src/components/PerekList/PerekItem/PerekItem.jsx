import React from 'react';
import styles from './PerekItem.css';

const PerekItem = (props) => {
  return (
    <div onClick={props.click} className={`col ${props.index % 3 == 0 ? 'offset-l1' : ''} ${props.index % 2 == 0 ? 'offset-m1' : 'offset-m2'} l3 m4 s12 card blue lighten-5 hoverable`}>
      <div className="card-content">
        <p>Perek {props.perek.perek_id}</p>

      </div>
    </div>
  );
}

export default PerekItem;

// function formatDir(str) {
  // return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (match, i) => {
    // if (+match === 0) return '';
    // return match.toUpperCase();
  // });
// }
// const partName = encodeURIComponent(formatDir(props.sefer.part_name.toLowerCase()));
// const seferName = encodeURIComponent(formatDir(props.sefer.book_name.toLowerCase()));
// const fileName = `${props.sefer.book_name.replace(/ /g, '-')}-${props.perek.perek_id}.mp3`;
// <audio src={`http://cdn.tanachstudy.com/archives/${partName}/${seferName}/${fileName}`} controls />
