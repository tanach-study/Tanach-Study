import React from 'react';

const NachPerekItem = (props) => {
  const { perek, click } = props;
  const perekTitle = perek.perek_title;
  const perekID = perek.perek_id;
  const title = perekTitle ? `Perek ${perekID}: ${perekTitle}` : `Perek ${perekID}`;
  const perekName = perekID === 0 ? 'Introduction' : title;
  let partsStr = null;
  let partsBreakdown = null;
  if (perek.is_many_parts) {
    partsBreakdown = perek.parts_breakdown.split(',');
    partsStr = partsBreakdown.reduce((parts, part) => `${parts}${part.toUpperCase()}, `, 'Parts ');
    partsStr = partsStr.substring(0, partsStr.length - 2);
  }
  return (
    <div className='col l4 m6 s12'>
      <div onClick={() => click(perekID)} className='card hoverable full-width'>
        <div className='card-content'>
          <p>
            {perekName}
            &nbsp;
            {partsStr && (
              <span>
                <i>
                  {partsStr}
                </i>
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NachPerekItem;
