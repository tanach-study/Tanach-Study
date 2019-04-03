import React, { Component } from 'react';
import Spinner from '../../Spinner/Spinner.jsx';

class Masechtot extends Component {
  constructor(props) {
    super(props);
    const { match } = props || {};
    const { params } = match || {};
    const { seder } = params || '';
    const { masechet } = params || '';
    const { perek } = params || '';
    const { mishna } = params || '';
    this.state = {
      seder,
      masechet,
      perek,
      mishna,
      response: {},
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
    const { mishna } = params || '';
    if (!seder) {
      const { history } = this.props;
      const { push } = history;
      push('/');
    }
    fetch(`${API_URL}/mishna-study/mishna/${seder}/${masechet}/${perek}/${mishna}`)
      .then(r => r.json())
      .then((data) => {
        console.log(data);
        this.setState({
          haveData: true,
          response: data,
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { haveData, response } = this.state;

    if (haveData) {
      return (
        <div>haveData!</div>
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

export default Masechtot;
