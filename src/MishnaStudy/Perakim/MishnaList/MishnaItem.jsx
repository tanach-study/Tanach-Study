import React from 'react';

const MishnaItem = (props) => {
  const { name, number, title } = props;
  return (
    <li>{name} {number}: {title}</li>
  );
};

export default MishnaItem;
