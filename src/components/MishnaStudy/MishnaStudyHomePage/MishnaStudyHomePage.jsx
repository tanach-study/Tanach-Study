import React, { Component } from 'react';
import { Link } from 'gatsby';

class MishnaStudyHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      segment: 'introduction',
      section: 'introduction',
      unit: '1',
      part: '18',
    };
  }

  componentDidMount() {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    const utcDate = new Date(date);
    utcDate.setHours(0, 0, 0, 0);
    fetch(`https://api.tanachstudy.com/mishna-study/schedule/${utcDate.toISOString()}`)
      .then(r => r.json())
      .then((d) => {
        if (d) {
          const { segment, section, unit, part } = d || '';
          this.setState({
            segment,
            section,
            unit,
            part,
          });
        }
      })
      .catch(err => console.error(err));
  }

  render() {
    const { segment, section, unit, part } = this.state;
    const link = `/mishna-study/perek/${segment}/${section}/${unit}?part=${part}`;
    return (
      <main className='container'>
        <section className='section center'>
          <h3>Welcome to Mishna Study!</h3>
          <p>Currently, Mishna Study is studying {section} Part {part}.</p>
          {/* <p>Currently, Mishna Study is studying Seder {segment} 
            Masechet {section} Perek {unit} Mishna {part}.</p> */}
          <Link className='msred-text' to={link}>Click here to go to today&#39;s part</Link>
        </section>
        <div className='divider' />
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
