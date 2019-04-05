import React, { Component } from 'react';
import Spinner from '../../Spinner/Spinner.jsx';
import TeacherCard from './TeacherCard.jsx';

class Mishnayot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: { audio_url: {} },
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
    const { perek } = params || '';
    const { mishna } = params || '';
    if (!seder) {
      const { history } = this.props;
      const { push } = history;
      push('/');
    }
    fetch(`${API_URL}/mishna-study/mishna/${seder}/${masechet}/${perek}/${mishna}`)
      .then(r => r.json())
      .then((data) => {
        this.setState({
          haveData: true,
          response: data || { audio_url: {} },
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { haveData, response } = this.state;
    const {
      segment_title: seder,
      section_title: masechet,
      unit: perek,
      part: mishna,
      part_title: title,
      audio_url: url,
      teacher_title: teacherTitle,
      teacher_fname: fname,
      teacher_mname: mname,
      teacher_lname: lname,
      teacher_short_bio: shortBio,
    } = response;

    if (haveData) {
      return (
        <div className='container'>
          <div className='row'>
            <h2>Seder {seder} Masechet {masechet} {perek}:{mishna}</h2>
            {title && <h4>{title}</h4>}
            <div className='section' />
            <TeacherCard
              audio={url}
              title={teacherTitle}
              fname={fname}
              mname={mname}
              lname={lname}
              bio={shortBio}
            />
          </div>
          <div className='divider hide-on-med-and-down' />
          <br className='hide-on-med-and-down' />
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

export default Mishnayot;
