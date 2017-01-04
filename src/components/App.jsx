import React, { Component } from 'react';
import Navigation from './Navigation/Navigation.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSefarim: [],
      activePerek: {},
    }
  }

  updateState(key, value) {
    this.setState({
      [key]: value,
    });
  }

  componentDidMount() {
    init(jQuery);
    // fetch('/api/sefarim')
    // .then(r => r.json())
    // .then(data => this.updateState('allSefarim', data))
    // .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Navigation />
        {this.props.children && React.cloneElement(this.props.children, {
          updateOverallState: (k, v) => this.updateState(k, v),
          allSefarim: this.state.allSefarim,
          activePerek: this.state.activePerek,
        })
        }
      </div>
    );
  }
}

export default App;
