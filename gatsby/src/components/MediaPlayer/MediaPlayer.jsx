import React, { useState } from 'react';

import AudioPlayer from './AudioPlayer/AudioPlayer.jsx';
import AudioContent from './AudioPlayer/AudioContent.jsx';
import VideoPlayer from './VideoPlayer/VideoPlayer.jsx';
import VideoContent from './VideoPlayer/VideoContent.jsx';

import { activeTab, tabContent, tabLi } from './MediaPlayer.module.css';

function MediaPlayer(props) {
  const { className, type } = props;

  if (type === 'audio') {
    return <AudioPlayer {...props} />;
  }

  if (type === 'video') {
    return <VideoPlayer {...props} />;
  }

  if (type === 'combo') {
    const [selected, selectType] = useState('audio');

    const { audioURL, videoURL, name, title } = props;
    const { teacherTitle,
      teacherFirst,
      teacherMiddle,
      teacherLast,
      teacherImage,
      teacherBio } = props;
    const middle = teacherMiddle || '';
    const teacherString = `${teacherTitle} ${teacherFirst} ${middle} ${teacherLast}`;

    const isVideo = selected === 'video';
    const Content = isVideo ? VideoContent : AudioContent;
    const src = isVideo ? videoURL : audioURL;

    const liClass = `tab psplusgreen-text col l6 m6 s6 ${tabLi}`;
    return (
      <div className={className}>
        <div className='card'>
          <div className='card-tabs'>
            <ul className='tabs'>
              <li className={`${liClass} ${!isVideo && activeTab}`}>
                <div className={tabContent} onClick={() => selectType('audio')}>
                  Audio
                </div>
              </li>
              <li className={`${liClass} ${isVideo && activeTab}`}>
                <div className={tabContent} onClick={() => selectType('video')}>
                  Video
                </div>
              </li>
            </ul>
          </div>
          <div className='card-content'>
            <Content
              nowPlaying={name}
              title={title}
              image={teacherImage}
              teacher={teacherString}
              bio={teacherBio}
              src={src}
            />
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default MediaPlayer;
