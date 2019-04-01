import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TanachStudyHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPerek: {
        division: '',
        section: 'Yehoshua',
        unit: '2',
        part: '',
        series: '',
      },
    };
  }

  componentWillMount() {
    // TODO: implement
    // get data from API
    // create link
    // save to state
  }

  render() {
    const { currentPerek } = this.state;
    const { section, unit } = currentPerek;
    return (
      <main className='container'>
        <section className='section center'>
          <h3>Welcome to Tanach Study!</h3>
          <p>Currently, Tanach Study is studying Sefer {section} Perek {unit}.</p>
          <Link to='/tanach-study/1'>Click here to go to today&#39;s part</Link>
        </section>
        <section className='section center'>
          <Link to='/tanach-study/parts'>
            <button className='btn tsblue'>Study a Perek</button>
          </Link>
        </section>
      </main>
    );
  }
}

export default TanachStudyHomePage;
