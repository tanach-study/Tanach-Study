import React, { Component } from 'react';

import BookList from './BookList/BookList.jsx';

import data from './yerushalmi.json';

function Yerushalmi (props) {
  return (
    <div className='container'>
        <div className='section'>
          <h3 className='center'>Sefarim</h3>
          <BookList
            title='Torah'
            section={data.torah || []}
          />
          <BookList
            title='Neviim'
            section={data.neviim || []}
          />
          <BookList
            title='Ketuvim'
            section={data.ketuvim || []}
          />
        </div>
      </div>
  );
}

export default Yerushalmi;
