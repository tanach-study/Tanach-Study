import React, { Component } from 'react';
import PerekList from '../PerekList/PerekList.jsx';

class Sefarim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seferName: this.props.match.params.sefer || '',
      selectedSefer: {},
      allTeachers: [],
      allPerakim: [],
      teacherCards: [],
      activeIndex: 0,
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    const sefer = this.state.seferName;
    if (!sefer) this.props.history.push('/');
    fetch(`${API_URL}/sefarim/${sefer}`)
      .then(r => r.json())
      .then((data) => {
        const seferObj = data.seferMeta;
        const teacherArr = data.seferTeachers;
        const perakimArr = data.allPerakim;
        this.setState({
          selectedSefer: seferObj,
          allTeachers: teacherArr,
          allPerakim: perakimArr,
        });
        const teacherCards = teacherArr.map(teacher => (
          <div key={`${teacher.title}-${teacher.fname}-${teacher.lname}-card`} className='card'>
            <div className='card-content'>
              <div className='card-title'>{teacher.title} {teacher.fname}{teacher.mname ? ` ${teacher.mname} ` : ' '}{teacher.lname}</div>
              <p>{teacher.long_bio || teacher.short_bio}</p>
              <a href={`/teachers/${teacher.teacher_id}`}>See {teacher.title} {teacher.lname}&apos;s bio page</a>
            </div>
          </div>
        ));
        this.setState({ teacherCards });
      })
      .catch(err => console.error(err));
  }

  seferCardClick(i) {
    this.props.history.push(`/perakim/${this.state.seferName}/${i}`);
  }

  render() {
    const teachers = this.state.allTeachers || [];
    const teacherChips = teachers.map((teacher, i) => (
      <div key={`${teacher.title}-${teacher.fname}-${teacher.lname}-chip`} className='chip pointer' onClick={(e) => this.setState({activeIndex: i})}>
        {teacher.title} {teacher.fname}{teacher.mname ? ` ${teacher.mname} ` : ' '}{teacher.lname}
      </div>
    ));

    return (
      <div>
        <div className='container'>
          <h2>Sefer {this.state.seferName.charAt(0).toUpperCase() + this.state.seferName.slice(1)}</h2>
          {this.state.selectedSefer.book_sponsor && <h3>{this.state.selectedSefer.book_sponsor}</h3>}
          <div className='center'>
            {teacherChips}
          </div>
          {this.state.teacherCards[this.state.activeIndex]}
          <PerekList
            perakim={this.state.allPerakim}
            sefer={this.state.selectedSefer || {}}
            click={this.seferCardClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Sefarim;
