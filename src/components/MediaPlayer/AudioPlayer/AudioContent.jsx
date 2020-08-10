import React, { useState } from 'react';
import ReactPlayer from 'react-player'

import styles from './AudioPlayer.module.css';

function AudioContent(props) {
  const { className, nowPlaying, title, image, teacher, bio, src } = props;
  const [speed, updateSpeed] = useState('1');
  function handleSpeedChange(e) {
    updateSpeed(e.target.value);
  }
  return (
    <div className={className}>
      <h4 className='grey-text text-darken-4'>Now Playing: {nowPlaying}</h4>
      <h5>{title}</h5>
      <div className='section'>
        <div className='row valign-wrapper'>
          <img
            src={image}
            alt={`Profile of ${teacher}`}
            className='col l3 m3 s3 valign responsive-img circle full-width'
          />
          <div className='col l9 m9 s9 valign'>
            <h5>{teacher}</h5>
            {bio}
          </div>
        </div>
      </div>
      <ReactPlayer url={src} controls width='100%' height='100%' playbackRate={speed} />
      <select className={styles['speed-selector']} value={speed} onChange={handleSpeedChange}>
        <option value="0.5">0.5x</option>
        <option value="0.75">0.75x</option>
        <option value="0.9">0.9x</option>
        <option value="1" selected>1x</option>
        <option value="1.1">1.1x</option>
        <option value="1.25">1.25x</option>
        <option value="1.5">1.5x</option>
        <option value="1.75">1.75x</option>
        <option value="2">2x</option>
      </select>
    </div>
  );
}

export default AudioContent;
