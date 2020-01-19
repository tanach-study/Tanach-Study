import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../../../layouts/main.jsx';
import PerekList from './PerekList/PerekList.jsx';

class Masechtot extends Component {
  constructor(props) {
    super(props);
    const { pageContext } = props;
    const { data, seder, masechet } = pageContext;
    const perakim = new Set();
    const teacherStrings = new Set();
    const teachers = [];
    data.forEach((record) => {
      perakim.add(record.unit);
      const { teacher_title: title } = record;
      const { teacher_fname: fname } = record;
      const { teacher_mname: mname } = record;
      const { teacher_lname: lname } = record;
      const teacherString = `${title}-${fname}-${mname}-${lname}`;
      if (!teacherStrings.has(teacherString)) {
        teacherStrings.add(teacherString);
        const { teacher_short_bio: shortBio } = record;
        const { teacher_long_bio: longBio } = record;
        const { teacher_image_url: image } = record;
        teachers.push({
          title,
          fname,
          mname,
          lname,
          shortBio,
          longBio,
          image,
        });
      }
    });
    this.state = {
      activeIndex: 0,
      sederName: seder,
      masechetName: masechet,
      perakim: Array.from(perakim),
      masechetTitle: data[0].section_title,
      masechetSponsor: data[0].section_sponsor,
      divisionSponsor: data[0].division_sponsor,
      teachers,
    };
  }

  render() {
    const { perakim, teachers } = this.state;
    const { location, pageContext } = this.props;
    const { nextMasechet, prevMasechet } = pageContext || {};
    const teacherChips = teachers.map((teacher, i) => {
      const { title, fname, mname, lname } = teacher;
      return (
        <div
          key={`${title}-${fname}-${lname}-chip`}
          className='chip pointer'
          onClick={e => this.setState({ activeIndex: i })}
        >
          {title} {fname}{mname ? ` ${mname} ` : ' '}{lname}
        </div>
      );
    });
    const teacherCards = teachers.map((teacher) => {
      const { title, fname, mname, lname, longBio, shortBio } = teacher;
      const raw = mname ? `${title}-${fname}-${mname}-${lname}` : `${title}-${fname}-${lname}`;
      const url = raw.toLowerCase().replace('.', '').replace(' ', '-');
      return (
        <div key={`${title}-${fname}-${lname}-card`} className='card'>
          <div className='card-content'>
            <div className='card-title'>{title} {fname}{mname ? ` ${mname} ` : ' '}{lname}</div>
            <p>{longBio || shortBio}</p>
            <a href={`/teachers/${url}`}>Read more about {title} {lname}</a>
          </div>
        </div>
      );
    });
    const { masechetTitle,
      masechetSponsor,
      divisionSponsor,
      sederName,
      masechetName,
      activeIndex } = this.state;
    const sponsor = Array.isArray(masechetSponsor)
      ? masechetSponsor.map(l => <div key={l}>{l}</div>)
      : masechetSponsor;
    const dSponsor = Array.isArray(divisionSponsor)
      ? divisionSponsor.map(l => <div key={l}>{l}</div>)
      : divisionSponsor;
    return (
      <Layout location={location}>
        <div className='container'>
          {divisionSponsor && <h3 className='center'>{dSponsor}</h3>}
          <h4>Masechet {masechetTitle}</h4>
          {masechetSponsor && <h5>{sponsor}</h5>}
          <div className='center'>
            {teacherChips}
          </div>
          {teacherCards[activeIndex]}
          <PerekList
            perakim={perakim}
            seder={sederName}
            masechet={masechetName}
          />
          <div className='section row'>
            <div className='col l6 m6 s6'>
              {prevMasechet && <Link to={prevMasechet}>Previous Masechet</Link>}
            </div>
            <div className='col l6 m6 s6 right-align'>
              {nextMasechet && <Link to={nextMasechet}>Next Masechet</Link>}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Masechtot;
