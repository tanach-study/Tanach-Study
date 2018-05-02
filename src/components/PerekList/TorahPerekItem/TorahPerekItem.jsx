import React from 'react';

function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}


const TorahPerekItem = (props) => {
  const perekName = `Parashat ${toTitleCase(props.perek.pretty_name)}`;
  return (
    <div className='col l4 m6 s12'>
      <div onClick={(e) => props.click(props.perek.perek_id)} className='card hoverable full-width'>
        <div className='card-content'>
          <p>{perekName}</p>
        </div>
      </div>
    </div>
  );
};

export default TorahPerekItem;
