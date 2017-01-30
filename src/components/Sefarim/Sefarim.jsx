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

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    init(jQuery);
    const sefer = this.state.seferName;
    if (!sefer) browserHistory.push('/');
    fetch(`/api/sefarim/${sefer}`)
    .then(r => r.json())
    .then(data => {
      const seferObj = data.shift();
      const teacherObj = data.shift();
      this.updateState('selectedSefer', seferObj);
      this.updateState('allTeachers', teacherObj);
      this.updateState('seferData', data);
    })
    .catch(err => console.log(err));
  }

  render() {
    const act = this.state.seferData[0] || {};
    return (
      <div>
        <div className="container">
          <h2>Sefer {this.state.seferName.charAt(0).toUpperCase() + this.state.seferName.slice(1)}</h2>
          <div className="card">
            <div className="card-content">
              <div className="card-title">{act.title} {act.fname} {act.mname || ''}{act.lname}</div>
              <p>{act.long_bio || act.short_bio}</p>
              <a href="#">See {act.title} {act.lname}'s bio page</a>
            </div>
          </div>
        </div>
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
