import React, { Component } from 'react';
import MishnaList from './MishnaList/MishnaList.jsx';
import Spinner from '../../Spinner/Spinner.jsx';

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
      perekSponsor: '',
      mishnayot: [],
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
    const perekNum = parseInt(perek, 10);
    if (!seder) {
      const { history } = this.props;
      const { push } = history;
      push('/');
    }
    fetch(`${API_URL}/mishna-study/perek/${seder}/${masechet}/${perekNum}`)
      .then(r => r.json())
      .then((data) => {
        const mishnayot = new Set();
        data.forEach(record => mishnayot.add(record.part));
        this.setState({
          haveData: true,
          mishnayot: [...mishnayot].sort(),
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { haveData, mishnayot, perekSponsor, sederName, masechetName, perekNumber } = this.state;

    if (haveData) {
      const sponsor = Array.isArray(perekSponsor) ? perekSponsor.map(l => <div key={l}>{l}</div>) : perekSponsor;
      return (
        <div className='container'>
          <h2>Perek {perekNumber}</h2>
          {perekSponsor && <h3>{sponsor}</h3>}
          <MishnaList
            mishnayot={mishnayot}
            seder={sederName}
            masechet={masechetName}
            perek={perekNumber}
          />
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
