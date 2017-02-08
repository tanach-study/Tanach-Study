import React, { Component } from 'react';
import Navigation from './Navigation/Navigation.jsx';
import Footer from './Footer/Footer.jsx';
import DocumentMeta from 'react-document-meta';

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
    const meta = {
      title: 'Tanach Study',
      description: 'Tanach Study is a web-based platform for learning Tanach, or the 24 books of the Old Testament',
    }
    return (
      <div>
        <Navigation />
          <div className="body">
            {this.props.children && React.cloneElement(this.props.children, {
              updateOverallState: (k, v) => this.updateState(k, v),
              allSefarim: this.state.allSefarim,
              activePerek: this.state.activePerek,
            })
            }
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
