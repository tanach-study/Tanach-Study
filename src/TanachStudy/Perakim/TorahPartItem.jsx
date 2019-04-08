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
    const { index, currentPart } = this.props;
    const { part } = this.props || {};
    const { number,
      title,
      start_chapter: sChap,
      end_chapter: eChap,
      start_verse: sVer,
      end_verse: eVer } = part;
    const textString = sChap === eChap
      ? `(${sChap}:${sVer}-${eVer})`
      : `(${sChap}:${sVer} - ${eChap}:${eVer})`;
    const final = title ? `${title} ${textString}` : '';
    return (
      <div onClick={this.selectPart} className='hoverable section'>
        <b>Part {number}:</b>
        <span className={`${currentPart === index + 1 ? 'bold' : ''}`}>&nbsp;{final}</span>
      </div>
    );
  }
}

export default PartItem;
