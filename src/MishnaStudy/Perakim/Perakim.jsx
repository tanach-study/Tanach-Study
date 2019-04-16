import React, { Component } from 'react';
import MishnaList from './MishnaList/MishnaList.jsx';
import Spinner from '../../Spinner/Spinner.jsx';
import AudioPlayer from '../AudioPlayer/AudioPlayer.jsx';

class Perakim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haveData: false,
      mishnayot: [],
      currentMishna: 0,
    };
    this.selectMishna = this.selectMishna.bind(this);
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
    const perekNum = parseInt(perek, 10);
    if (!seder) {
      const { history } = this.props;
      const { push } = history;
      push('/');
    }
    fetch(`${API_URL}/mishna-study/perek/${seder}/${masechet}/${perekNum}`)
      .then(r => r.json())
      .then((data) => {
        this.setState({
          haveData: true,
          mishnayot: [...data],
          currentMishna: 0,
        });
      })
      .catch(err => console.error(err));
  }

  selectMishna(i) {
    this.setState({
      currentMishna: i,
    });
  }

  render() {
    const { haveData } = this.state;

    if (haveData) {
      const { mishnayot, currentMishna } = this.state;
      const base = mishnayot[0] || {};
      const { segment_name: sederN, section_name: masechetN, unit_name: perekN } = base;
      const { segment_title: sederT, section_title: masechetT, unit_title: perekT } = base;
      const { segment: seder, section: masechet, unit: perek } = base;

      const { section_sponsor: sSpon } = base;
      const sponsor = Array.isArray(sSpon) ? sSpon.map(l => <div key={l}>{l}</div>) : sSpon;
      const mishna = mishnayot[currentMishna] || {};
      const { audio_url: url } = mishna;

      let pageTitle = null;
      if (seder === 'introduction') {
        pageTitle = 'HaRambam\'s Introduction';
      } else {
        const sederString = `${sederN || 'Seder'} ${sederT || seder}`;
        const masechetString = `${masechetN || 'Masechet'} ${masechetT || masechet}`;
        const perekString = `${perekN || 'Perek'} ${perekT || perek}`;
        pageTitle = `${sederString} ${masechetString} ${perekString}`;
      }

      return (
        <div className='container'>
          <h2>{pageTitle}</h2>
          {sSpon && <h3>{sponsor}</h3>}
          <section className='row'>
            <MishnaList
              mishnayot={mishnayot}
              seder={seder}
              masechet={masechet}
              perek={perek}
              click={this.selectMishna}
              selected={currentMishna}
            />
            <AudioPlayer
              url={url}
              playing={mishna}
            />
          </section>
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

export default Perakim;
