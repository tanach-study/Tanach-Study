import React, { Component } from 'react';
import { isValidEmail } from '../../lib/lib.js';

import Layout from '../layouts/main.jsx';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      error: null,
      success: false,
    };
  }

  doSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    if (name === null || name === '') {
      this.setState({
        error: 'Name is required',
      });
      return false;
    }
    if (email === null || email === '' || !isValidEmail(email)) {
      this.setState({
        error: 'Please enter a valid email',
      });
      return false;
    }
    if (subject === null || subject === '') {
      this.setState({
        error: 'Subject is required',
      });
      return false;
    }
    if (message === null || message === '') {
      this.setState({
        error: 'Please enter a message',
      });
      return false;
    }
    fetch('https://api.tanachstudy.com/contact', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    })
      .then(r => r.json())
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            error: null,
            success: true,
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        } else {
          this.setState({
            error: res.message,
            success: false,
          });
        }
      })
      .catch(err => this.setState({ error: err, success: false }));
    return true;
  }

  render() {
    const { name, email, subject, message, error, success } = this.state;
    const { location } = this.props;
    return (
      <Layout location={location}>
        <div className='container'>
          <div className='section center'>
            <div className='row valign-wrapper'>
              <div className='col l6 m6 s12 valign'>
                <div className='card'>
                  <div className='card-content'>
                    <h4 className='header'>Contact Information</h4>
                    <div>Tanach Study</div>
                    <div><a href='mailto:info@tanachstudy.com'>info@tanachstudy.com</a></div>
                    <br />
                    <i>Tanach Study is an unregistered 501(c)(3) organization.</i>
                  </div>
                </div>
              </div>
              <div className='col l6 m6 s12 valign'>
                <div className='card'>
                  {success && (
                    <div className='card-content'>
                      <h4>Message Received!</h4>
                      <p>
                        Thanks for your feedback! We love hearing from you, and are always working to
                        make Tanach Study a better platform for you.
                      </p>
                    </div>
                  )}
                  {!success && (
                    <div className='card-content'>
                      <h4 className='header'>Send Us a Message!</h4>
                      {error && <p className='red-text'>{error}</p>}
                      <form className='tsblue-form'>
                        <input
                          type='text'
                          name='name'
                          placeholder='Name'
                          required
                          value={name}
                          onChange={e => this.setState({ name: e.target.value, error: null })}
                        />
                        <input
                          type='text'
                          name='email'
                          placeholder='Email'
                          required
                          value={email}
                          onChange={e => this.setState({ email: e.target.value, error: null })}
                        />
                        <input
                          type='text'
                          name='subject'
                          placeholder='Subject'
                          required
                          value={subject}
                          onChange={e => this.setState({ subject: e.target.value, error: null })}
                        />
                        <input
                          type='text'
                          name='message'
                          placeholder='Message'
                          required
                          value={message}
                          onChange={e => this.setState({ message: e.target.value, error: null })}
                        />
                        <button
                          type='submit'
                          className='btn tsblue'
                          disabled={!!error}
                          onClick={e => this.doSubmit(e)}
                        >
                          Send Message
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>        
      </Layout>
    );
  }
}

export default Contact;
