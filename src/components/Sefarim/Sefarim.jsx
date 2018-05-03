import React, { Component } from 'react';
import PerekList from '../PerekList/PerekList.jsx';

class Sefarim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seferName: this.props.match.params.sefer || '',
      selectedSefer: {},
      allPerakim: [],
      activeIndex: 0,
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    const { sefer } = this.props.match.params || '';
    if (!sefer) this.props.history.push('/');
    fetch(`${API_URL}/sefarim/${sefer}`)
      .then(r => r.json())
      .then((data) => {
        this.setState({
          selectedSefer: data,
        });
      })
      .catch(err => console.error(err));
  }

  seferCardClick(i) {
    this.props.history.push(`/perakim/${this.state.seferName}/${i}`);
  }

  render() {
    const { selectedSefer } = this.state || {};
    const seferMeta = selectedSefer.seferMeta || {};
    const seferTeachers = selectedSefer.seferTeachers || [];
    const allPerakim = selectedSefer.allPerakim || [];
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

    return (
      <div>
        <div className='container'>
          <h2>Sefer {seferMeta.book_name_pretty_eng}</h2>
          {seferMeta.book_sponsor && <h3>{seferMeta.book_sponsor}</h3>}
          <div className='center'>
            {teacherChips}
          </div>
          {teacherCards[this.state.activeIndex]}
          <PerekList
            perakim={allPerakim}
            sefer={selectedSefer}
            click={this.seferCardClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Sefarim;
