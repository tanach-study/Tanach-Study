import React, { Component } from 'react';

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
      teachers,
    };
  }

  render() {
    const { perakim, teachers } = this.state;
    const { location } = this.props;
    const teacherChips = teachers.map((teacher, i) => {
      const { title, fname, mname, lname } = teacher;
      return (
        <div key={`${title}-${fname}-${lname}-chip`} className='chip pointer' onClick={e => this.setState({ activeIndex: i })}>
          {title} {fname}{mname ? ` ${mname} ` : ' '}{lname}
        </div>
      );
    });
    const teacherCards = teachers.map((teacher) => {
      const { title, fname, mname, lname, longBio, shortBio } = teacher;
      const url = mname ? `${fname}-${mname}-${lname}` : `${fname}-${lname}`;
      return (
        <div key={`${title}-${fname}-${lname}-card`} className='card'>
          <div className='card-content'>
            <div className='card-title'>{title} {fname}{mname ? ` ${mname} ` : ' '}{lname}</div>
            <p>{longBio || shortBio}</p>
            <a href={`/teachers/${url}`}>See {title} {lname}&apos;s bio page</a>
          </div>
        </div>
      );
    });
    const { masechetTitle, masechetSponsor, sederName, masechetName, activeIndex } = this.state;
    const sponsor = Array.isArray(masechetSponsor) ? masechetSponsor.map(l => <div key={l}>{l}</div>) : masechetSponsor;
    return (
      <Layout location={location}>
        <div className='container'>
          <h2>Masechet {masechetTitle}</h2>
          {masechetSponsor && <h3>{sponsor}</h3>}
          <div className='center'>
            {teacherChips}
          </div>
          {teacherCards[activeIndex]}
          <PerekList
            perakim={perakim}
            seder={sederName}
            masechet={masechetName}
          />
        </div>
      </Layout>
    );
  }
}

export default Masechtot;
