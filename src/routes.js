import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import About from './components/About/About.jsx';
import Parts from './components/Parts/Parts.jsx';
import Sefarim from './components/Sefarim/Sefarim.jsx';
import Perakim from './components/Perakim/Perakim.jsx';
import Donate from './components/Donate/Donate.jsx';
import Videos from './components/Videos/Videos.jsx';
import Signup from './components/Signup/Signup.jsx';
import Admin from './components/Admin/Admin.jsx';
import Dashboard from './components/Admin/Dashboard/Dashboard.jsx';
import Login from './components/Admin/Login/Login.jsx';
import AdminVideos from './components/Admin/Videos/Videos.jsx';

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='about' component={About} />
    <Route path='parts' component={Parts} />
    <Route path='sefarim/:sefer' component={Sefarim} />
    <Route path='perakim/:sefer/:perek' component={Perakim} />
    <Route path='donate' component={Donate} />
    <Route path='videos' component={Videos} />
    <Route path='signup' component={Signup} />
    <Route path='admin' component={Admin}>
      <IndexRoute component={Dashboard} />
      <Route path='dashboard' component={Dashboard} />
      <Route path='login' component={Login} />
      <Route path='videos' component={AdminVideos} />
    </Route>
  </Route>
);
