import React from 'react';

import VideoContent from './VideoContent.jsx';
import styles from './VideoPlayer.module.css';

function VideoPlayer(props) {
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

  const nowPlaying = `${name} ${part}`;

  return (
    <div className={className}>
      <div className='card'>
        <VideoContent
          className='card-content'
          nowPlaying={nowPlaying}
          title={title}
          image={teacherImage}
          teacher={teacherString}
          bio={teacherBio}
          src={src}
        />
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

export default VideoPlayer;
