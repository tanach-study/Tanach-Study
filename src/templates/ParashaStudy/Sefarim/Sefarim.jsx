import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../../../layouts/main.jsx';
import PerekList from '../PerekList/PerekList.jsx';

class Sefarim extends Component {
  constructor(props) {
    super(props);
    const { pageContext } = props || {};
    const { data, sefer } = pageContext || {};
    const units = new Set();
    const teacherStrings = new Set();
    const teachers = [];
    data.forEach((record) => {
      units.add(record.unit);
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
        teachers.push({ title, fname, mname, lname, shortBio, longBio, image });
      }
    });
    this.state = {
      seferName: sefer,
      units: Array.from(units),
      seferTitle: data[0].section_title,
      seferSponsor: data[0].section_sponsor,
      part: data[0].division,
      activeIndex: 0,
      teachers,
    };
  }

  render() {
    const { activeIndex } = this.state;

    const { units, teachers, seferTitle, seferSponsor, seferName, part } = this.state;

    const { location, pageContext } = this.props;

    const { nextSefer, prevSefer } = pageContext || {};

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
      const url = mname ? `${fname}-${mname}-${lname}` : `${fname}-${lname}`;
      return (
        <div key={`${title}-${fname}-${lname}-card`} className='card'>
          <div className='card-content'>
            <div className='card-title'>{title} {fname}{mname ? ` ${mname} ` : ' '}{lname}</div>
            <p>{longBio || shortBio}</p>
            <Link to={`/teachers/${url}`}>See {title} {lname}&apos;s bio page</Link>
          </div>
        </div>
      );
    });

    const sponsor = Array.isArray(seferSponsor)
      ? seferSponsor.map(l => <div key={l}>{l}</div>)
      : seferSponsor;

    return (
      <Layout location={location}>
        <div className='container'>
          <h2>Sefer {seferTitle}</h2>
          {seferSponsor && <h3>{sponsor}</h3>}
          <div className='row'>
            {prevSefer.name && <Link to={prevSefer.url}>{prevSefer.name}</Link>}
            {nextSefer.name && <Link to={nextSefer.url}>{nextSefer.name}</Link>}
          </div>
          <div className='center'>
            {teacherChips}
          </div>
          {teacherCards[activeIndex]}
          <PerekList
            units={units}
            sefer={seferName}
            part={part}
          />
        </div>
      </Layout>
    );
  }
}

export default Sefarim;
