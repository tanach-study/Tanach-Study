import React, { Component } from 'react';
import styles from './Signup.css';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      list1: false, // parasha
      list2: false, // nach
      list3: false, // mishna
      list4: true, // events
      all: false,
    }
    this.setAllLists = this.setAllLists.bind(this);
    this.setOneList = this.setOneList.bind(this);
  }

  setAllLists(e) {
    if (!this.state.all) {
      this.setState({
        list1: true,
        list2: true,
        list3: true,
        list4: true,
        all: true,
      });
    }
  }

  setOneList(e, key) {
    if (this.state.all) {
      this.setState({
        all: false,
        [key]: !this.state[key],
      });
    } else {
      let thisKeyVal = false;
      let otherKeyVals = true;
      for (let i = 1; i < 5 && otherKeyVals; i++) {
        if (key === `list${i}`) {
          thisKeyVal = this.state[key];
        } else if (!this.state[`list${i}`]) {
            otherKeyVals = false;
        } else {
          otherKeyVals = true;
        }
      }
      if (!thisKeyVal && otherKeyVals) {
        this.setState({
          list1: true,
          list2: true,
          list3: true,
          list4: true,
          all: true,
        });
      } else {
        this.setState({
          [key]: !this.state[key],
        });
      }
    }
  }

  doSubmit(e) {
    // stop default form action
    e.preventDefault();
    // tell parent that we're fetching
    this.props.fetching(true);
    // get the data from state
    const email = this.state.email;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const { list1, list2, list3, list4 } = this.state;
    if (!(list1 || list2 || list3 || list4)) {
      // TODO: tell the user
      return;
    }
    const lists = [list1, list2, list3, list4];
    // TODO: validate data
    // make the call
    fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        email: email,
        firstName: firstName,
        lastName: lastName,
        emailLists: JSON.stringify(lists),
      })
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.status == 'OK') {
        const obj = {
          email: resp.email,
          fname: resp.first_name,
          lname: resp.last_name,
          lists: resp.email_lists,
        };
        this.props.response(false, obj);
      } else {
        this.props.response(true, resp);
      }
    })
    .catch(err => {
      this.props.response(true, err.message);
    });
  }

  render() {
    return (
      <form className='tsblue-form'>
        <input type='text' name='firstName' placeholder='First Name' required autoFocus value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })} />
        <input type='text' name='lastName' placeholder='Last Name' required value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} />
        <input type='email' name='email' placeholder='Email' required value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
        <div className='row'>
          <p className='center-align'>Please select which lists you'd like to subscribe to:</p>
          <i>If you wish to be notified of events & lectures, please also select the events list; this is managed separately from our daily emails.</i>
        </div>
        <div className='row'>
          <div className='col l12 m12 s12 left-align'>
            <input
              type='checkbox'
              id='allLists'
              className={styles['ts-checkbox']}
              checked={this.state.all}
              onChange={this.setAllLists}
            />
            <label htmlFor='allLists' className={styles['checkbox-label']}><b>All:</b> Sign up to all of our email lists!</label>
          </div>
        </div>
        <div className='row'>
          <div className='col l12 m12 s12 left-align'>
            <input
              type='checkbox'
              id='list1'
              className={styles['ts-checkbox']}
              checked={this.state.list1}
              onChange={(e) => this.setOneList(e, 'list1')}
            />
            <label htmlFor='list1' className={styles['checkbox-label']}><b>Parashat Hashavua:</b> Daily email with classes of each week's parasha</label>
          </div>
        </div>
        <div className='row'>
          <div className='col l12 m12 s12 left-align'>
            <input
              type='checkbox'
              id='list2'
              className={styles['ts-checkbox']}
              checked={this.state.list2}
              onChange={(e) => this.setOneList(e, 'list2')}
            />
            <label htmlFor='list2' className={styles['checkbox-label']}><b>Nevi'im & Ketuvim:</b> Daily email methodically studying a perek a day of Nach</label>
          </div>
          </div>
        <div className='row'>
          <div className='col l12 m12 s12 left-align'>
            <input
              type='checkbox'
              id='list3'
              className={styles['ts-checkbox']}
              checked={this.state.list3}
              onChange={(e) => this.setOneList(e, 'list3')}
            />
            <label htmlFor='list3' className={styles['checkbox-label']}><b>MishnaStudy:</b> Daily email studying Mishna with Perush HaRambam (coming soon)</label>
          </div>
        </div>
        <div className='row'>
          <div className='col l12 m12 s12 left-align'>
            <input
              type='checkbox'
              id='list4'
              className={styles['ts-checkbox']}
              checked={this.state.list4}
              onChange={(e) => this.setOneList(e, 'list4')}
            />
            <label htmlFor='list4' className={styles['checkbox-label']}><b>Events:</b> Periodic email regarding upcoming events and lectures</label>
          </div>
        </div>
        <button type='submit' className='btn tsblue' onClick={(e) => this.doSubmit(e)}>Sign Up!</button>
      </form>
    );
  }
}

export default SignupForm;
