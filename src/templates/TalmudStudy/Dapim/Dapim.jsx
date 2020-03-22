import React, { useState } from 'react';
import { Link } from 'gatsby';

import Layout from '../../../layouts/main.jsx';
// import Talumd from '../../../components/Talumd/Talumd.jsx';
import MediaPlayer from '../../../components/MediaPlayer/MediaPlayer.jsx';

function Dapim(props) {
  const { location, pageContext } = props;
  const { data: dafObj } = pageContext;
  const { nextPerek, prevPerek } = pageContext || {};
  const { segment_name: sederN, section_name: masechetN, unit_name: dafN, part_name: amudN } = dafObj;
  const { segment_title: sederT, section_title: masechetT, unit_title: dafT, part_title: amudT } = dafObj;
  const { segment: seder, section: masechet, unit: daf, amud: amud } = dafObj;

  const { section_sponsor: sSpon, division_sponsor: divisionSponsor } = dafObj;
  const sponsor = Array.isArray(sSpon) ? sSpon.map(l => <div key={l}>{l}</div>) : sSpon;
  const dSponsor = Array.isArray(divisionSponsor)
    ? divisionSponsor.map(l => <div key={l}>{l}</div>)
    : divisionSponsor;
  const { audio_url: url } = dafObj;

  const { teacher_title: teacherT,
    teacher_fname: teacherFN,
    teacher_mname: teacherMN,
    teacher_lname: teacherLN,
    teacher_short_bio: teacherBio,
    teacher_image_url: teacherImage } = dafObj;

  const sederString = `${sederN || 'Seder'} ${sederT || seder}`;
  const masechetString = `${masechetN || 'Masechet'} ${masechetT || masechet}`;
  const dafString = `Daf ${daf}${amud}`;
  const pageTitle = `${sederString} ${masechetString} ${dafString}`;

  return (
    <Layout location={location}>
      <div className='container'>
        {divisionSponsor && <h2 className='center'>{dSponsor}</h2>}
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
          <MediaPlayer
            type='audio'
            url={url}
            name={dafN}
            title={amudT}
            part={amud}
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

export default Dapim;
