import React, { Component } from 'react';
import { Link } from 'gatsby';

import { ProgramContext } from '../../../app-context.js';

class TanachStudyHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPerek: {
        division: '',
        section: 'Yeshayahu',
        unit: '14',
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
    const sect = section.toLowerCase().replace(' ', '-');
    return (
      <main className='container'>
        <section className='section center'>
          <h3>Welcome to Tanach Study!</h3>
          <p>Currently, Tanach Study is studying Sefer {section} Perek {unit}.</p>
          <Link to={`/tanach-study/perakim/${sect}/${unit}`}>
            Click here to go to today&#39;s part
          </Link>
        </section>
        <section className='section center'>
          <Link to='/tanach-study/parts'>
            <ProgramContext.Consumer>
              {theme => <button className={`btn ${theme.backgroundClass}`}>Study a Perek</button>}
            </ProgramContext.Consumer>
          </Link>
        </section>
      </main>
    );
  }
}

export default TanachStudyHomePage;
