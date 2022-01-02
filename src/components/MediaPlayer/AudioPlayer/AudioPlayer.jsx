import React from 'react';

import AudioContent from './AudioContent.jsx';
import { tabsContainer } from './AudioPlayer.module.css';

function AudioPlayer(props) {
  const { className, url, name, title, part, tabs } = props;
  const { teacherTitle,
    teacherFirst,
    teacherMiddle,
    teacherLast,
    teacherImage,
    teacherBio } = props;

  const middle = teacherMiddle || '';
  const teacherString = `${teacherTitle} ${teacherFirst} ${middle} ${teacherLast}`;

  const nowPlaying = `${name} ${part}`;

  return (
    <div className={className}>
      <div className='card'>
        <AudioContent
          className='card-content'
          nowPlaying={nowPlaying}
          title={title}
          image={teacherImage}
          teacher={teacherString}
          bio={teacherBio}
          src={url}
        />
        {tabs && (
          <div className='card-tabs'>
            <ul className={`tabs tabs-fixed-width ${tabsContainer}`}>
              {tabs}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AudioPlayer;
