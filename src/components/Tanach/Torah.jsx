import React from 'react';

function Torah(props) {
  const hebArr = props.hebrew;
  const engArr = props.english;
  const start_chapter = this.props.act.start_chapter || null;
  const start_verse = this.props.act.start_verse || null;
  const end_chapter = this.props.act.end_chapter || null;
  const end_verse = this.props.act.end_verse || null;

  let gen = Date.now();

  const heb = [];
  const eng = [];
  hebArr.forEach((perek, i) => {
    const perek_num = start_chapter != null ? start_chapter + i : i + 1;
    const passuk_num = i === 0 && start_verse != null ? start_verse : 1;

    heb.push(<b key={gen++}>פרק {gematriya(perek_num)}</b>)
    perek.forEach((passuk, j) => heb.push(<p key={gen++}><b>{gematriya(passuk_num + j)}. </b>{passuk}</p>));
  });
  engArr.forEach((perek, i) => {
    const perek_num = start_chapter != null ? start_chapter + i : i + 1;
    const passuk_num = i === 0 && start_verse != null ? start_verse : 1;

    eng.push(<b key={gen++}>Perek {perek_num}</b>)
    perek.forEach((passuk, j) => eng.push(<p key={gen++}><b>{passuk_num + j}. </b>{passuk}</p>));
  });
  let par = [];
  for (let i = 0; i < hebArr.length && i < engArr.length; i++) {
    const perek_num = start_chapter != null ? start_chapter + i : i + 1;
    const passuk_num = i === 0 && start_verse != null ? start_verse : 1;

    let currHeb = hebArr[i];
    let currEng = engArr[i];
    par.push(
      <div key={gen++}>
        <div className='row valign-wrapper hide-on-small-only'>
          <div className='col l6 m12 s12 left-align valign'><b>Perek {perek_num}</b></div>
          <div className='col l6 m12 s12 rtl right-align valign'><b>פרק {gematriya(perek_num)}</b></div>
        </div>
        <div className='hide-on-med-and-up'>
          <div className='row center-align rtl'><b>פרק {gematriya(perek_num)}</b></div>
          <div className='row center-align'><b>Perek {perek_num}</b></div>
        </div>
      </div>
    );
    for(let j = 0; j < currHeb.length && i < currEng.length; j++) {
      par.push(
        <div key={gen++}>
          <div className='row valign-wrapper hide-on-small-only'>
            <div className='col l6 m12 s12 left-align valign'><p><b>{passuk_num + j}. </b>{currEng[j]}</p></div>
            <div className='col l6 m12 s12 rtl right-align valign'><p><b>{gematriya(passuk_num + j)}. </b>{currHeb[j]}</p></div>
          </div>
          <div className='hide-on-med-and-up'>
            <div className='row center-align rtl'><p><b>{gematriya(passuk_num + j)}. </b>{currHeb[j]}</p></div>
            <div className='row center-align'><p><b>{passuk_num + j}. </b>{currEng[j]}</p></div>
          </div>
        </div>
      );
    }
  }
  if (this.state.show === 'heb') {
    return (
      <div className='right-align rtl' id='hebText'>
        {heb}
      </div>
    );
  } else if (this.state.show === 'par') {
    return (
      <div id='parText'>
        {par}
      </div>
    );
  } else if (this.state.show === 'eng') {
    return (
      <div className='left-align' id='engText'>
        {eng}
      </div>
    );
  }
}

export default Torah;
