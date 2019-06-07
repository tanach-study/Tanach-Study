import React from 'react';

import { ProgramContext } from '../../../../src/app-context.js';

function LanguageSelector(props) {
  const { clickHandler } = props;
  return (
    <ProgramContext.Consumer>
      {(program) => {
        const { backgroundClass: bg } = program;
        return (
          <div className='row'>
            <div className='center'>
              <button
                className={`waves-effect waves-light btn ${bg} col l2 m3 s12 offset-l2`}
                onClick={() => clickHandler('heb')}
              >
                Hebrew
              </button>
              <button
                className={`waves-effect waves-light btn ${bg} col l2 m3 s12 offset-l1 offset-m1`}
                onClick={() => clickHandler('par')}
              >
                Hebrew/English
              </button>
              <button
                className={`waves-effect waves-light btn ${bg} col l2 m3 s12 offset-l1 offset-m1`}
                onClick={() => clickHandler('eng')}
              >
                English
              </button>
            </div>
          </div>
        );
      }}
    </ProgramContext.Consumer>
  );
}

export default LanguageSelector;
