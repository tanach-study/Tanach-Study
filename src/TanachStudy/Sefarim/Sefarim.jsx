import React, { Component } from 'react';
import PerekList from '../PerekList/PerekList.jsx';
import Spinner from '../../Spinner/Spinner.jsx';

class Sefarim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seferName: this.props.match.params.sefer || '',
      selectedSefer: {},
      activeIndex: 0,
      haveData: false,
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    const { sefer } = this.props.match.params || '';
    if (!sefer) this.props.history.push('/');
    fetch(`${API_URL}/tanach-study/sefarim/${sefer}`)
      .then(r => r.json())
      .then((data) => {
        this.setState({
          haveData: true,
          selectedSefer: data,
        });
      })
      .catch(err => console.error(err));
  }

  seferCardClick(i) {
    this.props.history.push(`/perakim/${this.state.seferName}/${i}`);
  }

  render() {
    const { selectedSefer } = this.state;
    const seferMeta = selectedSefer.seferMeta || {};
    const seferTeachers = selectedSefer.seferTeachers || [];
    const allPerakim = selectedSefer.allPerakim || [];
    const sponsor = Array.isArray(seferMeta.book_sponsor) ? seferMeta.book_sponsor.map((l, i) => <div key={`sefer-sponsor-${selectedSefer}-${i}`}>{l}</div>) : seferMeta.book_sponsor;
    const teacherChips = seferTeachers.map((teacher, i) => (
      <div key={`${teacher.title}-${teacher.fname}-${teacher.lname}-chip`} className='chip pointer' onClick={(e) => this.setState({activeIndex: i})}>
        {teacher.title} {teacher.fname}{teacher.mname ? ` ${teacher.mname} ` : ' '}{teacher.lname}
      </div>
    ));
    const teacherCards = seferTeachers.map(teacher => (
      <div key={`${teacher.title}-${teacher.fname}-${teacher.lname}-card`} className='card'>
        <div className='card-content'>
          <div className='card-title'>{teacher.title} {teacher.fname}{teacher.mname ? ` ${teacher.mname} ` : ' '}{teacher.lname}</div>
          <p>{teacher.long_bio || teacher.short_bio}</p>
          <a href={`/teachers/${teacher.teacher_id}`}>See {teacher.title} {teacher.lname}&apos;s bio page</a>
        </div>
      </div>
    ));

    if (this.state.haveData) {
      return (
        <div>
          <div className='container'>
            <h2>Sefer {seferMeta.book_name_pretty_eng}</h2>
            {seferMeta.book_sponsor && <h3>{sponsor}</h3>}
            <div className='center'>
              {teacherChips}
            </div>
            {teacherCards[this.state.activeIndex]}
            <PerekList
              perakim={allPerakim}
              sefer={seferMeta}
              click={this.seferCardClick.bind(this)}
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

export default Sefarim;
