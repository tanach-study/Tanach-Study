import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }

  updateState(key, value) {
    this.setState({
      [key]: value,
    });
  }

  componentWillMount() {
    const token = localStorage.getItem('adminUserToken');
    if (token) {
      const timeLoggedIn = localStorage.getItem('timeLoggedIn');
      if (Date.now() - timeLoggedIn > 14400000) {
        localStorage.removeItem('adminUserToken');
        localStorage.removeItem('timeLoggedIn');
        browserHistory.push('/admin/login');
      } else {
        this.updateState('isLoggedIn', true);
      }
    }

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
        {this.props.children && React.cloneElement(this.props.children, {
          updateAdminState: (k, v) => this.updateState(k, v),
          isLoggedIn: this.state.isLoggedIn,
        })
        }
      </div>
    );
  }
}

export default Admin;
