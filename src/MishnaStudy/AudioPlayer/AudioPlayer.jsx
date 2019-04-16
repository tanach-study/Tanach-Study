import React from 'react';

function AudioPlayer(props) {
  const { url } = props;
  console.log(props)
  const { host, path } = url || {};
  const src = `${host}${path}`;
  return (
    <audio src={src} controls />
  );
}

export default AudioPlayer;
