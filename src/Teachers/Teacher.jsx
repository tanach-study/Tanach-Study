import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Teacher.css';

class Teacher extends Component {
  constructor(props) {
    super(props);
    const { match } = props || {};
    const { params } = match || {};
    const { id } = params || {};
    this.state = {
      teacherID: id || '',
      teacher: {},
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    const { teacherID } = this.state;
    // TODO: check if teacherID is empty string
    fetch(`${API_URL}/tanach-study/teachers/${teacherID}`)
      .then(r => r.json())
      .then(data => this.setState({ teacher: data }))
      .catch(err => console.log(err));
  }

  render() {
    // get the current teacher object from state
    const { teacher } = this.state;
    // get the teacher's info and list of books
    const { teacher_info: info } = teacher || {};
    const { teacher_books: teacherBooks } = teacher || {};
    const books = teacherBooks || [];
    // map the teacher's books to a card that links to the book
    // TODO: update this with the new data model
    const mappedBooks = books.map(book => (
      <div className='col l4 m6 s12' key={book.book_name}>
        <Link to={`/sefarim/${book.book_name}`}>
          <div className='card hoverable full-width black-text'>
            <div className='card-content'>
              {book.pretty_eng}
            </div>
          </div>
        </Link>
      </div>
    ));

    // get the teacher's info
    const { title, fname, mname, lname, short_bio: short, long_bio: long, image_url: url } = info;
    // generate a string of the teacher's name
    const teacherString = `${title} ${fname}${mname ? ` ${mname} ` : ' '}${lname}`;
    return (
      <div className='container'>
        <div className='section'>
          <div className='card'>
            <div className='card-content'>
              <div className='row valign-wrapper'>
                <div className='col l3 m4 s12 offset-l1 valign'>
                  <img src={url} alt='' className='responsive-img full-width circle' />
                </div>
                <div className='col l8 m8 s12 valign'>
                  <h2 className={styles['teacher-title']}>{teacherString}</h2>
                  <div><i>{short}</i></div>
                </div>
              </div>
              <div className='row'>
                <div className='col l10 m12 s12 offset-l1'>
                  <p>{long}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-content'>
              <div className='row'>
                <h4 className='col l12 m12 s12 left-align'>Sefarim that {teacherString} Taught</h4>
                {mappedBooks}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Teacher;
