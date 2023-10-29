import React from 'react';
import MishnaItem from './MishnaItem.jsx';

const MishnaList = (props) => {
  const { mishnayot, seder, masechet, perek, click, selected, className } = props;
  const mapped = mishnayot.map((mishna, i) => {
    const { part_name: name, part_title: title, part: number } = mishna;
    return (
      <MishnaItem
        name={name}
        number={number}
        title={title}
        index={i}
        click={click}
        selected={selected}
        key={`seder-${seder}-masechet-${masechet}-perek-${perek}-mishna-${number}-listitem`}
      />
    );
  });
  return (
    <ul className={className}>
      {mapped}
    </ul>
  );
};

export default MishnaList;
