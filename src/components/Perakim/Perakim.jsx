import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import gematriya from '../../../lib/gematriya.js';

function formatDir(passed) {
  let str;
  if (passed) str = passed.toLowerCase();
  else return undefined;
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (match, i) => {
    if (+match === 0) return '';
    return match.toUpperCase();
  });
}

class Perakim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sefer: this.props.params.sefer,
      perek: this.props.params.perek,
      prettySefer: this.props.params.sefer.charAt(0).toUpperCase() + this.props.params.sefer.slice(1),
      activePerek: {},
      show: 'heb',
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
    init(jQuery);
    fetch(`/api/perakim/${this.state.sefer}/${this.state.perek}`)
    .then(r => r.json())
    .then(data => this.updateState('activePerek', data))
    .catch(err => console.log(err));
  }

  render() {
    const partName = encodeURIComponent(formatDir(this.state.activePerek.part_name));
    const seferName = encodeURIComponent(formatDir(this.state.sefer));
    const fileName = `${this.state.sefer.replace(/ /g, '-')}-${this.state.perek}.mp3`;
    const teamimName = `${this.state.sefer.replace(/ /g, '-')}-${this.state.perek}-teamim.mp3`;
    const act = this.state.activePerek;
    return (
      <div>
        <div className="container">
          <div className="row">
            <h2>Sefer {this.state.prettySefer} Perek {this.state.perek}</h2>
            <div className="col l6 m12 s12">
              <div className="card">
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">Class given by {`${act.teacher_title} ${act.teacher_fname} ${act.teacher_mname || ''}${act.teacher_lname}`}<i className="material-icons right">more_vert</i></span>
                  <br/>
                  <audio src={`http://cdn.tanachstudy.com/archives/${partName}/${seferName}/${fileName}`} controls />
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">{`${act.teacher_title} ${act.teacher_fname} ${act.teacher_mname || ''}${act.teacher_lname}`}<i className="material-icons right">close</i></span>
                  <p>{act.teacher_bio || 'This teacher doesn\'t have a bio'}</p>
                  <a href="#">See {act.teacher_title} {act.teacher_lname}'s bio page</a>
                </div>
              </div>
            </div>
            <div className="col l6 m12 s12">
              <div className="card">
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">Perek read by {`${act.reader_title} ${act.reader_fname} ${act.reader_mname || ''}${act.reader_lname}`}<i className="material-icons right">more_vert</i></span>
                  <br/>
                  <audio src={`http://cdn.tanachstudy.com/archives/${partName}/${seferName}/recordings/${teamimName}`} controls />
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">{`${act.reader_title} ${act.reader_fname} ${act.reader_mname || ''}${act.reader_lname}`}<i className="material-icons right">close</i></span>
                  <p>{act.reader_bio || 'This teacher doesn\'t have a bio'}</p>
                  <a href="#">See {act.reader_title} {act.reader_lname}'s bio page</a>
                </div>
              </div>
            </div>
          </div>
          <div className="divider hide-on-med-and-down"></div>
          <br className="hide-on-med-and-down" />
          <div className="row">
            <div className="center">
              <a className="waves-effect waves-light btn col l2 m3 s12 offset-l2" onClick={() => this.updateState('show', 'heb')}>Hebrew</a>
              <a className="waves-effect waves-light btn col l2 m4 s12 offset-l1 offset-m1" onClick={() => this.updateState('show', 'par')}>Hebrew/English</a>
              <a className="waves-effect waves-light btn col l2 m3 s12 offset-l1 offset-m1" onClick={() => this.updateState('show', 'eng')}>English</a>
            </div>
          </div>
          <div className="row">
            <div className="card">
              {this.showSefer()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  showSefer() {
    const hebArr = this.state.activePerek.hebrew_text || [];
    const engArr = this.state.activePerek.english_text || [];

    const heb = hebArr.map((passuk, i) => <p key={i}><b>{gematriya(i + 1)}. </b>{passuk}<br/></p>);
    const eng = engArr.map((passuk, i) => `${i + 1} ${passuk}`);
    if (this.state.show == "heb") {
      return (
        <div className="right-align rtl" id='hebText'>
          {heb}
        </div>
      );
    } else if (this.state.show == "par") {
      return (
        <div id='parText'>
          <div className="row">
            <div className="col l5 offset-l6">
              <div className="right-align rtl">
                {heb}
              </div>
            </div>
            <div className="col l5">
              <div className="left-align">
                {eng}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.show == "eng") {
      return (
        <div className="left-align" id='engText'>
          {eng}
        </div>
      );
    }
  }
}

export default Perakim;
