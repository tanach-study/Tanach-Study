import React, { Component } from 'react';
import NachPerek from './NachPerek.jsx';
import TorahPerek from './TorahPerek.jsx';
import Spinner from '../Spinner/Spinner.jsx';

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
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    const { sefer, perek } = this.props.match.params;
    fetch(`${API_URL}/perakim/${sefer}/${perek}`)
      .then(r => r.json())
      .then(data => this.setState({
        haveData: true,
        activePerek: data,
      }))
      .catch(err => console.error(err));
  }

  getQueryParams() {
    const queryString = this.props.location.search;
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

  render() {
    if (this.state.haveData) {
      const { sefer } = this.props.match.params;
      const prettySefer = sefer.charAt(0).toUpperCase() + sefer.slice(1);
      if (this.state.activePerek.part_name === 'torah') {
        const params = this.getQueryParams();
        return (
          <TorahPerek
            act={this.state.activePerek}
            formatDir={formatDir}
            sefer={this.props.match.params.sefer}
            perek={this.props.match.params.perek}
            prettySefer={prettySefer}
            queryParams={params}
          />
        );
      }
      return (
        <NachPerek
          act={this.state.activePerek}
          formatDir={formatDir}
          sefer={this.props.match.params.sefer}
          perek={this.props.match.params.perek}
          prettySefer={prettySefer}
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
