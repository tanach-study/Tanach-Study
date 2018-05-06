import React from 'react';
import TeamimItem from './TeamimItem.jsx';

function ReaderCard(props) {
  const { teamim } = props;
  if (teamim) {
    return (
      <div className='col l6 m12 s12'>
        <div className='card'>
          <div className='card-content'>
            <TeamimItem teamim={teamim} />
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default ReaderCard;
