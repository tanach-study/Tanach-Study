import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import data from './parts.json';

function bookMapper (book, i, books) {
  let classAdd = '';
  const diff = books.length - i;
  if (diff < 3 && diff > 0) {
    if (books.length % 3 == 1 && i == books.length - 1) {
      classAdd = i % 2 == 0 ? 'offset-l4 offset-m3' : 'offset-l4';
    } else if (books.length % 3 == 2 && i == books.length - 2) {
      classAdd = i % 2 == 0 ? 'offset-l2 offset-m3' : 'offset-l2';
    }
  }

  return (
    <Link to={book.url} className={`col s12 m6 l4 ${classAdd}`} key={i}>
      <div className='card tsblue btn waves-effect hoverable full-width'>
        <div className='col-content'>{book.name}</div>
      </div>
    </Link>
  );
}

function Parts (props) {
  const mappedTorah = data.torah.map(bookMapper);
  const mappedNeviim = data.neviim.map(bookMapper);
  const mappedKetuvim = data.ketuvim.map(bookMapper);
  return (
    <div className='container'>
      <div className='section center'>
        <h4>Sefarim</h4>
        <div className='row center'>
          <div className='center center-align light'>
            <h5>Torah</h5>
            {mappedTorah}
          </div>
        </div>
        <div className='row center'>
          <div className='center center-align light'>
            <h5>Nevi'im</h5>
            {mappedNeviim}
          </div>
        </div>
        <div className='row center'>
          <div className='center center-align light'>
            <h5>Ketuvim</h5>
            {mappedKetuvim}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parts;
