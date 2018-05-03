import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import NachPerek from './NachPerek.jsx';
import TorahPerek from './TorahPerek.jsx';
import Spinner from '../Spinner/Spinner.jsx';

function formatDir(passed) {
  let str;
  if (passed) str = passed.toLowerCase();
  else return undefined;
  const part1 = str.replace(/(?:^\w|[A-Z]|\b\w)/g, (match, i) => {
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
      sefer: this.props.match.params.sefer,
      perek: this.props.match.params.perek,
      prettySefer: this.props.match.params.sefer.charAt(0).toUpperCase() + this.props.match.params.sefer.slice(1),
      activePerek: {},
      show: 'heb',
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.initialize(this.props.match.params.sefer, this.props.match.params.perek);
  }

  componentWillReceiveProps(props) {
    this.setState({
      sefer: props.match.params.sefer,
      perek: props.match.params.perek,
    }, this.initialize(props.match.params.sefer, props.match.params.perek));
  }

  initialize(sefer, perek) {
    fetch(`${API_URL}/perakim/${sefer}/${perek}`)
      .then(r => r.json())
      .then(data => this.setState({
        haveData: true,
        activePerek: data,
        prettySefer: (data.book_name.charAt(0).toUpperCase() + data.book_name.slice(1)),
      }))
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.haveData) {
      if (this.state.activePerek.part_name === 'torah') {
        return (
          <TorahPerek
            act={this.state.activePerek}
            formatDir={formatDir}
            sefer={this.props.match.params.sefer}
            perek={this.props.match.params.perek}
            prettySefer={this.props.match.params.sefer.charAt(0).toUpperCase() + this.props.match.params.sefer.slice(1)}
          />
        );
      }
      return (
        <NachPerek
          act={this.state.activePerek}
          formatDir={formatDir}
          sefer={this.props.match.params.sefer}
          perek={this.props.match.params.perek}
          prettySefer={this.props.match.params.sefer.charAt(0).toUpperCase() + this.props.match.params.sefer.slice(1)}
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
