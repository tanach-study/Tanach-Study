import React from 'react';

import BookItem from './BookItem.jsx';

function BookList (props) {
  const { section, title } = props;
  const bookItems = section.map((book, i) => <BookItem key={`${section}-${i}`} {...book} />);
  return (
    <div className='row'>
      <div className='light'>
        <h4 className='center center-align'>{title}</h4>
        {bookItems}
      </div>
    </div>
  )
}

export default BookList;
