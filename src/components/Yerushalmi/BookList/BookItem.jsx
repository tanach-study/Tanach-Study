import React from 'react';
import { Link } from 'react-router-dom';

function BookItem (props) {
  const { title, name, chapters } = props;
  return (
    <div>
      <h5>Sefer {title}</h5>
    </div>
  )
}

export default BookItem;
