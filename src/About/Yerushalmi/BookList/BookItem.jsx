import React from 'react';

import ChapterItem from './ChapterItem.jsx';

function BookItem(props) {
  const { title, name, chapters, notes } = props;
  const chapterItems = chapters.map((chapter, i) => (
    <ChapterItem
      key={`BookList-BookItem-${name}-${title}`}
      bookName={name}
      chapter={chapter}
      length={chapters.length}
      i={i}
    />
  ));
  return (
    <div className='section row'>
      <h5 className='col l12 m12 s12'>Sefer {title}</h5>
      {notes ? <p className='col l12 m12 s12'>{notes}</p> : null}
      {chapterItems}
    </div>
  );
}

export default BookItem;
