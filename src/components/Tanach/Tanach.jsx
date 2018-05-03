import React, { Component } from 'react';
import Nach from './Nach.jsx';
import Torah from './Torah.jsx';

import gematriya from '../../../lib/gematriya.js';
import tanach from '../../../public/tanach/tanach.json';

class Tanach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'heb',
    };
  }

  render() {
    const { sefer, part } = this.props || '';

    const seferText = tanach[sefer] || {};
    const hebrewText = seferText.hebrew || [];
    const englishText = seferText.english || [];

    const toPass = {};
    let Text;

    if (part === 'torah') {
      Text = Torah;
      toPass.sefer = sefer;
      toPass.parasha = this.props.parasha;
      toPass.startChapter = this.props.startChapter;
      toPass.startVerse = this.props.startVerse;
      toPass.endChapter = this.props.endChapter;
      toPass.endVerse = this.props.endVerse;
    } else {
      Text = Nach;
      toPass.perek = this.props.perek;
    }

    return (
      <div>
        <div className='row'>
          <div className='center'>
            <button className='waves-effect waves-light btn tsblue col l2 m3 s12 offset-l2' onClick={() => this.setState({ show: 'heb' })}>Hebrew</button>
            <button className='waves-effect waves-light btn tsblue col l2 m4 s12 offset-l1 offset-m1' onClick={() => this.setState({ show: 'par' })}>Hebrew/English</button>
            <button className='waves-effect waves-light btn tsblue col l2 m3 s12 offset-l1 offset-m1' onClick={() => this.setState({ show: 'eng' })}>English</button>
          </div>
        </div>
        <div className='row'>
          <div className='card'>
            <div className='card-content'>
              <Text
                hebrew={hebrewText}
                english={englishText}
                show={this.state.show}
                {...toPass}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tanach;
