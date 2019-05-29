import React, { Component } from 'react';
import NachPerek from './NachPerek.jsx';
import TorahPerek from './TorahPerek.jsx';
import Spinner from '../../Spinner/Spinner.jsx';

class Perakim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haveData: false,
      response: [],
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
    const { match: newMatch } = this.props || {};
    const { params: newParams } = newMatch || {};
    const { sefer: newSefer, perek: newPerek } = newParams || {};

    const { match: oldMatch } = prevProps || {};
    const { params: oldParams } = oldMatch || {};
    const { sefer: oldSefer, perek: oldPerek } = oldParams || {};

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
        response: data,
      }))
      .catch(err => console.error(err));
  }

  render() {
    const { haveData, response } = this.state;
    const base = response[0] || {};
    const { division: tanachPart } = base;

    const { match } = this.props;
    const { params } = match || {};
    const { sefer, perek } = params || {};

    if (haveData) {
      if (tanachPart === 'torah') {
        const qParams = this.getQueryParams();
        return (
          <TorahPerek
            parts={response}
            sefer={sefer}
            perek={perek}
            queryParams={qParams}
          />
        );
      }
      return (
        <NachPerek
          response={response}
          sefer={sefer}
          perek={perek}
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
