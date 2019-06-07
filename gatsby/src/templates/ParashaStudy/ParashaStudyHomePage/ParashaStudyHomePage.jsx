import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ParashaStudyHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPerek: {
        division: '',
        section: 'Vayikra',
        unit: 'Behar',
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
    const { currentPerek } = this.state;
    const { section, unit, part } = currentPerek;
    const sect = section.toLowerCase().replace(' ', '-');
    const pars = unit.toLowerCase().replace(' ', '-');
    return (
      <main className='container'>
        <section className='section center'>
          <h3>Welcome to Parasha Study!</h3>
          <p>
            Currently, Parasha Study is studying Sefer {section} Parashat {unit} Part {part}.
          </p>
          <Link to={`/parasha-study/perakim/${sect}/${pars}?part=${part}`}>
            Click here to go to today&#39;s part
          </Link>
        </section>
        <section className='section center'>
          <Link to='/parasha-study/parts'>
            <button className='btn psgreen'>Study a Perek</button>
          </Link>
        </section>
      </main>
    );
  }
}

export default ParashaStudyHomePage;
