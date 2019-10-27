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
      avSelector: 'audio',
    };
    this.selectParasha = this.selectParasha.bind(this);
    this.toggleAudioVideo = this.toggleAudioVideo.bind(this);
  }

  componentDidMount() {
    const query = this.getQueryParams();
    const { part } = query;
    const currentParasha = part ? parseInt(part, 10) - 1 : 0;
    const { currentParasha: old } = this.state;
    if (currentParasha !== old) {
      this.setState({
        currentParasha,
      });
    }
  }

  getQueryParams() {
    const { location } = this.props;
    const queryString = location.search;
    if (queryString) {
      const pairs = queryString.slice(1).split('&');
      const params = {};
      for (let i = 0; i < pairs.length; i++) {
        const kv = pairs[i].split('=');
        params[kv[0]] = kv[1];
      }
      return params;
    }
    return {};
  }

  selectParasha(i) {
    this.setState({
      currentParasha: i,
    });
  }

  toggleAudioVideo(selection) {
    this.setState({
      avSelector: selection,
    });
  }

  render() {
    const { currentParasha, avSelector } = this.state;
    const { location, pageContext } = this.props;
    const { data: parashot, nextPerek, prevPerek } = pageContext || {};
    const base = parashot[0] || {};
    const { section_name: seferN } = base;
    const { segment_title: trackT, section_title: seferT } = base;
    const { segment: track, section: sefer } = base;

    const { section_sponsor: sSpon } = base;
    const sponsor = Array.isArray(sSpon) ? sSpon.map(l => <div key={l}>{l}</div>) : sSpon;
    const parashaObj = parashot[currentParasha] || {};
    const { audio_url: audioURL, unit_name: parashaN, unit_title: parashaT, unit: parasha } = parashaObj;
    const { video_url: videoURL } = parashaObj;
    console.log(parashaObj)
    console.log(audioURL, videoURL)

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
          <h2>{pageTitle}</h2>
          {sSpon && <h3>{sponsor}</h3>}
          <div className='section row'>
            <div className='col l6 m6 s6'>
              {prevPerek && <Link to={prevPerek}>Previous Perek</Link>}
            </div>
            <div className='col l6 m6 s6 right-align'>
              {nextPerek && <Link to={nextPerek}>Next Perek</Link>}
            </div>
          </div>
          <ul className='tabs'>
            <li className={avSelector === 'audio' ? 'tab active' : 'tab'}>
              <button onClick={() => this.toggleAudioVideo('audio')}>Listen to Audio</button>
            </li>
            <li className={avSelector === 'video' ? 'tab active' : 'tab'}>
              <button onClick={() => this.toggleAudioVideo('video')}>Watch Video</button>
            </li>
          </ul>
          <section className='row'>
            <SeferList
              parashot={parashot}
              track={track}
              click={this.selectParasha}
              selected={currentParasha}
              className='col l6 m6 s12 collection'
            />
            {avSelector === 'video' ? (
              <MediaPlayer
                type='video'
                url={videoURL}
                name={parashaT}
                title={`Parashat ${parashaT}`}
                teacherTitle={teacherT}
                teacherFirst={teacherFN}
                teacherMiddle={teacherMN}
                teacherLast={teacherLN}
                teacherImage={teacherImage}
                teacherBio={teacherBio}
                className='col l6 m6 s12'
              />
            ) : (
              <MediaPlayer
                type='audio'
                url={audioURL}
                name={parashaT}
                title={`Parashat ${parashaT}`}
                teacherTitle={teacherT}
                teacherFirst={teacherFN}
                teacherMiddle={teacherMN}
                teacherLast={teacherLN}
                teacherImage={teacherImage}
                teacherBio={teacherBio}
                className='col l6 m6 s12'
              />
            )}
            <MediaPlayer
              type='combo'
              audioURL={audioURL}
              videoURL={videoURL}
              name={parashaT}
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
