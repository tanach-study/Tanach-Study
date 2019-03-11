import React from 'react';
import { Link } from 'react-router-dom';

function ChapterItem(props) {
  const { bookName, length, i, chapter } = props;
  const { number, path } = chapter;
  let classAdd = '';
  const diff = length - i;

  if (length === 1 && i === 0) {
    classAdd = 'offset-l4 offset-m3';
  } else if (length === 2 && i === 0) {
    classAdd = 'offset-l2';
  } else if (length > 2) {
    if (diff < 3) {
      if (length % 3 === 1 && i === length - 1) {
        classAdd = i % 2 === 0 ? 'offset-l4 offset-m3' : 'offset-l4';
      } else if (length % 3 === 2 && i === length - 2) {
        classAdd = i % 2 === 0 ? 'offset-l2 offset-m3' : 'offset-l2';
      }
    }
  }

  const link = path || `/perakim/${bookName}/${number}`;

  return (
    <Link to={link} className={`col s12 m6 l4 ${classAdd}`} key={`${bookName}-${number}-${i}`}>
      <div className='card tsblue btn waves-effect hoverable full-width'>
        <div className='col-content'>{bookName} {number}</div>
      </div>
    </Link>
  );
}

export default ChapterItem;
