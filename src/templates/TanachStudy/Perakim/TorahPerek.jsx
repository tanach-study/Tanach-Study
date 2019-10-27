import React, { Component } from 'react';
import { Link } from 'gatsby';
import Tanach from '../../../components/Tanach/Tanach.jsx';
import PartItem from './TorahPartItem.jsx';
import AudioPlayer from '../../../components/MediaPlayer/AudioPlayer/AudioPlayer.jsx';

class TorahPerek extends Component {
  constructor(props) {
    super(props);
    const { queryParams } = props;
    const { part } = queryParams || {};
    // partNumber is one-based, not zero based
    const partNumber = part ? parseInt(part, 10) : 1;
    this.state = {
      partNumber,
    };
    this.selectPart = this._selectPart.bind(this);
  }

  _selectPart(i, title) {
    this.setState({
      partNumber: i,
    });
  }

  render() {
    const { parts, sefer, perek } = this.props;
    const { partNumber } = this.state;

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

    // get the first and last part to be used to determine parasha length
    const firstPart = parts[0] || {};
    const lastPart = parts[parts.length - 1] || {};

    // get the start chapter/verse from the first part, and end chapter/verse from the last part
    const { start_chapter: sc, start_verse: sv } = firstPart;
    const { end_chapter: ec, end_verse: ev } = lastPart;

    // create a new object to be passed to the Tanach component
    const parasha = {
      id: perek,
      startChapter: sc || null,
      startVerse: sv || null,
      endChapter: ec || null,
      endVerse: ev || null,
    };

    // get basic info from the first part object - these data are the same for all parts
    const { section_name: seferN, unit_name: parashaN } = firstPart;
    const { section_title: seferT, unit_title: parashaT } = firstPart;
    const { division: tanachPart } = firstPart;

    const { section_sponsor: sSpon, unit_sponsor: pSpon } = firstPart;
    const seferSponsor = Array.isArray(sSpon) ? sSpon.map(l => <div key={l}>{l}</div>) : sSpon;
    const parashaSponsor = Array.isArray(pSpon) ? pSpon.map(l => <div key={l}>{l}</div>) : pSpon;

    // create some strings with the data
    const seferString = `${seferN || 'Sefer'} ${seferT || sefer}`;
    const parashaString = `${parashaN || 'Parashat'} ${parashaT || perek}`;

    // get the currently selected part - must subtract 1 since partNumber is not zero-based
    const selected = parts[partNumber - 1] || {};
    const { audio_url: url } = selected || {};

    const { part_name: name, part_title: title, part } = selected;

    const { teacher_title: teacherT,
      teacher_fname: teacherFN,
      teacher_mname: teacherMN,
      teacher_lname: teacherLN,
      teacher_short_bio: teacherBio,
      teacher_image_url: teacherImage } = selected;

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
          <div className='col l6 m6 s12'>
            {partItems}
          </div>
          <AudioPlayer
            url={url}
            className='col l6 m6 s12'
            name={name}
            title={title}
            part={part}
            teacherTitle={teacherT}
            teacherFirst={teacherFN}
            teacherMiddle={teacherMN}
            teacherLast={teacherLN}
            teacherImage={teacherImage}
            teacherBio={teacherBio}
          />
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
