import React from 'react';

function VideoContent(props) {
  const { className, nowPlaying, title, image, teacher, bio, src } = props;
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
      <div className='row'>
        <iframe
          width='560'
          height='315'
          src={src}
          allow='autoplay; encrypted-media'
          allowFullScreen
          title={title}
          className='col l12 m12 s12'
        />
      </div>
    </div>
  );
}

export default VideoContent;
