import React from 'react';

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter) {
    return letter.toUpperCase();
  })
}


const PerekItem = (props) => {
  const perekName = (props.perek.perek_id == 0 ? 'Introduction' : `Perek ${props.perek.perek_id}`);
  let parts = null;
  let partsBreakdown = null;
  if (props.perek.is_many_parts) {
    partsBreakdown = props.perek.parts_breakdown.split(',');
    parts = 'Parts ';
    partsBreakdown.forEach((part) => parts += `${part.toUpperCase()}, `);
    parts = parts.substring(0, parts.length - 2);
  }
  return (
    <div className="col l4 m6 s12">
      <div onClick={(e) => props.click(props.perek.perek_id)} className="card hoverable full-width">
        <div className="card-content">
          <p>{perekName} <span><i>{parts ? parts : ''}</i></span></p>
        </div>
      </div>
    </div>
  );
}

export default PerekItem;

// FOR THE FUTURE
// <img src="/assets/images/facebook.png" alt="facebook"/>
// <img src="/assets/images/twitter.png" alt="facebook"/>
// <i className="material-icons">share</i>
