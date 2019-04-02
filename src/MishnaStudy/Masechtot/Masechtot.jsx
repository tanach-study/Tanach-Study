import React, { Component } from 'react';
import PerekList from '../PerekList/PerekList.jsx';
import Spinner from '../../Spinner/Spinner.jsx';

class Masechtot extends Component {
  constructor(props) {
    super(props);
    const { match } = props || {};
    const { params } = match || {};
    const { seder } = params || '';
    this.state = {
      sederName: seder,
      selectedSeder: {},
      activeIndex: 0,
      haveData: false,
    };
    this._seferCardClick = this.seferCardClick.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    const { match } = this.props || {};
    const { params } = match || {};
    const { seder } = params || '';
    if (!seder) {
      const { history } = this.props;
      const { push } = history;
      push('/');
    }
    fetch(`${API_URL}/mishna-study/${seder}`)
      .then(r => r.json())
      .then((data) => {
        this.setState({
          haveData: true,
          selectedSeder: data,
        });
      })
      .catch(err => console.error(err));
  }

  seferCardClick(i) {
    const { history } = this.props;
    const { push } = history;
    const { sederName } = this.state;
    push(`/mishna-study/${sederName}/${i}`);
  }

  render() {
    const { selectedSeder } = this.state;
    const { sederMeta } = selectedSeder || {};
    const { sederTeachers } = selectedSeder || [];
    const { allPerakim } = selectedSeder || [];
    const { book_sponsor: bookSponsor } = sederMeta || '';
    const sponsor = Array.isArray(bookSponsor) ? bookSponsor.map(l => <div key={`sefer-sponsor-${selectedSeder}-${l}`}>{l}</div>) : bookSponsor;
    const teacherChips = sederTeachers.map((teacher, i) => {
      const { title, fname, mname, lname } = teacher;
      return (
        <div key={`${title}-${fname}-${lname}-chip`} className='chip pointer' onClick={e => this.setState({ activeIndex: i })}>
          {title} {fname}{mname ? ` ${mname} ` : ' '}{lname}
        </div>
      );
    });
    const teacherCards = sederTeachers.map((teacher) => {
      const { title, fname, mname, lname,
        long_bio: longBio,
        short_bio: shortBio,
        teacher_id: teacherID } = teacher;
      return (
        <div key={`${title}-${fname}-${lname}-card`} className='card'>
          <div className='card-content'>
            <div className='card-title'>{title} {fname}{mname ? ` ${mname} ` : ' '}{lname}</div>
            <p>{longBio || shortBio}</p>
            <a href={`/teachers/${teacherID}`}>See {title} {lname}&apos;s bio page</a>
          </div>
        </div>
      );
    });

    const { haveData, activeIndex } = this.state;

    if (haveData) {
      return (
        <div>
          <div className='container'>
            <h2>Sefer {sederMeta.book_name_pretty_eng}</h2>
            {sederMeta.book_sponsor && <h3>{sponsor}</h3>}
            <div className='center'>
              {teacherChips}
            </div>
            {teacherCards[activeIndex]}
            <PerekList
              perakim={allPerakim}
              sefer={sederMeta}
              click={this._seferCardClick}
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
