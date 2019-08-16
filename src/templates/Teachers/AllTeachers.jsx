import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../../layouts/main.jsx';

class Teachers extends Component {
  constructor(props) {
    super(props);
    const { pageContext } = props;
    const { teachers } = pageContext;
    this.state = {
      teachers: teachers || [],
    };
  }

  render() {
    const { teachers } = this.state;
    const filled = teachers || [];
    const mappedTeachers = filled.map((teacher) => {
      const { image: url, title, fname, mname, lname, short_bio: short } = teacher || {};
      const tString = mname ? `${title} ${fname} ${mname} ${lname}` : `${title} ${fname} ${lname}`;
      const teacherSlug = tString.replace(/ /g, '-').replace(/\./g, '').toLowerCase();
      return (
        <div className='col l4 m6 s12' key={teacherSlug}>
          <Link to={`/teachers/${teacherSlug}`} className='right-align'>
            <div className='card medium hoverable full-width black-text'>
              <div className='card-image'>
                <img src={url} alt='' />
              </div>
              <div className='card-content'>
                <div className='card-title left-align'>{tString}</div>
                <p className='left-align'><i>{short}</i></p>
              </div>
            </div>
          </Link>
        </div>
      );
    });
    return (
      <Layout>
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
      </Layout>
    );
  }
}

export default Teachers;
