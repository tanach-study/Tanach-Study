import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import PerekList from '../PerekList/PerekList.jsx';

class Sefarim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seferName: this.props.params.sefer || '',
      selectedSefer: null,
      seferData: [],
    }
  }

  updateState(key, value) {
    this.setState({
      [key]: value,
    });
  }

  seferCardClick(i) {
    browserHistory.push(`/perakim/${this.state.seferName}/${i}`);
  }

  componentDidMount() {
    init(jQuery);
    const sefer = this.state.seferName;
    if (!sefer) browserHistory.push('/');
    fetch(`/api/sefarim/${sefer}`)
    .then(r => r.json())
    .then(data => {
      const seferObj = data.shift();
      this.updateState('selectedSefer', seferObj);
      this.updateState('seferData', data);
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <PerekList
          perakim={this.state.seferData}
          sefer={this.state.selectedSefer}
          click={this.seferCardClick.bind(this)}
        />
      </div>
    )
  }
}

export default Sefarim;
