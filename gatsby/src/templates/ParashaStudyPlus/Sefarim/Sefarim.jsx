import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../../../layouts/main.jsx';
import SeferList from './SeferList/SeferList.jsx';
import MediaPlayer from '../../../components/MediaPlayer/MediaPlayer.jsx';

class Sefarim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentParasha: 0,
    };
    this.selectParasha = this.selectParasha.bind(this);
  }

  selectParasha(i) {
    this.setState({
      currentParasha: i,
    });
  }

  render() {
    const { currentParasha } = this.state;
    const { location, pageContext } = this.props;
    const { data: parashot, nextPerek, prevPerek } = pageContext || {};
    const base = parashot[0] || {};
    const { section_name: seferN } = base;
    const { segment_title: trackT, section_title: seferT } = base;
    const { segment: track, section: sefer } = base;

    const { segment_sponsor: sSpon } = base;
    const sponsor = Array.isArray(sSpon) ? sSpon.map((l) => <div key={l}>{l}</div>) : sSpon;
    const parashaObj = parashot[currentParasha] || {};
    const { unit_name: parashaN, unit_title: parashaT, unit: parasha } = parashaObj;
    const { audio_url: audioURL, video_url: videoURL } = parashaObj;

    const hasVideo = !!videoURL;

    const { teacher_title: teacherT,
      teacher_fname: teacherFN,
      teacher_mname: teacherMN,
      teacher_lname: teacherLN,
      teacher_short_bio: teacherBio,
      teacher_image_url: teacherImage } = parashaObj;

    const trackString = `${trackT || track}`;
    const seferString = `${seferN || 'Sefer'} ${seferT || sefer}`;
    const pageTitle = `${trackString}: ${seferString}`;

    return (
      <Layout location={location}>
        <div className='container'>
          <h3>{pageTitle}</h3>
          {sSpon && <h4>{sponsor}</h4>}
          <div className='section row'>
            <div className='col l6 m6 s6'>
              {prevPerek && <Link to={prevPerek}>Previous Perek</Link>}
            </div>
            <div className='col l6 m6 s6 right-align'>
              {nextPerek && <Link to={nextPerek}>Next Perek</Link>}
            </div>
          </div>
          <section className='row'>
            <SeferList
              parashot={parashot}
              track={track}
              click={this.selectParasha}
              selected={currentParasha}
              className='col l6 m6 s12 collection'
            />
            <MediaPlayer
              type={hasVideo ? 'combo' : 'audio'}
              url={audioURL}
              audioURL={audioURL}
              videoURL={videoURL}
              name={parashaT}
              part=''
              title={`Parashat ${parashaT}`}
              teacherTitle={teacherT}
              teacherFirst={teacherFN}
              teacherMiddle={teacherMN}
              teacherLast={teacherLN}
              teacherImage={teacherImage}
              teacherBio={teacherBio}
              className='col l6 m6 s12'
            />
          </section>
        </div>
      </Layout>
    );
  }
}

export default Sefarim;
