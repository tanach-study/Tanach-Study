import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import TeacherCard from './TeacherCard.jsx';
import ReaderCard from './ReaderCard.jsx';
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
    const hasTeamim = act.reader_id ? true : false;
    return (
      <div>
        <div className="container">
          <div className="row">
            <h2>Sefer {this.state.prettySefer} Perek {this.state.perek}</h2>
            <TeacherCard activePerek={act} partName={partName} seferName={seferName} fileName={fileName} />
            <ReaderCard activePerek={act} partName={partName} seferName={seferName} teamimName={teamimName} />
          </div>
          <div className="divider hide-on-med-and-down"></div>
          <br className="hide-on-med-and-down" />
          <div className="row">
            <div className="center">
              <a className="waves-effect waves-light btn tsblue col l2 m3 s12 offset-l2" onClick={() => this.updateState('show', 'heb')}>Hebrew</a>
              <a className="waves-effect waves-light btn tsblue col l2 m4 s12 offset-l1 offset-m1" onClick={() => this.updateState('show', 'par')}>Hebrew/English</a>
              <a className="waves-effect waves-light btn tsblue col l2 m3 s12 offset-l1 offset-m1" onClick={() => this.updateState('show', 'eng')}>English</a>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card-content">
                {this.showSefer()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  showSefer() {
    const hebArr = this.state.activePerek.hebrew_text || [];
    const engArr = this.state.activePerek.english_text || [];

    const heb = hebArr.map((passuk, i) => <p key={i}><b>{gematriya(i + 1)}. </b>{passuk}</p>);
    const eng = engArr.map((passuk, i) => <p key={i}><b>{i + 1}. </b>{passuk}</p>);
    let par = [];
    for (let i = 0; i < hebArr.length && i < engArr.length; i++) {
      par.push(
        <div key={i}>
          <div className="row valign-wrapper hide-on-small-only">
            <div className="col l6 m12 s12 left-align valign"><p><b>{i + 1}. </b>{engArr[i]}</p></div>
            <div className="col l6 m12 s12 rtl right-align valign"><p><b>{gematriya(i + 1)}. </b>{hebArr[i]}</p></div>
          </div>
          <div className="hide-on-med-and-up">
            <div className="row center-align rtl"><p><b>{gematriya(i + 1)}. </b>{hebArr[i]}</p></div>
            <div className="row center-align"><p><b>{i + 1}. </b>{engArr[i]}</p></div>
          </div>
        </div>
      );
    }
    if (this.state.show == "heb") {
      return (
        <div className="right-align rtl" id='hebText'>
          {heb}
        </div>
      );
    } else if (this.state.show == "par") {
      return (
        <div id='parText'>
          {par}
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
