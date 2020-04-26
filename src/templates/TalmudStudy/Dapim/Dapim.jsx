import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../../layouts/main.jsx';
// import Talumd from '../../../components/Talumd/Talumd.jsx';
import MediaPlayer from '../../../components/MediaPlayer/MediaPlayer.jsx';

function getSefariaLink(masechet, daf) {
  const base = 'https://www.sefaria.org';
  let path = '';
  switch (masechet) {
    case 'berachot':
      path = `Berakhot.${daf}a?lang=bi`;
      break;
    case 'shabbat':
      path = `Shabbat.${daf}a?lang=bi`;
      break;
    case 'eruvin':
      path = `Eruvin.${daf}a?lang=bi`;
      break;
    default:
      path = 'texts/Talmud';
      break;
  }
  return `${base}/${path}`;
}

function Dapim(props) {
  const { location, pageContext } = props;
  const { data: dafObj, nextDaf, prevDaf } = pageContext;
  const { segment_name: sederN, section_name: masechetN, unit_name: dafN } = dafObj;
  const { segment_title: sederT, section_title: masechetT, unit_title: dafT } = dafObj;
  const { segment: seder, section: masechet, unit: daf } = dafObj;

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
  const pageTitle = `${sederString} ${masechetString} Daf ${daf}`;

  return (
    <Layout location={location}>
      <div className='container'>
        {divisionSponsor && <h2 className='center'>{dSponsor}</h2>}
        <h3>{pageTitle}</h3>
        {sSpon && <h4>{sponsor}</h4>}
        <section className='row'>
          <div className='col l6 m6 s6'>
            {prevDaf && <Link to={prevDaf}>Previous Daf</Link>}
          </div>
          <div className='col l6 m6 s6 right-align'>
            {nextDaf && <Link to={nextDaf}>Next Daf</Link>}
          </div>
        </section>
        <section className='row'>
          <MediaPlayer
            type='audio'
            url={url}
            name={dafN}
            title={dafT}
            part={daf}
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
          <div className='l6 m12 s12 offset-l3 center'>
            <a href={getSefariaLink(masechet, daf)} target='blank'>View the text of this daf on Sefaria</a>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Dapim;
