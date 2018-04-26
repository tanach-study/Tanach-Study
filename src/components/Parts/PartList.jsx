import React, { Component } from 'react';

import PartLink from './PartLink.jsx';

import data from './parts.json';

function PartList (props) {
  const mapped = props.parts.map((book, i, books) => <PartLink key={`${book.name}-${i}`} book={book} i={i} books={books} />);
  return (
    <div className='row center'>
      <div className='center center-align light'>
        <h5>{props.title}</h5>
        {mapped}
      </div>
    </div>
  );
}

export default PartList;
