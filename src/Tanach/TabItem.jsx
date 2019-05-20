import React from 'react';

import { ProgramContext } from '../app-context.js';

import styles from './Tanach.css';

// helper function to convert a hex value to rgb
// obtained from https://stackoverflow.com/a/5624139
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
}


function TabItem(props) {
  const { key, isActive, click, content, className } = props;
  const activeClass = isActive ? styles['active-part'] : '';
  const extraClass = className || '';
  return (
    <ProgramContext.Consumer>
      {(program) => {
        const { textClass: text, mainColor: main } = program;
        const rgb = hexToRgb(main);
        const activeStyle = {
          backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)`,
          borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.8)`,
          borderBottom: '3px solid',
        };
        return (
          <li
            key={key}
            className={`tab ${styles['part-tab']} ${text} ${activeClass} clickable ${extraClass}`}
            onClick={click}
            style={isActive ? activeStyle : {}}
          >
            {content}
          </li>
        );
      }}
    </ProgramContext.Consumer>
  );
}

export default TabItem;
