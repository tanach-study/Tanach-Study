import React, { Component } from 'react';
import Nach from './Nach.jsx';
import Torah from './Torah.jsx';
import LanguageSelector from './LanguageSelector.jsx';
import TabItem from './TabItem.jsx';
import Spinner from '../Spinner/Spinner.jsx';

import styles from './Tanach.module.css';

class Tanach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'heb',
      haveTanach: false,
      tanach: {},
      selectedPart: props.selectedPart || 1,
    };
    this.selectLanguage = this._selectLanguage.bind(this);
    this.selectPart = this._selectPart.bind(this);
  }

  componentDidMount() {
    const { part } = this.props;
    const fileName = `${part.replace(' ', '_')}.json`;

    fetch(`https://cdn.tanachstudy.com/assets/tanach/${fileName}`)
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
    const { selectedPart } = this.state;
    if (newProps.selectedPart !== selectedPart) {
      this.setState({
        selectedPart: newProps.selectedPart,
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
      selectedPart: id,
    });
  }

  render() {
    const { haveTanach } = this.state;
    if (haveTanach) {
      const { sefer, perek, part } = this.props;
      const { tanach, selectedPart, show } = this.state;


      const seferText = tanach[sefer] || {};
      const hebrewText = seferText.hebrew || [];
      const englishText = seferText.english || [];

      if (part === 'torah') {
        const { partsBreakdown } = this.props || [];
        const tabs = partsBreakdown.map(torahPart => (
          <TabItem
            key={`tab-${torahPart.part}`}
            isActive={selectedPart === torahPart.part}
            click={() => this.selectPart(torahPart.part)}
            content={`Part ${torahPart.part}`}
          />
        ));

        const { parasha } = this.props;
        const { start_chapter: sc, start_verse: sv, end_chapter: ec, end_verse: ev } = parasha;

        let thisPart;
        if (selectedPart === 0) {
          thisPart = {
            start_chapter: sc,
            start_verse: sv,
            end_chapter: ec,
            end_verse: ev,
          };
        } else {
          thisPart = partsBreakdown[selectedPart - 1] || {};
        }

        return (
          <div>
            <LanguageSelector clickHandler={this.selectLanguage} />
            <div className='row'>
              <div className='card'>
                <div className='card-content'>
                  <ul className='tabs center'>
                    <TabItem
                      isActive={selectedPart === 0}
                      click={() => this.selectPart(0)}
                      content='Entire Parasha'
                    />
                    {tabs}
                  </ul>
                  <Torah
                    hebrew={hebrewText}
                    english={englishText}
                    show={show}
                    sefer={sefer}
                    parasha={parasha.id}
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
      }
      // else part is not torah
      return (
        <div>
          <LanguageSelector clickHandler={this.selectLanguage} />
          <div className='row'>
            <div className='card'>
              <div className='card-content'>
                <Nach
                  hebrew={hebrewText}
                  english={englishText}
                  show={show}
                  perek={perek}
                />
              </div>
            </div>
          </div>
        </div>
      );
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
