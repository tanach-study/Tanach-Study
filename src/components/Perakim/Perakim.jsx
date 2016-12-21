import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';

function formatDir(passed) {
  let str;
  if (passed) str = passed.toLowerCase();
  else return undefined;
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (match, i) => {
    if (+match === 0) return '';
    return match.toUpperCase();
  });
}

class Perakim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sefer: this.props.params.sefer,
      perek: this.props.params.perek,
      activePerek: {},
    };
  }

  updateState(key, value) {
    this.setState({
      [key]: value,
    });
  }

  componentDidMount() {
    fetch(`/api/perakim/${this.state.sefer}/${this.state.perek}`)
    .then(r => r.json())
    .then(data => this.updateState('activePerek', data))
    .catch(err => console.log(err));
  }

  render() {
    const partName = encodeURIComponent(formatDir(this.state.activePerek.part_name));
    const seferName = encodeURIComponent(formatDir(this.state.sefer));
    const fileName = `${this.state.sefer.replace(/ /g, '-')}-${this.state.perek}.mp3`;
    return (
      <div>
        <p>Sefer {this.state.sefer} Perek {this.state.perek}</p>
        <audio src={`http://cdn.tanachstudy.com/archives/${partName}/${seferName}/${fileName}`} controls />
      </div>
    )
  }
}

export default Perakim;
