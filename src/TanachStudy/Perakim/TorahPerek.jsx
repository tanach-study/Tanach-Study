import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tanach from '../../Tanach/Tanach.jsx';
import PartItem from './TorahPartItem.jsx';

class TorahPerek extends Component {
  constructor(props) {
    super(props);
    const { queryParams } = props;
    const { part } = queryParams || {};
    const partNumber = part ? parseInt(part, 10) : 1;
    this.state = {
      partNumber,
      partTitle: '',
    };
    this.selectPart = this._selectPart.bind(this);
  }

  _selectPart(i, title) {
    this.setState({
      partNumber: i,
      partTitle: title,
    });
  }

  render() {
    const { parts, sefer, perek } = this.props;
    const { partNumber, partTitle } = this.state;

    /* eslint react/no-array-index-key: "off" */
    const partItems = parts.map((part, i) => (
      <PartItem
        key={`torah-parts-breakdown-${sefer}-${perek}-${i}`}
        part={part}
        index={i}
        currentPart={partNumber}
        clickHandler={this.selectPart}
      />
    ));

    const firstPart = parts[0] || {};
    const lastPart = parts[parts.length - 1] || {};

    const { start_chapter: sc, start_verse: sv } = firstPart;
    const { end_chapter: ec, end_verse: ev } = lastPart;

    const parasha = {
      id: perek,
      startChapter: sc || null,
      startVerse: sv || null,
      endChapter: ec || null,
      endVerse: ev || null,
    };

    const { section_name: seferN, unit_name: parashaN } = firstPart;
    const { section_title: seferT, unit_title: parashaT } = firstPart;
    const { division: tanachPart } = firstPart;

    const { section_sponsor: sSpon, unit_sponsor: pSpon } = firstPart;
    const seferSponsor = Array.isArray(sSpon) ? sSpon.map(l => <div key={l}>{l}</div>) : sSpon;
    const parashaSponsor = Array.isArray(pSpon) ? pSpon.map(l => <div key={l}>{l}</div>) : pSpon;

    const seferString = `${seferN || 'Sefer'} ${seferT || sefer}`;
    const parashaString = `${parashaN || 'Parashat'} ${parashaT || perek}`;

    const selected = parts[partNumber] || {};
    const { audio_url: url } = selected || {};
    const { host, path } = url || {};

    return (
      <div className='container'>
        <div className='section'>
          <h2 className='center'>{seferString}</h2>
          {seferSponsor && <h4 className='center'>{seferSponsor}</h4>}
          <h3>{parashaString}</h3>
          {parashaSponsor && <h5>{parashaSponsor}</h5>}
          <Link to={`/sefarim/${sefer}`} className='left'>
            <i>Back to {seferString}</i>
          </Link>
        </div>
        <div className='section row'>
          <div className='col l8 m6 s12'>
            {partItems}
          </div>
          <div className='col l4 m6 s12 card small'>
            <p className='card-title'>Now Playing: Part {partNumber}</p>
            <div className='card-content'>
              <p>{partTitle}</p>
            </div>
            <audio src={`${host}${path}`} controls />
          </div>
        </div>
        <div className='divider hide-on-med-and-down' />
        <br className='hide-on-med-and-down' />
        <Tanach
          part={tanachPart}
          sefer={sefer}
          parasha={parasha}
          partsBreakdown={parts}
          selectedPart={partNumber}
        />
      </div>
    );
  }
}

export default TorahPerek;
