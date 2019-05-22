import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Teachers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    fetch(`${API_URL}/tanach-study/teachers`)
      .then(r => r.json())
      .then(data => this.setState({ teachers: data }))
      .catch(err => console.log(err));
  }

  render() {
    const { teachers } = this.state;
    const filled = teachers || [];
    const mappedTeachers = filled.map((teacher) => {
      const { teacher_info: teacherInfo } = teacher;
      const { image_url: url, title, fname, mname, lname, short_bio: short } = teacherInfo || {};
      const teacherString = `${title} ${fname}${mname ? ` ${mname} ` : ' '}${lname}`;
      const teacherSlug = teacherString.replace(' ', '-');
      return (
        <div className='col l4 m6 s12' key={teacherSlug}>
          <Link to={`/teachers/${teacherSlug}`} className='right-align'>
            <div className='card medium hoverable full-width black-text'>
              <div className='card-image'>
                <img src={url} alt='' />
              </div>
              <div className='card-content'>
                <div className='card-title left-align'>{teacherString}</div>
                <p className='left-align'><i>{short}</i></p>
              </div>
            </div>
          </Link>
        </div>
      );
    });
    return (
      <div className='container'>
        <div className='section center'>
          <div className='heading'>
            <h2>Our Teachers</h2>
            <p>
              Below is a list of all of the educators that have taught daily perakim in our program.
            </p>
          </div>
          <div className='teachers'>
            <div className='row'>
              {mappedTeachers}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Teachers;
