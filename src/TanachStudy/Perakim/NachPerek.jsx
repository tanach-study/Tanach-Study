import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import TeacherCard from './TeacherCard.jsx';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer.jsx';
import TeamimCard from './TeamimCard.jsx';
import Tanach from '../../Tanach/Tanach.jsx';

class NachPerek extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numParts: 1,
      partIndex: null,
    };
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

  render() {
    const { numParts, partIndex } = this.state;
    // const { sefer, perek, response } = this.props;
    const { response } = this.props;
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
    const seferSponsor = Array.isArray(sSpon) ? sSpon.map(l => <div key={l}>{l}</div>) : sSpon;
    const perekSponsor = Array.isArray(pSpon) ? pSpon.map(l => <div key={l}>{l}</div>) : pSpon;

    const { audio_url: url, teamim } = selected;

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
        <div className='row'>
          <h2>{pageTitle}</h2>
          <Link to={`/sefarim/${sefer}`} className='left'>
            <i>Back to {seferString}</i>
          </Link>
          <div className='section' />
          <AudioPlayer
            name={perekN}
            title={perekT}
            part={perek}
            teacherTitle={teacherT}
            teacherFirst={teacherFN}
            teacherMiddle={teacherMN}
            teacherLast={teacherLN}
            teacherImage={teacherImage}
            teacherBio={teacherBio}
            url={url}
            className='col l6 m6 s6'
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
