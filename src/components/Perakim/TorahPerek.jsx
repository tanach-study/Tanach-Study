import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TeacherCard from './TeacherCard.jsx';
import ReaderCard from './ReaderCard.jsx';
import gematriya from '../../../lib/gematriya.js';

class TorahPerek extends Component {
  constructor(props) {
    super(props);
    const title = props.act.parts_breakdown ? props.act.parts_breakdown[0].title : null;
    this.state = {
      show: 'heb',
      partNumber: 1,
      partTitle: title ? title : '',
    }
  }

  selectPart(i, title) {
    this.setState({
      partNumber: i,
      partTitle: title,
    });
  }

  render() {
    const { act, formatDir, sefer, perek, prettySefer } = this.props;
    const { partNumber } = this.state;

    const partName = encodeURIComponent(formatDir(act.part_name));
    const seferName = encodeURIComponent(formatDir(sefer));
    const fileName = `${sefer.replace(/ /g, '-')}-${partNumber}.mp3`;
    const teamimName = `${sefer.replace(/ /g, '-')}-${partNumber}-teamim.mp3`;
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

    const parts_breakdown = act.parts_breakdown || [];
    const parts = parts_breakdown.map((part, i) => {
      return (
        <div key={i} onClick={this.selectPart.bind(this, i + 1, part.title)} className='hoverable section'>
          <b>Part {part.number}:</b><span className={`${this.state.partNumber === i + 1 ? 'bold' : ''}`}> {part.title}</span>
        </div>
      )
    });

    return (
      <div>
        <div className="container">
          <div className="section">
            <h2 className="center">Sefer {prettySefer}</h2>
            <h4 className="center">{act.sefer_sponsor}</h4>
            <h3>Parashat {act.parasha_name_pretty_eng}</h3>
            <h5>{act.parasha_sponsor}</h5>
            <Link to={`/sefarim/${sefer}`} className="left"><i>Back to Sefer {prettySefer}</i></Link>
          </div>
          <div className="section row">
            <div className="col l8 m6 s12">
              {parts}
            </div>
            <div className="col l4 m6 s12 card small">
              <p className="card-title">Now Playing: Part {this.state.partNumber}</p>
              <div className="card-content">
                <p>{this.state.partTitle}</p>
              </div>
              <audio src={`https://cdn.tanachstudy.com/archives/${partName}/${seferName}/${fileName}`} controls />
            </div>
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
              <a className="waves-effect waves-light btn tsblue col l2 m3 s12 offset-l2" onClick={() => this.setState({ show: 'heb' })}>Hebrew</a>
              <a className="waves-effect waves-light btn tsblue col l2 m4 s12 offset-l1 offset-m1" onClick={() => this.setState({ show: 'par' })}>Hebrew/English</a>
              <a className="waves-effect waves-light btn tsblue col l2 m3 s12 offset-l1 offset-m1" onClick={() => this.setState({ show: 'eng' })}>English</a>
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
    const hebArr = this.props.act.hebrew_text || [];
    const engArr = this.props.act.english_text || [];

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

export default TorahPerek;
