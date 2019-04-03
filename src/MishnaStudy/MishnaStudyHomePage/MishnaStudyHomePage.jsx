import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MishnaStudyHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMishna: {
        division: 'Mishna',
        segment: 'Zeraim',
        section: 'Berachot',
        unit: '1',
        part: '1',
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
    const { currentMishna } = this.state;
    const { segment, section, unit, part } = currentMishna;
    return (
      <main className='container'>
        <section className='section center'>
          <h3>Welcome to Mishna Study!</h3>
          <p>Currently, Mishna Study is studying Seder {segment} Masechet {section} Perek {unit} Mishna {part}.</p>
          <Link to='/mishna-study/1'>Click here to go to today&#39;s part</Link>
        </section>
        <section className='section center'>
          <Link to='/mishna-study/parts'>
            <button className='btn msred'>Study a Mishna</button>
          </Link>
        </section>
      </main>
    );
  }
}

export default MishnaStudyHomePage;
