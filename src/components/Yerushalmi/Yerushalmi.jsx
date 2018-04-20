import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BookList from './BookList/BookList.jsx';

import data from './yerushalmi.json';

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
    <Link to={`/sefarim/${book.sefer}`} className={`col s12 m6 l4 ${classAdd}`} key={i}>
      <div className='card tsblue btn waves-effect hoverable full-width'>
        <div className='col-content'>{book.sefer}</div>
      </div>
    </Link>
  );
}

class Yerushalmi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      torah: data.torah || [],
      neviim: data.neviim || [],
      ketuvim: data.ketuvim || [],
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='container'>
          <div className='section'>
            <h3 className='center'>Sefarim</h3>
            <BookList
              title='Torah'
              section={this.state.torah}
            />
            <BookList
              title='Neviim'
              section={this.state.neviim}
            />
            <BookList
              title='Ketuvim'
              section={this.state.ketuvim}
            />
          </div>
        </div>
    );
  }

}

export default Yerushalmi;
