import React, { Component } from 'react';

import BookList from './BookList/BookList.jsx';

import data from './yerushalmi.json';

function Yerushalmi (props) {
  return (
    <div className='container'>
      <div className='section'>
        <div className='center'>

        </div>
      </div>
        <div className='section'>
          <h3 className='center'>The Yerushalmi Exam</h3>
          <BookList
            title='Torah'
            section={data.torah || []}
          />
          <div className='divider'></div>
          <BookList
            title='Neviim'
            section={data.neviim || []}
          />
          <div className='divider'></div>
          <BookList
            title='Ketuvim'
            section={data.ketuvim || []}
          />
        </div>
      </div>
  );
}

export default Yerushalmi;
