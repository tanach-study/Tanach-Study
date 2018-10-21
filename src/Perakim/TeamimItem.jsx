import React from 'react';

function TeamimItem(props) {
  const { teamim } = props;
  const readerNameString = `${teamim.reader_title} ${teamim.reader_fname} ${teamim.reader_mname || ''}${teamim.reader_lname}`;
  return (
    <div>
      <span className='card-title grey-text text-darken-4'>Perek read by {readerNameString}</span>
      <br />
      <audio src={teamim.url} controls />
    </div>
  );
}

export default TeamimItem;
