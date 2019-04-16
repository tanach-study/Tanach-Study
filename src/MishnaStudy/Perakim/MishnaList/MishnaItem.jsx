import React from 'react';

import { ProgramContext } from '../../../app-context.js';

const MishnaItem = (props) => {
  const { name, number, title, index, click, selected } = props;
  return (
    <ProgramContext.Consumer>
      {(program) => {
        const { backgroundClass: bg } = program;
        return (
          <li className={`collection-item clickable ${selected === index ? `active ${bg}` : ''}`}>
            <div onClick={() => click(index)}>{name} {number}: {title}</div>
          </li>
        );
      }}
    </ProgramContext.Consumer>
  );
};

export default MishnaItem;
