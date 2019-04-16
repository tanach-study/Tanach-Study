import React from 'react';

function AudioPlayer(props) {
  const { url, playing } = props;
  const { host, path } = url || {};
  const src = `${host}${path}`;

  const { part_name: name, part_title: title, part: number } = playing || {};

  const { teacher_image_url: img,
    teacher_title: teacherTitle,
    teacher_fname: fname,
    teacher_mname: mname,
    teacher_lname: lname,
    teacher_short_bio: shortBio } = playing || {};
  const middle = mname || '';
  const teacherString = `${teacherTitle} ${fname} ${middle} ${lname}`;

  return (
    <div className='col l6 m6 s12'>
      <div className='card'>
        <div className='card-content'>
          <h4 className='grey-text text-darken-4'>Now Playing: {name} {number}</h4>
          <h5>{title}</h5>
          <div className='section'>
            <div className='row valign-wrapper'>
              <img
                src={img}
                alt={`Profile of ${teacherTitle} ${fname} ${mname || ''} ${lname}`}
                className='col l3 m3 s3 valign responsive-img circle full-width'
              />
              <div className='col l9 m9 s9 valign'>
                <h5>{teacherString}</h5>
                {shortBio}
              </div>
            </div>
          </div>
          <div className='row'>
            <audio src={src} controls className='col l12 m12 s12' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
