import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './Dashboard/Dashboard.jsx';
import Login from './Login/Login.jsx';
import Videos from './Videos/Videos.jsx';

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
        this.props.history.push('/admin/login');
      } else {
        this.updateState('isLoggedIn', true);
      }
    }

  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/admin/videos' component={Videos} />
          <Route exact path='/admin/login' component={Login} />
          <Route exact path='/admin/dashboard' render={props => (
            <Dashboard
              {...props}
              isLoggedIn={this.state.isLoggedIn}
            />
          )} />
        </Switch>
      </div>
    );
  }
}

export default Admin;
