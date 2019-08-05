import React from 'react';
// import { Link } from 'react-router-dom';

function TeacherCard(props) {
  const { audio, title, fname, mname, lname, bio } = props;
  const { host, path } = audio;

  return (
    <div className='col l6 m12 s12'>
      <div className='card'>
        <div className='card-content'>
          <span className='card-title activator grey-text text-darken-4'>Class given by {title} {fname}{mname ? ` ${mname} ` : ' '}{lname}<i className='material-icons right'>more_vert</i></span>
          <br />
          <audio src={`${host}${path}`} controls />
        </div>
        <div className='card-reveal'>
          <span className='card-title grey-text text-darken-4'>{title} {fname}{mname ? ` ${mname} ` : ' '}{lname}<i className='material-icons right'>close</i></span>
          <p>{bio || 'This teacher doesn\'t have a bio'}</p>
          {/* <Link to={`/teachers/${act.teacher_id}`}>See {act.teacher_title} {act.teacher_lname}&apos;s bio page</Link> */}
        </div>
      </div>
    </div>
  );
}

export default TeacherCard;
