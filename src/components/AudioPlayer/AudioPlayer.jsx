import React from 'react';

import styles from './AudioPlayer.css';

function AudioPlayer(props) {
  const { className, url, name, title, part, tabs } = props;
  const { teacherTitle,
    teacherFirst,
    teacherMiddle,
    teacherLast,
    teacherImage,
    teacherBio } = props;
  const { host, path } = url || {};
  const src = `${host}${path}`;

  const middle = teacherMiddle || '';
  const teacherString = `${teacherTitle} ${teacherFirst} ${middle} ${teacherLast}`;

  return (
    <div className={className}>
      <div className='card'>
        <div className='card-content'>
          <h4 className='grey-text text-darken-4'>Now Playing: {name} {part}</h4>
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
        {tabs && (
          <div className='card-tabs'>
            <ul className={`tabs tabs-fixed-width ${styles['tabs-container']}`}>
              {tabs}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AudioPlayer;
