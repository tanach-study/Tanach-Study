import React from 'react';

const MishnaItem = (props) => {
  const { name, number, title, index, click } = props;
  return (
    <li onClick={(e) => click(index)}>{name} {number}: {title}</li>
  );
};

export default MishnaItem;
