import React from 'react';
import PartsItem from '../PartsItem/PartsItem.jsx';

const PartsList = props => {
  const items = props.books.map((book, i) => <PartsItem name={book.name} url={book.url} key={i} />);
  return (
    <div className="col l12 m12 s12">
      {items}
    </div>
  );
}

export default PartsList;
