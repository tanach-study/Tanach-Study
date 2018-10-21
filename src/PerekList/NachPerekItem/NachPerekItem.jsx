import React from 'react';

const NachPerekItem = (props) => {
  const perekName = (props.perek.perek_id === 0 ? 'Introduction' : props.perek.perek_title ? `Perek ${props.perek.perek_id}: ${props.perek.perek_title}` : `Perek ${props.perek.perek_id}`);
  let finalParts = null;
  let partsBreakdown = null;
  if (props.perek.is_many_parts) {
    partsBreakdown = props.perek.parts_breakdown.split(',');
    finalParts = partsBreakdown.reduce((parts, part) => `${parts}${part.toUpperCase()}, `, 'Parts ');
    finalParts = finalParts.substring(0, finalParts.length - 2);
  }
  return (
    <div className='col l4 m6 s12'>
      <div onClick={(e) => props.click(props.perek.perek_id)} className='card hoverable full-width'>
        <div className='card-content'>
          <p>{perekName} <span><i>{finalParts || ''}</i></span></p>
        </div>
      </div>
    </div>
  );
};

export default NachPerekItem;
