import React from 'react';

function LanguageSelector(props) {
  const { clickHandler } = props;
  return (
    <div className='row'>
      <div className='center'>
        <button
          className='waves-effect waves-light btn msred col l2 m3 s12 offset-l2'
          onClick={() => clickHandler('heb')}
        >
          Hebrew
        </button>
        <button
          className='waves-effect waves-light btn msred col l2 m4 s12 offset-l1 offset-m1'
          onClick={() => clickHandler('par')}
        >
          Hebrew/English
        </button>
        <button
          className='waves-effect waves-light btn msred col l2 m3 s12 offset-l1 offset-m1'
          onClick={() => clickHandler('eng')}
        >
          English
        </button>
      </div>
    </div>
  );
}

export default LanguageSelector;
