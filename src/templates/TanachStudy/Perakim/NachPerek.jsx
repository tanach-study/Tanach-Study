import React, { Component } from 'react';
import { Link } from 'gatsby';

import AudioPlayer from '../../../components/MediaPlayer/AudioPlayer/AudioPlayer.jsx';
import TeamimCard from './TeamimCard.jsx';
import Tanach from '../../../components/Tanach/Tanach.jsx';

import styles from './NachPerek.module.css';

import { ProgramContext } from '../../../app-context.js';

class NachPerek extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numParts: 1,
      partIndex: null,
    };
    this.selectPart = this._selectPartByZeroBasedIndex.bind(this);
  }

  componentDidMount() {
    const { response } = this.props;
    if (response.length > 1) {
      this.setState({
        numParts: response.length,
        partIndex: 0,
      });
    }
  }

  _selectPartByZeroBasedIndex(i) {
    this.setState({
      partIndex: i,
    });
  }

  render() {
    const { numParts, partIndex } = this.state;
    // const { sefer, perek, response } = this.props;
    const { response, nextPerek, prevPerek } = this.props;
    // response is always an array; if we have many parts, get the currently selected part
    const selected = numParts > 1 ? response[partIndex] : response[0];

    const { section_name: seferN, unit_name: perekN } = selected;
    const { section_title: seferT, unit_title: perekT } = selected;
    const { division: tanachPart, section: sefer, unit: perek } = selected;
    const { teacher_title: teacherT,
      teacher_fname: teacherFN,
      teacher_mname: teacherMN,
      teacher_lname: teacherLN,
      teacher_short_bio: teacherBio,
      teacher_image_url: teacherImage } = selected;

    const { section_sponsor: sSpon, unit_sponsor: pSpon } = selected;
    // eslint-disable-next-line no-unused-vars
    const seferSponsor = Array.isArray(sSpon) ? sSpon.map(l => <div key={l}>{l}</div>) : sSpon;
    // eslint-disable-next-line no-unused-vars
    const perekSponsor = Array.isArray(pSpon) ? pSpon.map(l => <div key={l}>{l}</div>) : pSpon;

    const { audio_url: url, teamim } = selected;

    let tabs = null;
    if (numParts > 1) {
      tabs = response.map((p, i) => (
        <ProgramContext.Consumer>
          {theme => (
            <li className='tab' key={`${perekN} ${p.part}`}>
              <div
                onClick={() => this.selectPart(i)}
                className={`${partIndex === i ? styles['active-part'] : ''} tsblue-text`}
              >
                {`Part ${p.part.toUpperCase()}`}
              </div>
            </li>
          )}
        </ProgramContext.Consumer>
      ));
    }

    let pageTitle = null;
    let seferString = null;
    if (perek === 0) {
      seferString = `${seferN || 'Sefer'} ${seferT || sefer}`;
      pageTitle = `Introduction to ${seferString}`;
    } else {
      seferString = `${seferN || 'Sefer'} ${seferT || sefer}`;
      const perekString = `${perekN || 'Perek'} ${perek}`;
      pageTitle = `${seferString} ${perekString}`;
    }

    return (
      <div className='container'>
        <h2>{pageTitle}</h2>
        <div className='section row'>
          <Link to={`/tanach-study/sefarim/${sefer}`} className='left'>
            <i>Back to {seferString}</i>
          </Link>
        </div>
        <div className='row'>
          <div className='col l6 m6 s6 left-align'>
            {prevPerek && <Link to={prevPerek}>Previous Perek</Link>}
          </div>
          <div className='col l6 m6 s6 right-align'>
            {nextPerek && <Link to={nextPerek}>Next Perek</Link>}
          </div>
        </div>
        <div className='row'>
          <AudioPlayer
            name='Perek'
            title={perekT}
            part={perek}
            teacherTitle={teacherT}
            teacherFirst={teacherFN}
            teacherMiddle={teacherMN}
            teacherLast={teacherLN}
            teacherImage={teacherImage}
            teacherBio={teacherBio}
            url={url}
            tabs={tabs}
            className='col l6 m12 s12'
          />
          <TeamimCard
            teamim={teamim}
          />
        </div>
        <div className='divider hide-on-med-and-down' />
        <br className='hide-on-med-and-down' />
        <Tanach
          part={tanachPart}
          sefer={sefer}
          perek={perek}
        />
      </div>
    );
  }
}

export default NachPerek;
