import React, { Component } from 'react';
import NachPerek from './NachPerek.jsx';
import TorahPerek from './TorahPerek.jsx';
import Spinner from '../../Spinner/Spinner.jsx';

function formatDir(passed) {
  let str;
  if (passed) str = passed.toLowerCase();
  else return undefined;
  const part1 = str.replace(/(?:^\w|[A-Z]|\b\w)/g, (match) => {
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
      haveData: false,
      activePerek: {},
    };

    this.initialize = this._initialize.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { sefer, perek } = params;
    this.initialize(sefer, perek);
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    const { params } = match;
    const newSefer = params.sefer;
    const newPerek = params.perek;
    const oldSefer = prevProps.match.params.sefer;
    const oldPerek = prevProps.match.params.perek;

    if (newSefer !== oldSefer || newPerek !== oldPerek) {
      this.initialize(newSefer, newPerek);
    }
  }

  getQueryParams() {
    const { location } = this.props;
    const queryString = location.search;
    if (queryString) {
      const pairs = queryString.slice(1).split('&');
      const params = {};
      for (let i = 0; i < pairs.length; i++) {
        const kv = pairs[i].split('=');
        params[kv[0]] = kv[1];
      }
      return params;
    }
    return {};
  }

  _initialize(sefer, perek) {
    fetch(`${API_URL}/tanach-study/perakim/${sefer}/${perek}`)
      .then(r => r.json())
      .then(data => this.setState({
        haveData: true,
        activePerek: data,
      }))
      .catch(err => console.error(err));
  }

  render() {
    const { haveData, activePerek } = this.state;
    const { match } = this.props;
    if (haveData) {
      if (activePerek.part_name === 'torah') {
        const params = this.getQueryParams();
        return (
          <TorahPerek
            act={activePerek}
            formatDir={formatDir}
            sefer={match.params.sefer}
            perek={match.params.perek}
            queryParams={params}
          />
        );
      }
      return (
        <NachPerek
          act={activePerek}
          formatDir={formatDir}
          sefer={match.params.sefer}
          perek={match.params.perek}
        />
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
