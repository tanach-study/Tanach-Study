import React from 'react';
import { Link } from 'react-router-dom';

const TeacherCard = props => {
  const act = props.activePerek;
  let recording = null;

  if (act.is_many_parts) {
      const partsBreakdown = act.parts_breakdown.split(',');
      let fileBase = props.fileName.replace('.mp3', '');
      recording = partsBreakdown.map((part, i) => {
        return (
          <div key={i}>
            <h6>Part {part.toUpperCase()}</h6>
            <audio src={`http://cdn.tanachstudy.com/archives/${props.partName}/${props.seferName}/${fileBase}${part}.mp3`} controls />
          </div>
        );
      });
    } else {
      recording = <audio src={`http://cdn.tanachstudy.com/archives/${props.partName}/${props.seferName}/${props.fileName}`} controls />
    }

  return (
    <div className="col l6 m12 s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">Class given by {act.teacher_title} {act.teacher_fname}{act.teacher_mname ? ` ${act.teacher_mname} ` : ' '}{act.teacher_lname}<i className="material-icons right">more_vert</i></span>
          <br/>
          {recording}
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{act.teacher_title} {act.teacher_fname}{act.teacher_mname ? ` ${act.teacher_mname} ` : ' '}{act.teacher_lname}<i className="material-icons right">close</i></span>
          <p>{act.teacher_bio || 'This teacher doesn\'t have a bio'}</p>
          <Link to={`/teachers/${act.teacher_id}`}>See {act.teacher_title} {act.teacher_lname}'s bio page</Link>
        </div>
      </div>
    </div>
  );
}

export default TeacherCard;
