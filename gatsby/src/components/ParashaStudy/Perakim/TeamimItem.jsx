import React from 'react';

function TeamimItem(props) {
  const { teamim } = props;
  const { reader_title: title,
    reader_fname: fname,
    reader_mname: mname,
    reader_lname: lname,
    audio_url: url } = teamim || {};
  const readerNameString = `${title} ${fname} ${mname || ''}${lname}`;
  return (
    <div>
      <span className='card-title grey-text text-darken-4'>Perek read by {readerNameString}</span>
      <br />
      <audio src={url} controls />
    </div>
  );
}

export default TeamimItem;
