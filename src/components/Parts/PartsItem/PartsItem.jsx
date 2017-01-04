import React from 'react';
import { Link } from 'react-router';

const PartsItem = props => {
  return (
    <Link to={props.url}>
      <div className="card">
        <div className="card-content">Sefer {props.name}</div>
      </div>
    </Link>
  );
}

export default PartsItem;
