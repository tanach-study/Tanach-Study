import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../../../layouts/main.jsx';
import MishnaList from './MishnaList/MishnaList.jsx';
import Mishna from '../../../components/Mishna/Mishna.jsx';
import MediaPlayer from '../../../components/MediaPlayer/MediaPlayer.jsx';

class Perakim extends Component {
  constructor(props) {
    super(props);
    const { pageContext } = props;
    const { data } = pageContext;
    this.state = {
      mishnayot: data || [],
      currentMishna: 0,
    };
    this.selectMishna = this.selectMishna.bind(this);
  }

  componentDidMount() {
    const query = this.getQueryParams();
    const { part } = query;
    const currentMishna = part ? parseInt(part, 10) - 1 : 0;
    const { currentMishna: old } = this.state;
    if (currentMishna !== old) {
      this.setState({
        currentMishna,
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

  selectMishna(i) {
    this.setState({
      currentMishna: i,
    });
  }

  render() {
    const { mishnayot, currentMishna } = this.state;
    const { location, pageContext } = this.props;
    const { nextPerek, prevPerek } = pageContext || {};
    const base = mishnayot[0] || {};
    const { segment_name: sederN, section_name: masechetN, unit_name: perekN } = base;
    const { segment_title: sederT, section_title: masechetT, unit_title: perekT } = base;
    const { segment: seder, section: masechet, unit: perek } = base;

    const { section_sponsor: sSpon } = base;
    const sponsor = Array.isArray(sSpon) ? sSpon.map(l => <div key={l}>{l}</div>) : sSpon;
    const mishna = mishnayot[currentMishna] || {};
    const { audio_url: url } = mishna;

    const { part_name: partN, part_title: partT, part } = mishna;
    const { teacher_title: teacherT,
      teacher_fname: teacherFN,
      teacher_mname: teacherMN,
      teacher_lname: teacherLN,
      teacher_short_bio: teacherBio,
      teacher_image_url: teacherImage } = mishna;
    let pageTitle = null;
    if (seder === 'introduction') {
      pageTitle = 'HaRambam\'s Introduction';
    } else {
      const sederString = `${sederN || 'Seder'} ${sederT || seder}`;
      const masechetString = `${masechetN || 'Masechet'} ${masechetT || masechet}`;
      const perekString = `${perekN || 'Perek'} ${perekT || perek}`;
      pageTitle = `${sederString} ${masechetString} ${perekString}`;
    }

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
          <section className='row'>
            <MishnaList
              mishnayot={mishnayot}
              seder={seder}
              masechet={masechet}
              perek={perek}
              click={this.selectMishna}
              selected={currentMishna}
              className='col l6 m6 s12 collection'
            />
            <MediaPlayer
              type='audio'
              url={url}
              name={partN}
              title={partT}
              part={part}
              teacherTitle={teacherT}
              teacherFirst={teacherFN}
              teacherMiddle={teacherMN}
              teacherLast={teacherLN}
              teacherImage={teacherImage}
              teacherBio={teacherBio}
              className='col l6 m6 s12'
            />
          </section>
          <section className='row'>
            <Mishna
              seder={seder}
              masechet={masechet}
              perek={perek}
            />
          </section>
        </div>
      </Layout>
    );
  }
}

export default Perakim;
