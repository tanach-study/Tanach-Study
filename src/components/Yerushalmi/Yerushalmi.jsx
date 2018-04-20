import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BookList from './BookList/BookList.jsx';

import data from './yerushalmi.json';

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
