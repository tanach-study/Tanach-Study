import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TeacherCard from './TeacherCard.jsx';
import ReaderCard from './ReaderCard.jsx';
import gematriya from '../../../lib/gematriya.js';

function formatDir(passed) {
  let str;
  if (passed) str = passed.toLowerCase();
  else return undefined;
  const part1 = str.replace(/(?:^\w|[A-Z]|\b\w)/g, (match, i) => {
    if (+match === 0) return '';
    return match.toUpperCase();
  });
  const part2 = part1.replace(/-/g, ' ');
  return part2;
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
      perekVars: {},
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
    this.initialize(this.props.params.sefer, this.props.params.perek);
  }

  componentWillReceiveProps(props) {
    this.updateState('sefer', props.params.sefer);
    this.updateState('perek', props.params.perek);
    this.initialize(props.params.sefer, props.params.perek);
  }

  initialize(sefer, perek) {
    fetch(`/api/perakim/${sefer}/${perek}`)
    .then(r => r.json())
    .then(data => {
      this.updateState('activePerek', data);
      this.updateState('prettySefer', (data.book_name.charAt(0).toUpperCase() + data.book_name.slice(1)));
    })
    .catch(err => console.log(err));
  }

  render() {
    let act = this.state.activePerek;
    const sefer = this.props.params.sefer;
    const perek = this.props.params.perek;

    const partName = encodeURIComponent(formatDir(act.part_name));
    const seferName = encodeURIComponent(formatDir(sefer));
    const fileName = `${sefer.replace(/ /g, '-')}-${perek}.mp3`;
    const teamimName = `${sefer.replace(/ /g, '-')}-${perek}-teamim.mp3`;
    const hasTeamim = act.reader_id ? true : false;

    // initialize null variables for the next and previous sefer and perek
    let prevSeferName = null;
    let nextSeferName = null;
    let prevPerekNum = null;
    let nextPerekNum = null;
    // store the int of the current perek num in a var
    const curPerekNum = parseInt(perek);
    const curSeferName = sefer;

    // if the current perek is the first of the book...
    if (curPerekNum <= 1) {
      // check if there is a book before this one (i.e. that this is not the first book)
      if (act.prev_book_id) {
        // if there is, then use that info for the previous perek
        prevPerekNum = act.prev_book_num_chapters;
        prevSeferName = act.prev_book_name;
      } else {
        // if it is the first book and perek, set these values to null
        prevPerekNum = null;
        prevSeferName = null;
      }
      // check to make sure that there is a next perek as well
      if (curPerekNum >= act.book_num_chapters) {
        if (act.next_book_id) {
          nextPerekNum = 1;
          nextSeferName = act.next_book_name;
        }
      } else {
        nextPerekNum = curPerekNum + 1;
        nextSeferName = curSeferName;
      }
    }

    // if the current perek is the last of the sefer...
    if (curPerekNum >= act.book_num_chapters) {
      // check if there is a book after this one (i.e. that this is not the last book)
      if (act.next_book_id) {
        // if there is, then use that info for the next perek
        nextPerekNum = 1;
        nextSeferName = act.next_book_name;
      } else {
        // if it is the last book and perek, set these values to null
        nextPerekNum = null;
        nextSeferName = null;
      }

      if (curPerekNum <= 1) {
        if (act.prev_book_id) {
          prevPerekNum = act.prev_book_num_chapters;
          prevSeferName = act.prev_book_name;
        }
      } else {
        prevPerekNum = curPerekNum - 1;
        prevSeferName = act.curSeferName;
      }
    }
    // if the current perek is anywhere else in the middle, then just set the next and prev data to the current sefer, and simple math.
    if (curPerekNum > 1 && curPerekNum < act.book_num_chapters) {
      prevPerekNum = curPerekNum - 1;
      prevSeferName = curSeferName;
      nextSeferName = curSeferName;
      nextPerekNum = curPerekNum + 1;
    }

    return (
      <div>
        <div className="container">
          <div className="row">
            <h2>Sefer {this.state.prettySefer} Perek {this.state.perek}</h2>
            <Link to={`/sefarim/${this.state.sefer}`} className="left"><i>Back to Sefer {this.state.prettySefer}</i></Link>
            <div className="section"></div>
            <TeacherCard activePerek={act} partName={partName} seferName={seferName} fileName={fileName} />
            <ReaderCard activePerek={act} partName={partName} seferName={seferName} teamimName={teamimName} />
          </div>
          <div className="row center">
            <div className="col l2 m2 s12">
              <Link to={`/perakim/${prevSeferName}/${prevPerekNum}`}>Previous Perek</Link>
            </div>
            <div className="col l8 m8 hide-on-small-only"></div>
            <div className="col l2 m2 s12">
              <Link to={`/perakim/${nextSeferName}/${nextPerekNum}`}>Next Perek</Link>
            </div>
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
