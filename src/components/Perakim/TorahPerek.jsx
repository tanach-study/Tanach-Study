import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tanach from '../Tanach/Tanach.jsx';
import PartItem from './TorahPartItem.jsx';

class TorahPerek extends Component {
  constructor(props) {
    super(props);
    const title = props.act.parts_breakdown ? props.act.parts_breakdown[0].title : null;
    const partNumber = props.queryParams.part ? parseInt(props.queryParams.part, 10) : 1;
    this.state = {
      partNumber,
      partTitle: title || '',
    };
    this.selectPart = this._selectPart.bind(this);
  }

  _selectPart(i, title) {
    this.setState({
      partNumber: i,
      partTitle: title,
    });
  }

  render() {
    const { act, formatDir, sefer, perek } = this.props;
    const { partNumber } = this.state;

    const partName = encodeURIComponent(formatDir(act.part_name));
    const seferName = encodeURIComponent(formatDir(sefer));
    const fileName = `${perek.replace(/ /g, '-')}-${partNumber}.mp3`;
    const teamimName = `${perek.replace(/ /g, '-')}-${partNumber}-teamim.mp3`;
    const hasTeamim = act.reader_id ? true : false;

    // initialize null variables for the next and previous sefer and perek
    let prevSeferName = null;
    let nextSeferName = null;
    let prevPerekNum = null;
    let nextPerekNum = null;
    // store the int of the current perek num in a var
    const curPerekNum = parseInt(perek, 10);
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

    const partsBreakdown = act.parts_breakdown || [];
    /* eslint react/no-array-index-key: "off" */
    const parts = partsBreakdown.map((part, i) => (
      <PartItem
        key={`torah-parts-breakdown-${sefer}-${perek}-${i}`}
        part={part}
        index={i}
        currentPart={this.state.partNumber}
        clickHandler={this.selectPart}
      />
    ));

    const parasha = {
      id: perek,
      startChapter: this.props.act.start_chapter || null,
      startVerse: this.props.act.start_verse || null,
      endChapter: this.props.act.end_chapter || null,
      endVerse: this.props.act.end_verse || null,
    };

    const bookSponsor = Array.isArray(act.sefer_sponsor) ? act.sefer_sponsor.map((l, i) => <div key={`sefer-sponsor-in-perek-${sefer}-${perek}-${i}`}>{l}</div>) : act.sefer_sponsor;
    const perekSponsor = Array.isArray(act.parasha_sponsor) ? act.parasha_sponsor.map((l, i) => <div key={`sefer-sponsor-in-perek-${sefer}-${perek}-${i}`}>{l}</div>) : act.parasha_sponsor;

    return (
      <div>
        <div className='container'>
          <div className='section'>
            <h2 className='center'>Sefer {act.book_name_pretty_eng}</h2>
            {act.sefer_sponsor && <h4 className='center'>{bookSponsor}</h4>}
            <h3>Parashat {act.parasha_name_pretty_eng}</h3>
            {act.parasha_sponsor && <h5>{perekSponsor}</h5>}
            <Link to={`/sefarim/${sefer}`} className='left'><i>Back to Sefer {act.book_name_pretty_eng}</i></Link>
          </div>
          <div className='section row'>
            <div className='col l8 m6 s12'>
              {parts}
            </div>
            <div className='col l4 m6 s12 card small'>
              <p className='card-title'>Now Playing: Part {this.state.partNumber}</p>
              <div className='card-content'>
                <p>{this.state.partTitle}</p>
              </div>
              <audio src={`https://cdn.tanachstudy.com/archives/${partName}/${seferName}/${fileName}`} controls />
            </div>
          </div>
          {
            prevPerekNum && nextPerekNum &&
            <div className='row center'>
              <div className='col l2 m2 s12'>
                <Link to={`/perakim/${prevSeferName}/${prevPerekNum}`}>Previous Perek</Link>
              </div>
              <div className='col l8 m8 hide-on-small-only' />
              <div className='col l2 m2 s12'>
                <Link to={`/perakim/${nextSeferName}/${nextPerekNum}`}>Next Perek</Link>
              </div>
            </div>
          }
          <div className='divider hide-on-med-and-down' />
          <br className='hide-on-med-and-down' />
          <Tanach
            part={act.part_name}
            sefer={sefer}
            parasha={parasha}
            partsBreakdown={partsBreakdown}
            selectedPart={this.state.partNumber}
          />
        </div>
      </div>
    );
  }
}

export default TorahPerek;
