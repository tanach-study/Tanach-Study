import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (!this.props.isLoggedIn) this.props.history.push('/admin/login');
  }

  doLogout() {
    localStorage.removeItem('adminUserToken');
    localStorage.removeItem('timeLoggedIn');
    this.props.history.push('/admin/login');
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
