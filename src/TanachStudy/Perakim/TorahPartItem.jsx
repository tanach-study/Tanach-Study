import React, { Component } from 'react';

class PartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.selectPart = this._selectPart.bind(this);
  }

  _selectPart() {
    const { index, part } = this.props;
    this.props.clickHandler(index + 1, part.title);
  }

  render() {
    const { part } = this.props || {};
    const { index, currentPart } = this.props;
    const textString = part.start_chapter === part.end_chapter ? `(${part.start_chapter}:${part.start_verse}-${part.end_verse})` : `(${part.start_chapter}:${part.start_verse} - ${part.end_chapter}:${part.end_verse})`;
    const title = part.title.includes('(') ? part.title : `${part.title} ${textString}`;
    return (
      <div onClick={this.selectPart} className='hoverable section'>
        <b>Part {part.number}:</b><span className={`${currentPart === index + 1 ? 'bold' : ''}`}> {part.title !== '' ? title : ''}</span>
      </div>
    );
  }
}

export default PartItem;
