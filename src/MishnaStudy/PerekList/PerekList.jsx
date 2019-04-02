import React from 'react';
import PerekItem from './PerekItem.jsx';

const PerekList = (props) => {
  const { seder, perakim, click } = props;
  const mapped = perakim.map((perek, i) => (
    <PerekItem
      perek={perek}
      sefer={seder}
      key={`${seder}-${perek.perek_id}`}
      index={i}
      click={click}
    />));
  return (
    <div className='row'>
      {mapped}
    </div>
  );
};

export default PerekList;
