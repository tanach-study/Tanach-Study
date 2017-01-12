import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (!this.props.isLoggedIn) browserHistory.push('/admin/login');
  }

  doLogout() {
    localStorage.removeItem('adminUserToken');
    localStorage.removeItem('timeLoggedIn');
    browserHistory.push('/admin/login');
  }

  render() {
    return (
      <div className="container">
        <div className="section">
          <h1>Admin Dashboard</h1>
          <a className="waves-effect waves-light btn" onClick={() => this.doLogout()}>Log Out</a>
          <Link to="/admin/videos" className="waves-effect waves-light btn">Update videos database</Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
