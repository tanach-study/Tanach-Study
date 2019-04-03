import React from 'react';
import { Link } from 'react-router-dom';

function PartLink({ book, i, books }) {
  let classAdd = '';
  const diff = books.length - i;
  if (diff < 3 && diff > 0) {
    if (books.length % 3 === 1 && i === books.length - 1) {
      classAdd = i % 2 === 0 ? 'offset-l4 offset-m3' : 'offset-l4';
    } else if (books.length % 3 === 2 && i === books.length - 2) {
      classAdd = i % 2 === 0 ? 'offset-l2 offset-m3' : 'offset-l2';
    }
  }

  if (book.active) {
    return (
      <Link to={book.url} className={`col s12 m6 l4 ${classAdd}`} key={i}>
        <div className='card msred btn waves-effect hoverable full-width'>
          <div className='col-content'>{book.name}</div>
        </div>
      </Link>
    );
  }
  return (
    <div className={`col s12 m6 l4 ${classAdd}`} key={i}>
      <div className='card msred btn waves-effect hoverable full-width disabled'>
        <div className='col-content'>{book.name}</div>
      </div>
    </div>
  );
}

export default PartLink;
