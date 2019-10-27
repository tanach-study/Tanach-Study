import React from 'react';

function AudioContent(props) {
  const { className, nowPlaying, title, teacherImage, teacherString, teacherBio, src } = props;
  return (
    <div className={className}>
      <h4 className='grey-text text-darken-4'>Now Playing: {nowPlaying}</h4>
      <h5>{title}</h5>
      <div className='section'>
        <div className='row valign-wrapper'>
          <img
            src={teacherImage}
            alt={`Profile of ${teacherString}`}
            className='col l3 m3 s3 valign responsive-img circle full-width'
          />
          <div className='col l9 m9 s9 valign'>
            <h5>{teacherString}</h5>
            {teacherBio}
          </div>
        </div>
      </div>
      <div className='row'>
        <audio src={src} controls className='col l12 m12 s12' />
      </div>
    </div>
  );
}

export default AudioContent;
