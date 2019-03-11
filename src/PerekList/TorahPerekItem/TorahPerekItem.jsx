import React from 'react';

function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}


const TorahPerekItem = (props) => {
  const perekName = `Parashat ${toTitleCase(props.perek.pretty_name)}`;
  const textString = props.perek.start_chapter === props.perek.end_chapter ? `(${props.perek.start_chapter}:${props.perek.start_verse}-${props.perek.end_verse})` : `(${props.perek.start_chapter}:${props.perek.start_verse} - ${props.perek.end_chapter}:${props.perek.end_verse})`;

  return (
    <div className='col l4 m6 s12'>
      <div onClick={(e) => props.click(props.perek.perek_id)} className='card hoverable full-width'>
        <div className='card-content'>
          <p>{perekName} {props.perek.start_chapter && <span>{textString}</span>}</p>
        </div>
      </div>
    </div>
  );
};

export default TorahPerekItem;
