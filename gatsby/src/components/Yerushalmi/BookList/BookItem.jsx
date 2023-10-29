import React from 'react';

import ChapterItem from './ChapterItem.jsx';

function BookItem(props) {
  const { title, name, chapters } = props;
  const chapterItems = chapters.map((chapter, i) => (
    <ChapterItem
      key={`${name}-${i}`}
      bookName={name}
      chapter={chapter}
      length={chapters.length}
      unavailable={props.unavailable}
      i={i}
    />
  ));
  return (
    <div className='section row'>
      <h5 className='col l12 m12 s12'>{props.modifier || 'Sefer'} {title}</h5>
      {props.notes ? <p className='col l12 m12 s12'>{props.notes}</p> : null}
      {chapterItems}
    </div>
  );
}

export default BookItem;
