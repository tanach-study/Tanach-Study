import React from 'react';
import PerekItem from './PerekItem/PerekItem.jsx';

const PerekList = (props) => {
  const mapped = props.perakim.map((perek, i) => <PerekItem perek={perek} sefer={props.sefer} key={i} />)
  return (
    <div>
      {mapped}
    </div>
  );
}

export default PerekList;
