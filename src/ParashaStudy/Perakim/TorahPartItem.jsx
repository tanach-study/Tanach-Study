import React, { Component } from 'react';

class PartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.selectPart = this._selectPart.bind(this);
  }

  _selectPart() {
    const { index, part, clickHandler } = this.props;
    const { title } = part;
    clickHandler(index + 1, title);
  }

  render() {
    const { index, currentPart, part } = this.props;
    const { part: number,
      part_title: title,
      start_chapter: sChap,
      end_chapter: eChap,
      start_verse: sVer,
      end_verse: eVer } = part || {};
    // get the string representing the text portion that the part covers
    const textPortion = sChap === eChap
      ? `(${sChap}:${sVer}-${eVer})`
      : `(${sChap}:${sVer} - ${eChap}:${eVer})`;

    let final = '';
    // check that the part's title is not empty
    if (title && title !== null && title !== '') {
      // check that the part has a valid start and end chapter
      if (sChap !== null && sChap > 0 && eChap !== null && eChap > 0) {
        final = `${title} ${textPortion}`;
      } else {
        // title exists and is valid, text string isn't
        final = title;
      }
    }
    return (
      <div onClick={this.selectPart} className='hoverable section'>
        <b>Part {number}:</b>
        <span className={`${currentPart === index + 1 ? 'bold' : ''}`}>&nbsp;{final}</span>
      </div>
    );
  }
}

export default PartItem;
