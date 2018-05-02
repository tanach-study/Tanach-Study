import React from 'react';
import { Link } from 'react-router-dom';

function ReaderCard(props) {
  const act = props.activePerek;
  if (act.reader_id) {
    return (
      <div className='col l6 m12 s12'>
        <div className='card'>
          <div className='card-content'>
            <span className='card-title activator grey-text text-darken-4'>Perek read by {`${act.reader_title} ${act.reader_fname} ${act.reader_mname || ''}${act.reader_lname}`}<i className='material-icons right'>more_vert</i></span>
            <br />
            <audio src={`https://cdn.tanachstudy.com/archives/${props.partName}/${props.seferName}/recordings/${props.teamimName}`} controls />
          </div>
          <div className='card-reveal'>
            <span className='card-title grey-text text-darken-4'>{`${act.reader_title} ${act.reader_fname} ${act.reader_mname || ''}${act.reader_lname}`}<i className='material-icons right'>close</i></span>
            <p>{act.reader_bio || 'This teacher doesn\'t have a bio'}</p>
            <Link href={`/readers/${act.reader_id}`}>See {act.reader_title} {act.reader_lname}&apos;s bio page</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ReaderCard;
