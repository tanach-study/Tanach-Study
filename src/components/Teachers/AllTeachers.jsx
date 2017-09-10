import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Teachers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
    }
  }

  updateState(key, value) {
    this.setState({
      [key]: value,
    });
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    fetch('/api/teachers')
    .then(r => r.json())
    .then(data => this.updateState('teachers', data))
    .catch(err => console.log(err));
  }

  render() {
    const mappedTeachers = this.state.teachers.map((teacher, i) => {
      return (
        <div className="col l4 m6 s12" key={i}>
          <Link to={`/teachers/${teacher.teacher_info.teacher_id}`} className="right-align">
            <div className="card medium hoverable full-width black-text">
              <div className="card-image">
                <img src={teacher.teacher_info.image_url} alt=""/>
              </div>
              <div className="card-content">
                <div className="card-title left-align">{teacher.teacher_info.title} {teacher.teacher_info.fname}{teacher.teacher_info.mname ? ` ${teacher.teacher_info.mname} ` : ' '}{teacher.teacher_info.lname}</div>
                <p className="left-align"><i>{teacher.teacher_info.short_bio}</i></p>
              </div>
            </div>
          </Link>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="section center">
          <div className="heading">
            <h2>Our Teachers</h2>
            <p>Below is a list of all of the educators that have taught daily perakim in our program.</p>
          </div>
          <div className="teachers">
            <div className="row">
              {mappedTeachers}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Teachers;
