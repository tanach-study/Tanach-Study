import React, { Component } from 'react';
import Nach from './Nach.jsx';
import Torah from './Torah.jsx';
import LanguageSelector from './LanguageSelector.jsx';
import Spinner from '../Spinner/Spinner.jsx';

// import tanach from '../../../public/tanach/tanach.json';

import styles from './Tanach.css';

class Tanach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'heb',
      haveTanach: false,
      tanach: {},
      part: props.selectedPart || 1,
    };
    this.selectLanguage = this._selectLanguage.bind(this);
    this.selectPart = this._selectPart.bind(this);
  }

  componentDidMount() {
    fetch(`${TANACH_URL}/tanach.json`)
      .then(r => r.json())
      .then((data) => {
        this.setState({
          haveTanach: true,
          tanach: data,
        });
      })
      .catch(err => console.error(err));
  }

  componentWillReceiveProps(newProps) {
    const { part } = this.state;
    if (newProps.selectedPart !== part) {
      this.setState({
        part: newProps.selectedPart,
      });
    }
  }

  _selectLanguage(lang) {
    this.setState({
      show: lang,
    });
  }

  _selectPart(id) {
    this.setState({
      part: id,
    });
  }

  render() {
    if (this.state.haveTanach) {
      const { sefer, part } = this.props || '';

      const { tanach } = this.state;

      const seferText = tanach[sefer] || {};
      const hebrewText = seferText.hebrew || [];
      const englishText = seferText.english || [];

      if (part === 'torah') {
        const { partsBreakdown } = this.props || [];
        const tabs = partsBreakdown.map(torahPart => (
          <li
            key={`tab-${torahPart.number}`}
            className={`tab ${styles['part-tab']} tsblue-text ${this.state.part === torahPart.number ? styles['active-part'] : ''} clickable`}
            onClick={() => this.selectPart(torahPart.number)}
          >
            Part {torahPart.number}
          </li>
        ));

        const thisPart = partsBreakdown[this.state.part - 1] || {};

        return (
          <div>
            <LanguageSelector clickHandler={this.selectLanguage} />
            <div className='row'>
              <div className='card'>
                <div className='card-content'>
                  <ul className='tabs center'>
                    {tabs}
                  </ul>
                  <Torah
                    hebrew={hebrewText}
                    english={englishText}
                    show={this.state.show}
                    sefer={sefer}
                    parasha={this.props.parasha.id}
                    startChapter={thisPart.start_chapter}
                    startVerse={thisPart.start_verse}
                    endChapter={thisPart.end_chapter}
                    endVerse={thisPart.end_verse}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <LanguageSelector clickHandler={this.selectLanguage} />
            <div className='row'>
              <div className='card'>
                <div className='card-content'>
                  <Nach
                    hebrew={hebrewText}
                    english={englishText}
                    show={this.state.show}
                    perek={this.props.perek}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
    return (
      <div className='row center'>
        <div className='col l12 m12 s12'>
          <Spinner />
        </div>
      </div>
    );
  }
}

export default Tanach;
