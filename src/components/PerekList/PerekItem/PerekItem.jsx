import React from 'react';

function formatDir(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (match, i) => {
    if (+match === 0) return '';
    return match.toUpperCase();
  });
}

function formatFile(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (match, i) => {
    if (+match === 0) return '';
    return match.toUpperCase();
  });
}

const PerekItem = (props) => {
  const partName = encodeURIComponent(formatDir(props.sefer.part_name.toLowerCase()));
  const seferName = encodeURIComponent(formatDir(props.sefer.book_name.toLowerCase()));
  const fileName = `${props.sefer.book_name.replace(/ /g, '-')}-${props.perek.perek_id}.mp3`;
  return (
    <div onClick={props.click} className='card red'>
      <p>Perek {props.perek.perek_id}</p>
      <audio src={`http://cdn.tanachstudy.com/archives/${partName}/${seferName}/${fileName}`} controls />
    </div>
  );
}

export default PerekItem;
