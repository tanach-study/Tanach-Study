import React, { Component } from 'react';
import PerekList from '../PerekList/PerekList.jsx';
import Spinner from '../../Spinner/Spinner.jsx';

class Masechtot extends Component {
  constructor(props) {
    super(props);
    const { match } = props || {};
    const { params } = match || {};
    const { seder } = params || '';
    const { masechet } = params || '';
    this.state = {
      sederName: seder,
      masechetName: masechet,
      masechetTitle: '',
      masechetSponsor: '',
      perakim: [],
      teachers: [],
      activeIndex: 0,
      haveData: false,
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    const { match } = this.props || {};
    const { params } = match || {};
    const { seder } = params || '';
    const { masechet } = params || '';
    if (!seder) {
      const { history } = this.props;
      const { push } = history;
      push('/');
    }
    fetch(`${API_URL}/mishna-study/masechet/${seder}/${masechet}`)
      .then(r => r.json())
      .then((data) => {
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
        this.setState({
          haveData: true,
          perakim: [...perakim].sort(),
          masechetTitle: data[0].section_title,
          masechetSponsor: data[0].section_sponsor,
          teachers,
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { perakim, teachers } = this.state;
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

    const { haveData, activeIndex } = this.state;

    if (haveData) {
      const { masechetTitle, masechetSponsor, sederName, masechetName } = this.state;
      const sponsor = Array.isArray(masechetSponsor) ? masechetSponsor.map(l => <div key={l}>{l}</div>) : masechetSponsor;
      return (
        <div>
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
        </div>
      );
    }
    return (
      <div className='row center'>
        <div className='col l12 m12 s12'>
          <Spinner />
        </div>
      </div>
    );
  }
}

export default Masechtot;
