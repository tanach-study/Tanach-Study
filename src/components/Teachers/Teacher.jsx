import React, { Component } from 'react';

class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacherID: this.props.params.id,
      teacher: {},
    };
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
    fetch(`/api/teachers/${this.state.teacherID}`)
    .then(r => r.json())
    .then(data => this.updateState('teacher', data))
    .catch(err => console.log(err));
  }

  render() {
    const teacher = this.state.teacher;
    return (
      <div className="container">
        <div className="section">
          <div className="card">
            <div className="card-content">
              <div className="row valign-wrapper">
                <div className="col l3 m4 s12 offset-l1 valign">
                  <img src="/assets/images/background1.jpg" alt="" className="responsive-img full-width"/>
                </div>
                <div className="col l8 m8 s12 valign">
                  <h2 className="teacher-title">{teacher.title} {teacher.fname}{teacher.mname ? ` ${teacher.mname} ` : ' '}{teacher.lname}</h2>
                  <div><i>{teacher.short_bio}</i></div>
                </div>
              </div>
              <div className="row">
                <div className="col l10 m12 s12 offset-l1">
                  <p>{teacher.long_bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Teacher;
