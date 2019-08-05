import React from 'react';

import { ProgramContext } from '../../../../app-context.js';

const MishnaItem = (props) => {
  const { name, number, title, index, click, selected } = props;
  return (
    <ProgramContext.Consumer>
      {(program) => {
        const { backgroundClass: bg } = program;
        return (
          <li
            className={`collection-item clickable ${selected === index ? `active ${bg}` : ''}`}
            onClick={() => click(index)}
          >
            <span>{name} {number}: {title}</span>
          </li>
        );
      }}
    </ProgramContext.Consumer>
  );
};

export default MishnaItem;
