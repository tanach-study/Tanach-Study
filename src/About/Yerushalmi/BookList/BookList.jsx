import React from 'react';

import BookItem from './BookItem.jsx';

function BookList(props) {
  const { section, title } = props;
  const bookItems = section.map(book => <BookItem key={`BookList-BookItem-${title}`} {...book} />);
  return (
    <div className='row'>
      <div className='light'>
        <h4>{title}</h4>
        {bookItems}
      </div>
    </div>
  );
}

export default BookList;
