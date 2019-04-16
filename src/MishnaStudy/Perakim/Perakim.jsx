import React, { Component } from 'react';
import MishnaList from './MishnaList/MishnaList.jsx';
import Spinner from '../../Spinner/Spinner.jsx';
import AudioPlayer from '../AudioPlayer/AudioPlayer.jsx';

class Perakim extends Component {
  constructor(props) {
    super(props);
    const { match } = props || {};
    const { params } = match || {};
    const { seder } = params || '';
    const { masechet } = params || '';
    const { perek } = params || '';
    this.state = {
      sederName: seder,
      masechetName: masechet,
      perekNumber: parseInt(perek, 10),
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
    const { haveData, mishnayot, sederName, masechetName, perekNumber, currentMishna } = this.state;
    const base = mishnayot[0] || {};
    const { unit_name: pName } = base;
    const perekName = pName || 'Title';
    const { unit_sponsor: uSpon } = base;

    if (haveData) {
      const sponsor = Array.isArray(uSpon) ? uSpon.map(l => <div key={l}>{l}</div>) : uSpon;
      const mishna = mishnayot[currentMishna] || {};
      const { audio_url: url } = mishna;
      return (
        <div className='container'>
          <h2>{perekName} {perekNumber}</h2>
          {uSpon && <h3>{sponsor}</h3>}
          <section className='row'>
            <MishnaList
              mishnayot={mishnayot}
              seder={sederName}
              masechet={masechetName}
              perek={perekNumber}
              click={this.selectMishna}
            />
            <AudioPlayer
              url={url}
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
